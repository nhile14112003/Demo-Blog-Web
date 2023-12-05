import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";
const data =
  [
    {
      img: "/style.png",
      slug: "style"
    },
    {
      img: "/fashion.png",
      slug: "fashion"
    },
    {
      img: "/food.png",
      slug: "food"
    },
    {
      img: "/fashion.png",
      slug: "travel"
    },
    {
      img: "/culture.png",
      slug: "culture"
    },
    {
      img: "/coding.png",
      slug: "coding"
    }
  ]

const CategoryList = async () => {
  return (
    <div>
      <h1 className={styles.title}>Categories</h1>
      <div className={styles.categories}>
        {data?.map((item) => (
          <Link
            href={`/blog?cat=${item.slug}`}
            className={`${styles.category} ${styles[item.slug]}`}
            key={item._id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.slug}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
