"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-1 justify-center m-auto text-start">
        <motion.p
          variants={slideInFromLeft(0.5)}
          className="gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto"
        >
          <span>
            Hi, I am{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              John Nagy.
            </span>{" "}
          </span>
        </motion.p>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          As a Blockchain Full stack developer, I have been working over 5 years in&nbsp;
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Web3, Web Development and Design.</span>
          <div>
            I enjoy solving problems and creating codes that live on the internet.
          </div>
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn more
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
