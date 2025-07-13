"use client";
import { cn } from "@/src/lib/utils";
import { motion } from "framer-motion";
import React from "react";

export const BackgroundLines = ({ children, className, svgOptions }) => {
  return (
    <div className={cn("relative w-full h-[20rem] md:h-screen overflow-hidden bg-white dark:bg-black", className)}>
      <LinesSVG svgOptions={svgOptions} />
      {children}
    </div>
  );
};

const pathVariants = {
  initial: { strokeDashoffset: 800, strokeDasharray: "50 800" },
  animate: {
    strokeDashoffset: 0,
    strokeDasharray: "20 800",
    opacity: [0, 1, 1, 0],
  },
};

const LinesSVG = ({ svgOptions }) => {
  const paths = [ 
    "M720 450C720 450 742.459 440.315 755.249 425.626C768.039 ...", // keep your long paths here
    // Add all your paths
  ];

  const colors = [
    "#46A5CA", "#8C2F2F", "#4FAE4D", "#D6590C", "#811010",
    "#247AFB", "#A534A0", "#A8A438", "#D6590C", "#46A29C",
    "#670F6D", "#D7C200", "#59BBEB", "#504F1C", "#55BC54",
    "#4D3568", "#9F39A5", "#363636", "#860909", "#6A286F",
    "#604483"
  ];

  return (
    <motion.svg
      viewBox="0 0 1440 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 w-full h-full">
      {paths.map((path, idx) => (
        <motion.path
          key={`path-${idx}`}
          d={path}
          stroke={colors[idx % colors.length]}
          strokeWidth="2.3"
          strokeLinecap="round"
          variants={pathVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: svgOptions?.duration || 10,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
            delay: Math.random() * 5,
            repeatDelay: Math.random() * 5 + 2,
          }}
        />
      ))}
    </motion.svg>
  );
};
