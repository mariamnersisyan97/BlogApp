import "./index.css";
import React from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";

function App() {
  // const [blogAdd, setBlogAdd] = useState("");

  // const handleBlogAdd =(e) => {
  //   e.target.value
  // }
  // setBlogAdd()
  return (
    <>
      <Navbar />

      <Cards />
    </>
  );
}

export default App;
