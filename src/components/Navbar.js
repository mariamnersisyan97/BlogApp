import React from "react";

function Navbar() {
  return (
    <>
      <nav>
        <ul className="nav-ul">
          <li>
            <a href="default.asp">Home</a>
          </li>
          <li>
            <a href="news.asp">Posts</a>
          </li>
          <li>
            <a href="news.asp">Profile</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
