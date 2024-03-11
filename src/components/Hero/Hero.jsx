import "./Hero.css";
import Lottie from "lottie-react";
import Developer from "../../animation/Developer.json";
import { AnimatePresence, motion } from "framer-motion";
export default function Hero() {
  return (
    <div className="Hero flex">
      <AnimatePresence>
        <motion.div
          layout
          initial={{ transform: "scale(0)" }}
          animate={{ transform: "scale(1)" }}
          transition={{ type: "spring", damping: 8, stiffness: 50 }}
          className="Hero-info"
        >
          <img
            src="/public/me-modified.png"
            className="img-person"
            alt="img-person"
          />
          <span className="icon-verified"></span>
          <h1 className="Hero-info-title">
            Frontend Engineer (Vue.js/React.js)
          </h1>
          <p className="Hero-info-des">
            As Andrew Melad, I'm a passionate frontend developer specialized in
            Vue.js and React.js. My focus is on crafting engaging user
            interfaces and dynamic web solutions. Through diverse projects, I've
            honed skills in modern tech, fostering an environment for
            implementing cutting-edge tools. Continuously exploring new
            technologies, I'm presently immersing myself in React.js and Next.js
            to enhance web experiences further, merging these with my Vue.js
            expertise.
          </p>
        </motion.div>
      </AnimatePresence>
      <Lottie className="Hero-image" animationData={Developer} />
    </div>
  );
}
