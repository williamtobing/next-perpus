import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Perpustakaan Kepak <a href="/">Sayap Suci</a>
        </h1>

        <p className={styles.description}>
          Get started by editing from{" "}
          <code className={styles.code}>/dashboard</code>
        </p>

        <div className={styles.grid}>
          <Link href="/login">
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Login &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
          </Link>

          <Link href="/dashboard">
            <a className={styles.card}>
              <h2>Dashboard &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;
