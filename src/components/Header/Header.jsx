import "./Header.css";
import { useState, useEffect } from "react";
export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState("dark");
  const handleClick = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }, [theme]);

  const scrollToRef = (offsetTop) => {
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <header className="flex">
      <button
        className="flex mode none"
        onClick={() => {
          setShowMenu(true);
        }}
      >
        <span className="icon-menu"></span>
      </button>
      <div></div>
      <nav>
        <ul className="flex">
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
                scrollToRef(700);
              }}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                scrollToRef(1913);
              }}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
      {showMenu && (
        <div className="fixed">
          <ul className="Model">
            <li
              onClick={() => {
                setShowMenu(false);
              }}
            >
              <button>
                <span className="icon-close"></span>
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToRef(0);
                  setShowMenu(false);
                }}
              >
                About
              </button>
            </li>

            <li>
              <button
                onClick={() => {
                  scrollToRef(1000);
                  setShowMenu(false);
                }}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToRef(3550);
                  setShowMenu(false);
                }}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
      <button
        onClick={() => {
          handleClick();
        }}
        className="flex mode"
      >
        {theme === "dark" ? (
          <span className="icon-moon-o"></span>
        ) : (
          <span className="icon-sun"></span>
        )}
      </button>
    </header>
  );
}
