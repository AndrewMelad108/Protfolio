import "./Main.css";
import { useState } from "react";
import Projects from "../../Projects.json";
import { AnimatePresence, motion } from "framer-motion";
export default function Main() {
  const [active, setActive] = useState("all");
  const [projects, setProjects] = useState(Projects);
  const [skills, setSkills] = useState([
    {
      id: 1,
      searchName: "all",
      ButtonName: "all projects",
    },
    {
      id: 2,
      searchName: "CSS",
      ButtonName: "HtML & CSS",
    },
    {
      id: 3,
      searchName: "Tailwindcss",
      ButtonName: "tailwind css",
    },
    {
      id: 4,
      searchName: "Js",
      ButtonName: "JavaScript",
    },
    {
      id: 4,
      searchName: "Ts",
      ButtonName: "TypeScript",
    },
    {
      id: 5,
      searchName: "Vue",
      ButtonName: "Vue",
    },
    {
      id: 6,
      searchName: "React",
      ButtonName: "React & MUI",
    },
    {
      id: 7,
      searchName: "Node.js",
      ButtonName: "Node.js",
    },
    {
      id: 8,
      searchName: "React Native",
      ButtonName: "React Native",
    },
  ]);
  const handleClick = (category) => {
    setActive(category);
    if (category === "all") {
      setProjects(Projects); // Display all projects
    } else {
      let newProjects = Projects.filter((project) => {
        const foundCategory = project.category.find((cat) => cat === category);
        return foundCategory === category;
      });
      setProjects(newProjects);
    }
  };
  return (
    <main className="flex">
      <div className="links flex">
        {skills.map((item) => {
          return (
            <button
              onClick={() => {
                handleClick(item.searchName);
              }}
              className={active === item.searchName ? "link active" : "link"}
            >
              {item.ButtonName}
            </button>
          );
        })}
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
                  className="project-image"
                />
                <p className="title">{project.project_title}</p>
                <p className="sub-title">{project.project_info}</p>
                <div className="flex project-icons">
                  <div className="flex left">
                    <a href={project.github_link} target="_blank">
                      <span className="icon-github"></span>
                    </a>
                    <a href={project.project_link} target="_blank">
                      <span className="icon-link1"></span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </main>
  );
}
