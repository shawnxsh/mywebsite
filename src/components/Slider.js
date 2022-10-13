import React, { useState, useEffect, useRef } from "react";
import { images } from "./Images";
import { motion, useMotionValue } from "framer-motion";

function Slider({ slideNum }) {
  const [sliderSize, setSliderSize] = useState(false);
  const [center, setCenter] = useState(0);
  const [position, setPosition] = useState(0);

  // const changeSlide = (direction) => {
  //   if (direction === "left" && position + 1 === slideNum) {
  //     setPosition(position + 1);
  //   } else if (direction === "right" && position === 0) {
  //     setPosition(4);
  //   } else if (direction === "left") {
  //     setPosition(position + 1);
  //   } else if (direction === "right") {
  //     setPosition(position - 1);
  //   }
  // };

  const monitorWinSize = () => {
    if (window.innerWidth >= 768) {
      setSliderSize(true);
    } else {
      setSliderSize(false);
    }
  };

  useEffect(() => {
    monitorWinSize();
    window.addEventListener("resize", monitorWinSize);

    const slideOnce = setInterval(() => {
      const temp = position + 1;
      // console.log(temp);
      setPosition(temp);
      setCenter(
        temp % slideNum <= 0
          ? (slideNum - Math.abs(temp % slideNum)) % slideNum
          : temp % slideNum
      );
    }, 5000);
    return () => clearInterval(slideOnce);
  }, [position]);

  return (
    <motion.div
      className="relative w-screen aspect-[2/1] flex justify-center items-center overflow-hidden mt-6 md:aspect-[4/1] "
      animate={{
        transformStyle: "preserve-3d",
      }}
    >
      {Object.values(images).map((img, index) => {
        return (
          <motion.div
            key={index}
            className="absolute w-[70vw] aspect-[15/7] md:w-[50vw]"
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              transform: sliderSize
                ? `rotateY(calc(${index - position}*72deg)) translateZ(45vw)`
                : `rotateY(calc(${index - position}*72deg)) translateZ(57vw)`,
              backfaceVisibility: "hidden",
              opacity: index === center ? 1 : 0.6,
              scale: index === center ? 1 : 0.2,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 50,
            }}
            onClick={(e) => {
              if (index !== position) {
                if (e.clientX / window.innerWidth < 0.3) {
                  const temp = position - 1;
                  // console.log(temp, temp % slideNum);
                  setPosition(temp);
                  setCenter(
                    temp % slideNum <= 0
                      ? (slideNum - Math.abs(temp % slideNum)) % slideNum
                      : temp % slideNum
                  );
                } else if (e.clientX / window.innerWidth > 0.7) {
                  const temp = position + 1;
                  // console.log(temp);
                  setPosition(temp);
                  setCenter(
                    temp % slideNum <= 0
                      ? (slideNum - Math.abs(temp % slideNum)) % slideNum
                      : temp % slideNum
                  );
                }
              }
            }}
          >
            <img
              className="w-full h-full absolute object-cover rounded-md"
              src={img}
              alt="slide"
              draggable="false"
            />
            {/* <div
              className={
                index === center
                  ? "w-full h-full absolute object-cover rounded-md"
                  : "w-full h-full absolute object-cover rounded-md bg-gray-900"
              }
            ></div> */}

            {index === center && (
              <div className="absolute right-[5%] bottom-[6%] flex space-x-4">
                {Object.keys(images).map((img, index) => (
                  <div
                    key={index}
                    className={
                      index === center
                        ? "w-2.5 aspect-square rounded-lg bg-white shadow-[0px_0px_5px_3px_#FFFFFF] hover:cursor-pointer"
                        : "w-2.5 aspect-square rounded-lg bg-zinc-200/60 hover:cursor-pointer"
                    }
                    onClick={() => {
                      setPosition(~~(position / slideNum) * slideNum + index);
                      setCenter(index);
                    }}
                  ></div>
                ))}
              </div>
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default Slider;
