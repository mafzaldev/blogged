import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Blog from "../utils/intefaces";
import { findLocalStorage } from "../utils/localStorage";
import BackButton from "../components/BackButton";
import { isObjectEmpty } from "../utils/utils";

const BlogPage: React.FC = () => {
  const [blog, setBlog] = useState<Blog>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const tempBlog = findLocalStorage("blogs", id!);
    if (isObjectEmpty(tempBlog)) {
      navigate(-1);
    }
    console.log(tempBlog);
    setBlog(tempBlog);
  }, []);

  return (
    <div className="p-10">
      <BackButton />
      <h1 className="mt-5 text-4xl tracking-tight font-extrabold text-gray-900">
        {blog?.title}
      </h1>
      <p className="my-2">
        Uploaded on:{" "}
        <span className=" font-semibold text-gray-700 text-left">
          {blog?.date}
        </span>
      </p>
      <p
        className="font-normal text-gray-700"
        dangerouslySetInnerHTML={{
          __html: blog?.body || "Error while fetching blog body",
        }}
      ></p>
    </div>
  );
};

export default BlogPage;
