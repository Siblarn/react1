import React, { useState, useEffect } from "react";
import axios from "axios";
const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});

export default function Testapi() {
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getPost() {
      const response = await client.get("/1");
      setPost(response.data);
    }
    getPost();
  }, []);

  async function createPost() {
    await client
      .post("/", {
        title: "Hello World",
        body: "This is a new post.",
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  async function updatePost() {
    await client
      .put("1", {
        title: "Hello World!",
        body: "This is an updated post.",
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  async function deletePost() {
    await client.delete("1").then(() => {
      alert("Post delted!");
      setPost(null);
    });
  }
  if (error) return `Error: ${error.message}`;
  if (!post) return "No post!";

  return (
    <div className="TestAPI">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={createPost}>Create Post</button>
      <button onClick={updatePost}>Update Post</button>
      <button onClick={deletePost}>Delete Post</button>
    </div>
  );
}
