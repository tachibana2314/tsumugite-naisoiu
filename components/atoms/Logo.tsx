"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  color?: "dark" | "light";
}

export const Logo = ({ color = "dark" }: LogoProps) => {
  return (
    <Link href="/">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative flex items-center"
      >
        <Image
          src="/logo/logo.png"
          alt="TSUMUGITE"
          width={120}
          height={30}
          className={`p-4 w-[90px] md:w-[120px] h-auto ${color === "light" ? "brightness-0 invert" : ""}`}
          priority
        />
      </motion.div>
    </Link>
  );
};