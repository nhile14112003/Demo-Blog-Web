"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./deleteAndUpdatePost.module.css";
import Image from "next/image";

const DeleteAndUpdatePost = ({ id }) => {
  const router = useRouter();
  const deletePost = async () => {
    //e.preventDefault()
    await fetch(`http://localhost:3000/api/posts/${id}`, {
      method: "DELETE",

    })
      .then(() => {
        //toast.success('Updated Successfully')
        router.refresh()
        //router.push('/')
        console.log("Successfull")
      })

      .catch((err) => {
        throw new Error(err)
      })
  }
  return (
    <div>
      <div className={styles.dropdown}>
        <button class={styles.dropbtn}>
          <img src="/dots_horizontal_icon.png" alt="" style={{ width: "23px", height: "auto" }} />
        </button>
        <div className={styles.dropdownContent}>
          <Link className={styles.button} href={`/editPost/${id}`}>
            <img src="/edit.png" alt="" style={{ width: "25px", height: "auto" }} />
          </Link>
          <button className={styles.button} onClick={deletePost}>
            <img src="/delete.png" alt="" style={{ width: "25px", height: "auto" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAndUpdatePost;
