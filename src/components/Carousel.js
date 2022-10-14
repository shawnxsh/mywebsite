import React, { useState, useEffect, useRef } from "react";

import { motion, useMotionValue, animate } from "framer-motion";
import { images } from "./Images";

function Carousel() {
  const [sliderSize, setSliderSize] = useState(false);
  const range = [-2, -1, 0, 1, 2];
  const x = useMotionValue(0);
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);

  const monitorWinSize = () => {
    if (window.innerWidth >= 768) {
      setSliderSize(true);
    } else {
      setSliderSize(false);
    }
  };

  const calculateNewX = () => {
    return -index * (containerRef.current?.clientWidth || 0);
  };

  const transition = {
    type: "spring",
    bounce: 0,
  };

  const handleEndDrag = (e, dragProps) => {
    const clientWidth = containerRef.current?.clientWidth || 0;
    const { offset, velocity } = dragProps;

    if (Math.abs(velocity.y) > Math.abs(velocity.x)) {
      animate(x, calculateNewX(), transition);
      return;
    }

    if (offset.x > clientWidth / 4) {
      setIndex(index - 1);
    } else if (offset.x < -clientWidth / 4) {
      setIndex(index + 1);
    } else {
      animate(x, calculateNewX(), transition);
    }
  };

  const ImgContainer = ({ index }) => {
    // console.log(index);
    const imgNum =
      index % images.length < 0
        ? images.length + (index % images.length)
        : index % images.length;
    // console.log(imgNum);
    return (
      <motion.div
        className="absolute w-[70vw] aspect-[15/7] rounded-md overflow-hidden md:w-[50vw]"
        style={{
          x,
          left: sliderSize ? `${index * 100 + 25}vw` : `${index * 100 + 15}vw`,
        }}
        draggable
        drag="x"
        dragElastic={0}
        onDragEnd={handleEndDrag}
      >
        <img
          className="w-full h-full object-cover"
          src={images[imgNum]}
          alt="slide"
          draggable="false"
        />
      </motion.div>
    );
  };

  useEffect(() => {
    monitorWinSize();
    window.addEventListener("resize", monitorWinSize);
    animate(x, calculateNewX(), transition);
  });

  return (
    <motion.div
      ref={containerRef}
      className="justify-self-center w-screen aspect-[2/1] flex justify-center items-center overflow-hidden mt-6 md:aspect-[4/1]"
    >
      {range.map((item, inx) => {
        return <ImgContainer key={inx} index={item + index} />;
      })}
    </motion.div>
  );
}

export default Carousel;
