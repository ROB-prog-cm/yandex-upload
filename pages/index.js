import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from "next/link";
import Auth from "../src/components/auth";
import React from "react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Next App</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
        <script src="https://yastatic.net/s3/passport-sdk/autofill/v1/sdk-suggest-with-polyfills-latest.js"/>
      <>
        <Link href="/"><Auth/></Link>
      </>
    </div>
  )
}
