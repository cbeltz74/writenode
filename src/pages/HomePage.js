import { useEffect, useState } from "react";
import {getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { PostCard } from "../components";

const postsRef = collection(db, "posts");

export const HomePage = () => {

  const [posts, setPosts ] = useState([]);

  useEffect(() => {
    async function getPosts(){
      const data = await getDocs(postsRef);
      setPosts(data.docs.map((document) => (
        {...document.data(), id: document.id}
        )
      ));
    }
    console.log("---");
    getPosts();
  }, []);

  return (
    <section>
      { posts.map(post => (
        <PostCard key={post.id} post={post}/>
      ))}
    </section>
  )
}
