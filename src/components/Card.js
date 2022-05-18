import React, { useState } from "react";

function Card() {
  const [count, setCount] = useState(0);
  function incrementLikes() {
    let newCount = count + 1;
    setCount(newCount);
  }

  return (
    <>
      <div className="card">
        {/* <img alt="Avatar" style={{ width: '100%'}}> */}
        <div className="container">
          <h4>
            <b>Tech in 2022</b>
          </h4>
          <h5>Architect & Engineer</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button onClick={incrementLikes}>Likes: {count}</button>
        </div>
      </div>
    </>
  );
}
export default Card;
