"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const ScrollIndicator = () => {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const pulseVariants = {
    initial: { scale: 1, opacity: 0.7 },
    animate: { 
      scale: [1, 1.1, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "easeInOut"
      }
    }
  };

  const arrowVariants = {
    initial: { y: -5 },
    animate: { 
      y: [0, 10, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "easeInOut"
      }
    }
  };

  const secondArrowVariants = {
    initial: { y: -15, opacity: 0.3 },
    animate: { 
      y: [-5, 5, -5],
      opacity: [0.3, 0.7, 0.3],
      transition: {
        duration: 1.5,
        delay: 0.2,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="absolute bottom-10 md:bottom-12 left-0 right-0 flex justify-center">
      <motion.div
        className="flex flex-col items-center cursor-pointer"
        onClick={scrollToNextSection}
        variants={pulseVariants}
        initial="initial"
        animate="animate"
        whileHover={{ scale: 1.15 }}
      >
        <motion.p 
          className="text-[10px] md:text-sm mb-2 md:mb-3 text-white tracking-widest uppercase text-center"
        >
          Scroll
        </motion.p>
        
        <div className="relative flex flex-col items-center justify-center h-10 w-6">
          <motion.div
            variants={arrowVariants}
            initial="initial"
            animate="animate"
            className="absolute"
          >
            <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </motion.div>
          
          <motion.div
            variants={secondArrowVariants}
            initial="initial"
            animate="animate"
            className="absolute"
          >
            <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};