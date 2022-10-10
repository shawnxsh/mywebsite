import React, { useState } from "react";
import { motion } from "framer-motion";
import { organizationInfo } from "./Images";

function Organizations() {
  const [ifHover, setIfHover] = useState([false, false, false]);
  // const onclick

  return (
    <div className="organization w-screen pt-[25%] relative">
      <div className="absolute top-0 left-0 w-full h-full flex flex-col">
        <div className="title">Organizations</div>
        <div className="w-full h-full grid grid-cols-3 justify-items-center items-center">
          {Object.keys(organizationInfo).map((key, index) => (
            <motion.div
              key={index}
              className="relative w-3/4 h-2/3 rounded-md overflow-hidden border-2"
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 10px #EBF6FF",
              }}
              onMouseEnter={() => {
                console.log("enter");
                const tempIF = [...ifHover];
                tempIF[index] = true;
                setIfHover([...tempIF]);
              }}
              onMouseLeave={() => {
                console.log("out");
                const tempIF = [...ifHover];
                tempIF[index] = false;
                setIfHover([...tempIF]);
              }}
            >
              <motion.img
                initial={{
                  opacity: 0,
                  scale: 0.5,
                }}
                animate={{
                  opacity: ifHover[index] ? 0 : 1,
                  scale: 1,
                  backgroundColor: organizationInfo[key].bg,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="card-front absolute w-full h-full object-contain"
                src={organizationInfo[key].logo}
                alt="organizationLogo"
              />
              <motion.iframe
                initial={{
                  opacity: 0,
                  scale: 0.5,
                }}
                animate={{
                  opacity: ifHover[index] ? 1 : 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="absolute"
                width="100%"
                height="100%"
                src={
                  ifHover[index]
                    ? `https://www.youtube.com/embed/${organizationInfo[key].videoID}?autoplay=1&mute=1`
                    : `https://www.youtube.com/embed/${organizationInfo[key].videoID}`
                }
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Organizations;
