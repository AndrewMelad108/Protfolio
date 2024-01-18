import "./Main.css";
import { useState } from "react";
import Projects from "../../Projects.json";
import { AnimatePresence, motion } from "framer-motion";
export default function Main() {
  const [active, setActive] = useState("all");
  const [projects, setProjects] = useState(Projects);
  const handleClick = (category) => {
    setActive(category);
    if (category === "all") {
      setProjects(Projects); // Display all projects
    } else {
      let newProjects = Projects.filter((project) => {
        const foundCategory = project.category.find((cat) => cat === category);
        return foundCategory === category;
      });
      console.log(newProjects);
      setProjects(newProjects);
    }
  };
  return (
    <main className="flex">
      <div className="links flex">
        <button
          onClick={() => {
            handleClick("all");
          }}
          className={active === "all" ? "link active" : "link"}
        >
          all projects
        </button>
        <button
          onClick={() => {
            handleClick("CSS");
          }}
          className={active === "CSS" ? "link active" : "link"}
        >
          HtML & CSS
        </button>
        <button
          onClick={() => {
            handleClick("tailwindcss");
          }}
          className={active === "tailwindcss" ? "link active" : "link"}
        >
          tailwind css
        </button>
        <button
          onClick={() => {
            handleClick("Js");
          }}
          className={active === "Js" ? "link active" : "link"}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            handleClick("Vue");
          }}
          className={active === "Vue" ? "link active" : "link"}
        >
          Vue
        </button>
        <button
          onClick={() => {
            handleClick("React");
          }}
          className={active === "React" ? "link active" : "link"}
        >
          React & MUI
        </button>
      </div>
      <div className="projects flex">
        <AnimatePresence>
          {projects.map((project) => {
            return (
              <motion.div
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                className="project-card"
                key={project.id}
              >
                <motion.img
                  src={project.project_image}
                  alt="project-card"
                  className="project-image "
                />
                <p className="title">{project.project_title}</p>
                <p className="sub-title">{project.project_info}</p>
                <div className="flex project-icons">
                  <div className="flex left">
                    <a href={project.project_link}>
                      <span className="icon-github"></span>
                    </a>
                    <a href={project.project_link}>
                      <span className="icon-link1"></span>
                    </a>
                  </div>
                  <a className="rigth" href="">
                    more <span className="icon-arrow-right"></span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </main>
  );
}
