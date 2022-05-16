import React, { useState, useRef } from "react";

function CreatePost() {
  const inputRef = useRef();
  const [input, setInput] = useState("");
  const [title, setTitle] = useState("");

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleTitle = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };
  const handleOnClick = () => {
    inputRef.current.handleOnClick();
  };

  // const createPost = async () => {};
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
        ref={inputRef}
      />
      <textarea placeholder="Post..." />
      <button className="post-btn" onClick={handleOnClick}>
        Create Post{" "}
      </button>
    </>
  );
}
export default CreatePost;
