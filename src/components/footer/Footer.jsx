import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.jpg" alt="lama blog" width={50} height={50} style={{ borderRadius: "50%" }} />
          <h1 className={styles.logoText}>Demo Blog</h1>
        </div>
        <p className={styles.desc}>
          //description not know write well
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/twitter.png" alt="" width={19} height={19} />
          <Image src="/youtube.png" alt="" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Contacts</span>
          <Link href="https://www.facebook.com/jin.kisa.71?mibextid=9R9pXO">Facebook</Link>
          <Link href="https://www.instagram.com/smallpear32">Instagram</Link>
          <Link href="/">Twitter</Link>
          <Link href="/">Youtube</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Contributors</span>
          <div>SmallPear</div>
          <div>Hami</div>
          <div>DinazCat</div>
          <div>ZenyB</div>
          <div>LinhBao</div>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href={`/blog?cat=style`}>Style</Link>
          <Link href={`/blog?cat=fashion`}>Fashion</Link>
          <Link href={`/blog?cat=food`}>Food</Link>
          <Link href={`/blog?cat=travel`}>Travel</Link>
          <Link href={`/blog?cat=culture`}>Culture</Link>
          <Link href={`/blog?cat=coding`}>Coding</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
