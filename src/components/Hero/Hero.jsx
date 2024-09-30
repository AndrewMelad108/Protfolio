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
          <img src="/me-modified.png" className="img-person" alt="img-person" />
          <span className="icon-verified"></span>
          <h1 className="Hero-info-title">
            Frontend Engineer (Vue.js & React.js & React Native)
          </h1>
          <p className="Hero-info-des">
            Frontend developer skilled in building web and mobile applications
            using Vue.js, React.js, React Native, and TypeScript. Experienced in
            delivering high-performance solutions and mentoring junior
            developers. Proficient in dynamic table management, responsive
            design, and utilizing TailwindCSS for fast, elegant UIs.
          </p>
        </motion.div>
      </AnimatePresence>
      <Lottie className="Hero-image" animationData={Developer} />
    </div>
  );
}
