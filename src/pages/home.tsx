import React, { useEffect, useState } from "react";
import { getLocalStorage } from "../utils/localStorage";
import Blog from "../utils/intefaces";
import BlogCard from "../components/BlogCard";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const tempBlogs = getLocalStorage("blogs");
    setBlogs(tempBlogs);
  }, []);

  return (
    <div className="p-8 text-center">
      <h1 className="my-8 text-4xl tracking-tight font-extrabold text-center text-gray-900">
        Read blogs
      </h1>
      <div className="flex flex-col items-center gap-5">
        {blogs.length === 0 ? (
          <div className="flex h-full mt-20 items-center justify-center p-5 bg-white w-full">
            <div className="text-center">
              <div className="inline-flex rounded-full bg-yellow-100 p-4">
                <div className="rounded-full stroke-yellow-600 bg-yellow-200 p-4">
                  <svg
                    className="w-10 h-10"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.0002 9.33337V14M14.0002 18.6667H14.0118M25.6668 14C25.6668 20.4434 20.4435 25.6667 14.0002 25.6667C7.55684 25.6667 2.3335 20.4434 2.3335 14C2.3335 7.55672 7.55684 2.33337 14.0002 2.33337C20.4435 2.33337 25.6668 7.55672 25.6668 14Z"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
              <h3 className="mt-5 text-2xl font-bold text-slate-800">
                404 - Blogs not Found
              </h3>
            </div>
          </div>
        ) : (
          blogs.map((blog) => {
            return (
              <BlogCard
                key={blog.id}
                id={blog.id}
                title={blog.title}
                body={blog.body}
              />
            );
          })
        )}
      </div>
      <Link to="/create" className="fixed top-[83%] left-[75%] lg:left-[93%]">
        <button className="p-0 w-16 h-16 bg-gray-700 hover:bg-gray-800 rounded-full shadow hover:shadow-lg mouse transition ease-in duration-200 focus:outline-none">
          <svg
            viewBox="0 0 20 20"
            enableBackground="new 0 0 20 20"
            className="w-10 h-10 inline-block"
          >
            <path
              fill="#FFFFFF"
              d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                 C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                 C15.952,9,16,9.447,16,10z"
            />
          </svg>
        </button>
      </Link>
    </div>
  );
};

export default Home;
