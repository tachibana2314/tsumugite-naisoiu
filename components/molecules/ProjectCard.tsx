"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/types";
import { useState } from "react";

interface ProjectCardProps {
  project: Project;
  showDetails?: boolean;
}

export const ProjectCard = ({ project, showDetails = false }: ProjectCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <div className="aspect-[4/3] relative bg-gray-100">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={`object-cover transition-transform duration-300 group-hover:scale-105 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
      </div>
      <div className="p-4 bg-white">
        <>
          <h3 className="text-base md:text-lg font-medium line-clamp-2 group-hover:text-gray-500 transition-colors mb-2 inline-block border-b-2 border-gray-900 pb-1">
            {project.title}
          </h3>
          <p className="text-xs md:text-sm text-gray-500 mb-1">{project.category}</p>
          <p className="text-xs md:text-sm text-gray-500 mb-1">{project.location}</p>
        </>
      </div>
    </motion.div>
  );
};