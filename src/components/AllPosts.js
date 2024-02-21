import Image from "next/image";
import Posts from "../components/posts/posts";


async function getPosts() {
  const response = await fetch('https://mt-kenya-experience-api.vercel.app/posts');
  return response.json()
}

export default async function  AllPosts() {
  const posts_data = await getPosts()
  return (
    <>
        <Posts posts={posts_data}/>
    </>
  );
}