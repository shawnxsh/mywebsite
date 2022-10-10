import React, { useState } from "react";
import { images } from "./Images";
import { motion } from "framer-motion";

function Slider({ slideNum }) {
  const [position, setPosition] = useState(0);

  const slidePositions = [
    ["15vw", "-75%"],
    ["85vw", "-60%"],
    ["155vw", "50%"],
    ["-125vw", "50%"],
    ["-55vw", "-60%"],
  ];

  const changeSlide = (direction) => {
    if (direction === "left" && position + 1 === slideNum) {
      setPosition(0);
    } else if (direction === "right" && position === 0) {
      setPosition(4);
    } else if (direction === "left") {
      setPosition(position + 1);
    } else if (direction === "right") {
      setPosition(position - 1);
    }
  };

  // useEffect(() => {
  //   setInterval(() => {
  //     changePosition();
  //   }, 5000);
  // });

  return (
    <div className="outerBox relative w-screen pt-[35%] overflow-hidden ">
      {Object.values(images).map((img, index) => {
        const temp1 = slidePositions.slice(-position);
        const temp2 = slidePositions.slice(0, -position);
        const newPos = [...temp1, ...temp2];
        return (
          <motion.div
            key={index}
            className="innerBox absolute w-[70%] pt-[29%] "
            initial={{
              left: newPos[index][0],
              top: newPos[index][1],
              opacity: 0,
              scale: 1,
            }}
            animate={{
              left: newPos[index][0],
              top: newPos[index][1],
              opacity: index === position ? 1 : 0.7,
              scale: index === position ? 1 : 0.8,
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 50,
            }}
            onClick={(e) => {
              if (e.clientX / window.innerWidth < 0.1) {
                changeSlide("right");
              } else if (e.clientX / window.innerWidth > 0.9) {
                changeSlide("left");
              }
            }}
          >
            <img
              className="absolute w-full h-full object-cover rounded-md"
              src={img}
              alt=""
            />

            {index === position && (
              <div className="absolute right-[5%] bottom-[-92%] flex space-x-4">
                {Object.keys(images).map((img, index) => (
                  <div
                    key={index}
                    className="w-2 h-2 rounded-md bg-zinc-200/75 hover:cursor-pointer"
                    onClick={() => {
                      setPosition(index);
                    }}
                  ></div>
                ))}
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

export default Slider;
