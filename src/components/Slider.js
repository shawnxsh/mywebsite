import React, { useState, useEffect } from "react";
import { images } from "./Images";
import { motion } from "framer-motion";

function Slider({ slideNum }) {
  const [sliderSize, setSliderSize] = useState(false);
  const [center, setCenter] = useState(0);
  const [position, setPosition] = useState(0);

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
      if (position > 10000) {
        setPosition(0);
      } else {
        const temp = position + 1;
        setPosition(temp);
        setCenter(
          temp % slideNum <= 0
            ? (slideNum - Math.abs(temp % slideNum)) % slideNum
            : temp % slideNum
        );
      }
    }, 6000);
    return () => clearInterval(slideOnce);
  });

  return (
    <motion.div className="relative w-screen aspect-[2/1] flex justify-center items-center overflow-hidden mt-6 md:aspect-[4/1]">
      {images.map((img, index) => {
        return (
          <motion.div
            key={index}
            className="absolute w-[70vw] aspect-[15/7] md:w-[50vw]"
            initial={{
              transform: sliderSize
                ? `rotateY(calc(${
                    ((index - position) * 360) / slideNum
                  }deg)) translateZ(45vw)`
                : `rotateY(calc(${
                    ((index - position) * 360) / slideNum
                  }deg)) translateZ(57vw)`,
              backfaceVisibility: "hidden",
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              transform: sliderSize
                ? `rotateY(calc(${
                    ((index - position) * 360) / slideNum
                  }deg)) translateZ(45vw)`
                : `rotateY(calc(${
                    ((index - position) * 360) / slideNum
                  }deg)) translateZ(57vw)`,
              backfaceVisibility: "hidden",
              opacity: index === center ? 1 : 0.5,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 50,
            }}
            onClick={(e) => {
              if (index !== center) {
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
