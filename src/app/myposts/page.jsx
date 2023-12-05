import { getAuthSession } from "@/utils/auth";
import styles from "./myposts.module.css";
import Link from "next/link";
import Image from "next/image";
import DeleteAndUpdatePost from "@/components/deleteAndUpdatePost/DeleteAndUpdatePost";
const getData = async () => {
  const session = await getAuthSession();
  const res = await fetch(`http://localhost:3000/api/userPost?email=${session.user.email}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json()
};
const MyPostsPage = async () => {
  const data = await getData();
  return (
    <div style={{ minHeight: "22.5em" }}>
      {data?.map((item) => (
        <div style={{ display: "flex", gap: "20px" }}>
          <div className={styles.container}>
            {item.img && (
              <div className={styles.imageContainer}>
                <img src={item.img} alt="" className={styles.image} />
              </div>
            )}
            <div className={styles.textContainer}>
              <div className={styles.detail}>
                <span className={styles.date}>
                  {new Date(item.createdAt).toLocaleString('en-GB')} -{" "}
                </span>
                <span className={styles.category}>{item.catSlug}</span>
              </div>
              <Link href={`/posts/${item.id}`}>
                <h1 className={styles.title}>{item.title}</h1>
              </Link>
              {/* <p className={styles.desc}>{item.desc.substring(0, 60)}</p> */}
              <div className={styles.desc} dangerouslySetInnerHTML={{ __html: (item?.desc.length > 40) ? item?.desc.substring(0, 40) + " ..." : item?.desc }} />
              <Link href={`/posts/${item.id}`} className={styles.link}>
                Read More
              </Link>
            </div>

          </div>
          <DeleteAndUpdatePost id={item.id} />
        </div>
      ))}
    </div>
  )
}
export default MyPostsPage