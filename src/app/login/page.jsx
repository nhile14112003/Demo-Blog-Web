"use client";
import { signIn, useSession } from "next-auth/react";
import styles from "./loginPage.module.css";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { status } = useSession();

  const router = useRouter();

  // if (status === "loading") {
  //   return <div className={styles.loading}>Loading...</div>;
  // }

  // if (status === "authenticated") {
  //   router.push("/")
  // }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 align="center">Sign In</h1>
        <div className={styles.socialButton} style={{ backgroundColor: "#ff5555" }} onClick={() => signIn("google", { callbackUrl: 'http://localhost:3000' })}>
          Sign in with Google
        </div>
        <div className={styles.socialButton} style={{ backgroundColor: "#111" }} onClick={() => signIn("github", { callbackUrl: 'http://localhost:3000' })}>Sign in with Github</div>
      </div>
    </div>
  );
};

export default LoginPage;
