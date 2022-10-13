import { motion } from "framer-motion";

function Projects() {
  return (
    <div
      className="mama relative w-screen h-[20em] flex bg-gray-300 justify-center"
      style={{ transformStyle: "preserve-3d" }}
    >
      {["red", "green", "yellow", "purple", "brown"].map((item, index) => (
        <motion.div
          key={index}
          style={{
            backgroundColor: item,
            // rotateY: `${index * 72}deg`,
            // translateZ: "350px",
            // backfaceVisibility: "visible",
          }}
          animate={{
            transform: `rotateY(calc(${index}*72deg)) translateZ(300px)`,
            backfaceVisibility: "visible",
          }}
          className="lala absolute w-[10em] h-[20em] "
        ></motion.div>
      ))}
    </div>
  );
}

export default Projects;
