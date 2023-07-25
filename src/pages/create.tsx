import { useState } from "react";
import ReactQuill from "react-quill";
import { v4 as uuidv4 } from "uuid";

import "react-quill/dist/quill.snow.css";
import { setLocalStorage } from "../utils/localStorage";
import { getCurrentDate } from "../utils/utils";
import BackButton from "../components/BackButton";

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
    if (title === "" || body === "" || body === "<p><br></p>") {
      alert("One of the fields are empty");
      return;
    }

    const currentDate = getCurrentDate();

    setLocalStorage("blogs", {
      id: uuidv4(),
      title,
      body,
      date: currentDate,
    });
    setTitle("");
    setBody("");
    alert("Blog uploaded!");
  };

  return (
    <div className="p-10">
      <BackButton />

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
          required
        />
        <ReactQuill
          theme="snow"
          value={body}
          modules={modules}
          formats={formats}
          onChange={setBody}
          placeholder="Write something amazing..."
          className="rounded shadow my-5"
        />
        <button
          type="submit"
          className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded text-sm w-full px-5 py-2.5 mr-2 mb-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
