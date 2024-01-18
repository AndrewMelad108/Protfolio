import React from "react";
import "./Footer.css";
function Footer() {
  const scrollToRef = (offsetTop) => {
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <footer className="flex">
      <ul className="flex links">
        <li>
          <button
            onClick={() => {
              scrollToRef(0);
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              scrollToRef(400);
            }}
          >
            Projects
          </button>
        </li>

        <li>
          <button
            onClick={() => {
              scrollToRef(50000);
            }}
          >
            Contact
          </button>
        </li>
      </ul>
      <p>© 2023 Spencer Sharp. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
