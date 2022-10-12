import { motion } from "framer-motion";
import slide5 from "../imgs/slides/slide5.jpg";
import KeywordTag from "./KeywordTag";

function ProjectCard({ data }) {
  return (
    <motion.div
      className="w-[70%] flex flex-col space-y-1 md:w-[80%]"
      initial={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        borderRadius: "10px",
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <motion.img
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          borderRadius: "10px",
        }}
        whileHover={{
          // scale: 1.1,
          borderColor: "rgb(251, 243, 251, 0.6)",
          boxShadow: "0px 0px 10px #EBF6FF",
        }}
        className="w-full h-full object-fill flex-1"
        src={slide5}
        alt="organizationLogo"
      />
      <div className="p-1 flex-1">
        <div className="text-[1.1em] font-bold">{data.name}</div>
        <div className="text-[0.9em] text-gray-300">{data.description}</div>
        <div className="text-[0.7em] flex flex-wrap space-x-2">
          {data.languages.map((language, index) => (
            <KeywordTag key={index} keyword={language} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
