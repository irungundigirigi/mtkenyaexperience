import Image from "next/image";
import styles from "./page.module.css";
import Posts from "../components/posts/posts";
import Hero from "../components/hero/hero";
import Form from "../components/form/form";
import {auth} from "../auth";

async function getPosts() {
  const response = await fetch('https://mt-kenya-experience-api.vercel.app/posts');
  return response.json()
}

export default async function  Home() {
  const posts = await getPosts()
  const session = await auth();
  return (
    <main className={styles.main}>
      <Hero />
      <div className={styles.mainContent}>
        <div className={styles.posts}> <Posts session={session} posts={posts}/></div>
        <div className={styles.form}> {session && <Form session={session} />}</div>
      </div>
    </main>
  );
}


