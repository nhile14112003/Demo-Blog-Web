"use client";

import Image from "next/image";
import styles from "./editPostId.module.css";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";
import ReactQuill from "react-quill";

const EditPostId = ({ data }) => {
  const router = useRouter();
  const { status } = useSession();
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState(data?.img);
  const [value, setValue] = useState(data?.desc);
  const [title, setTitle] = useState(data?.title);
  const [catSlug, setCatSlug] = useState(data?.catSlug);
  const [isUploaded, setUploaded] = useState(true);
  const [percentUploaded, setPercentUploaded] = useState("");
  const storage = getStorage(app);
  const addImage = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      //setFile(e.target.files[0])
    }

    reader.onload = (readerEvent) => {
      setFile(e.target.files[0])
      setMedia(readerEvent.target.result);
    }
  };

  useEffect(() => {

    const upload = () => {
      setUploaded(false)
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // console.log("Upload is " + progress + "% done");
          setPercentUploaded("Upload " + Math.round(progress) + "%")
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => { },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
            setUploaded(true)
          })
        }
      );
    };

    file && upload();

  }, [file]);

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch(`http://localhost:3000/api/posts/${data.id}`, {
      method: "PUT",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "style", //If not selected, choose the general category
      }),
    })
    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.id}`);
      router.refresh();
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Title"
        className={styles.input}
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <select className={styles.select} onChange={(e) => setCatSlug(e.target.value)} value={catSlug}>
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
      <input
        type="file"
        id="image"
        accept="image/*"
        onChange={(e) => addImage(e)}
        style={{ display: "none" }}
      />
      <label htmlFor="image">
        <Image src="/image.png" alt="" width={30} height={30} />
      </label>
      {(media === null) ? null : <div align="center">
        <img src={media} alt="" className={styles.image} align="center" />
      </div>}

      <ReactQuill
        className={styles.textArea}
        theme="bubble"
        value={value}
        onChange={setValue}
        placeholder="Tell your story..."
      />
      {isUploaded ? <button className={styles.publish} onClick={handleSubmit}>
        Update
      </button> : <button className={styles.publish} disabled={!isUploaded}>
        {percentUploaded}
      </button>}


    </div>
  );
};

export default EditPostId;