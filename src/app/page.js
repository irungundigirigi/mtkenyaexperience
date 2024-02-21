
import styles from "./page.module.css";
import AllPosts from "../components/AllPosts";
import Hero from "../components/hero/hero";
import Form from "../components/form/form";
import {auth} from "../auth";


export default async function  Home() {
  const session = await auth();
  return (
    <main className={styles.main}>
      <Hero />
      <div className={styles.mainContent}>
        <div className={styles.posts}><AllPosts /></div>
        <div className={styles.form}> {session && <Form session={session} />}</div>
      </div>
    </main>
  );
}


