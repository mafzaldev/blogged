import { Link } from "react-router-dom";
import Blog from "../utils/intefaces";

const BlogCard = ({ id, title, body }: Blog) => {
  return (
    <Link
      to={`/blog/${id}`}
      className="block max-w-lg h-40 overflow-hidden text-ellipsis p-4 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 cursor-pointer"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-left text-gray-900">
        {title}
      </h5>
      <p
        className="font-normal text-gray-700 text-left"
        dangerouslySetInnerHTML={{ __html: body }}
      ></p>
    </Link>
  );
};

export default BlogCard;
