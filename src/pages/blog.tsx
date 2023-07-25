import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostCard from "../components/PostCard";

interface Blog {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Blog: React.FC = () => {
  const [post, setPost] = useState<Blog>();
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((json) => setPost(json));
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <PostCard id={post?.id} title={post?.title} body={post?.body} />
    </div>
  );
};

export default Blog;
