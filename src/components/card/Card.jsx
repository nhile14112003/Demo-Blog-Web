'use client'
import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";
import React from 'react'

const Card = ({ key, item }) => {
  return (
    <div className={styles.container} key={key}>
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
  );
};

export default Card;
