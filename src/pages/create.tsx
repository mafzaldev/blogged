import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(title, body);
  };

  return (
    <form className="p-5 lg:w-1/2 mx-auto" onSubmit={handleSubmit}>
      <h1 className="my-5 text-4xl tracking-tight font-extrabold text-center text-gray-900">
        Create a new blog post
      </h1>
      <input
        type="text"
        value={title}
        placeholder="Blog Title"
        onChange={(e) => setTitle(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 bg-white leading-tight focus:outline-none focus:shadow-outline"
      />
      <ReactQuill
        theme="snow"
        value={body}
        modules={modules}
        formats={formats}
        onChange={setBody}
        placeholder="Write something amazing..."
        className="rounded shadow my-5 h-full"
      />
      <button
        type="submit"
        className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 mr-2 mb-2"
      >
        Submit
      </button>
    </form>
  );
};

export default Create;
