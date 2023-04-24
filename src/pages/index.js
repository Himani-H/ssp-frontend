import Welcome from "./../components/welcome";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";


export default function WelcomePage() {
  const { push } = useRouter();

  useEffect(() => {
    setTimeout(() => {
      push("/authenticate");
    }, 200);
  });

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <Welcome />
      </main>
     
    </>
  );
}
