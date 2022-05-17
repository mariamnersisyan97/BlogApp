import React, { useState } from "react";

const newPost = {
  name: "",
};
function CreatePost() {
  const [input, setInput] = useState("");
  const [title, setTitle] = useState("");

  const handleOnChange = (e) => {
    setInput((newPostState) => ({
      ...newPostState,
      [e.target.name]: e.target.value,
    }));
    console.log(title, "submit");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleTitle = (e) => {
    setTitle((newPostState) => ({
      ...newPostState,
      [e.target.name]: e.target.value,
    }));
    console.log(title);
  };
  const handleOnClick = () => {
    console.log(input, "submit");
  };

  return (
    <>
      <hr />
      <h2> Create A Post </h2>
      <label className="title" onChange={handleTitle}>
        Title{" "}
      </label>
      <input
        value={input}
        onChange={handleOnChange}
        handleFormSubmit={handleSubmit}
        placeholder="Title..."
        name="title"
      />
      <textarea placeholder="Post..." name="post" onChange={handleOnChange} />
      <button className="post-btn" onClick={handleOnClick}>
        Create Post{" "}
      </button>
    </>
  );
}
export default CreatePost;
