import Image from "next/image";
import Posts from "../components/posts/posts";
import {auth} from '../auth';


async function getPosts() {
  const response = await fetch('https://mt-kenya-experience-api.vercel.app/posts');

  return response.json()
}

export default async function  AllPosts() {
  const session = await auth();
  const posts_data = await getPosts()
  return (
    <>
        <Posts session={session} posts={posts_data}/>
    </>
  );
}