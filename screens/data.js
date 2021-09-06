import React, { useState } from "react";
export default function Data() {
  const [posts, setPosts] = useState([
    { title: "post1", content: "Post 1 Content", topic: "1", key: "1" },
    { title: "post2", content: "Post 2 Content", topic: "1", key: "2" },
    { title: "post3", content: "Post 3 Content", topic: "2", key: "3" },
    { title: "post4", content: "Post 4 Content", topic: "2", key: "4" },
    { title: "post5", content: "Post 5 Content", topic: "3", key: "5" },
  ]);
  const addPost = (post) => {
    post.key = Math.random().toString();
    setPosts((currentPosts) => {
      return [post, ...currentPosts];
    });
  };
}
