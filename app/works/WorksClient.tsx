"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { Project } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";

interface WorksClientProps {
  projects: Project[];
}

export function WorksClient({ projects }: WorksClientProps) {
  const [visibleProjects, setVisibleProjects] = useState<Project[]>([]);

  // Progressive loading of projects
  useEffect(() => {
    // Load first batch immediately
    setVisibleProjects(projects.slice(0, 6));
    
    // Load the rest with a slight delay
    const timer = setTimeout(() => {
      setVisibleProjects(projects);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [projects]);

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-2xl md:text-5xl font-light mb-4 md:mb-8">WORKS</h1>
          {/* <p className="text-gray-600 text-sm md:text-base">
            これまでに手がけた住まいづくりの事例をご紹介します
          </p> */}
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {visibleProjects.map((project) => (
            <Link href={`/works/${project.id}`} key={project.id}>
              <ProjectCard project={project} />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}