import { motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    border: 3,
    backgroundColor: "rgb(52, 52, 52, 0)",
  },

  exit: {
    opacity: 0,
    x: "-100%",
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

function KeywordTag({ keyword }) {
  return (
    <motion.div
      className="rounded mt-1 p-1 border-2 border-white"
      {...variants}
      whileHover={{
        backgroundColor: "rgb(52, 52, 52, 0.9)",
        cursor: "pointer",
      }}
    >
      {keyword}
    </motion.div>
  );
}

export default KeywordTag;
