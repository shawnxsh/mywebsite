import { useState } from "react";
import { motion } from "framer-motion";

function OrganizationCard({ cardInfo }) {
  const [ifHover, setIfHover] = useState(false);
  return (
    <div className="grid grid-rows-2 grid-cols-1 justify-items-center gap-2 md:gap-0 md:grid-rows-1 md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-1">
      <motion.div
        className="relative w-[70%] aspect-video  self-center rounded-md overflow-hidden border-4"
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        whileHover={{
          scale: 1.1,
          borderColor: "rgb(251, 243, 251, 0.6)",
          boxShadow: "0px 0px 10px 3px #EBF6FF",
        }}
        onMouseEnter={() => {
          setIfHover(true);
        }}
        onMouseLeave={() => {
          setIfHover(false);
        }}
        whileTap={() => {
          setIfHover(true);
        }}
      >
        <motion.img
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: ifHover ? 0 : 1,
            scale: ifHover ? 0 : 1,
            backgroundColor: cardInfo.bg,
          }}
          className="absolute w-full h-full object-contain"
          src={cardInfo.logo}
          alt="organizationLogo"
        />
        <motion.iframe
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: ifHover ? 1 : 0,
            scale: 1,
          }}
          transition={{
            duration: 0.3,
          }}
          width="100%"
          height="100%"
          src={
            ifHover
              ? `https://www.youtube.com/embed/${cardInfo.videoID}?autoplay=1&mute=1`
              : `https://www.youtube.com/embed/${cardInfo.videoID}`
          }
          frameBorder="0"
          allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          title="Embedded youtube"
        />
      </motion.div>
      <div
        className="text-xl 
      items-center text-center  md:text-base md:grid md:grid-rows-3  md:justify-self-start md:text-start lg:justify-self-center lg:text-center"
      >
        <div>{cardInfo.organizationName}</div>
        <div>{cardInfo.title}</div>
        <div>{cardInfo.period}</div>
      </div>
    </div>
  );
}

export default OrganizationCard;
