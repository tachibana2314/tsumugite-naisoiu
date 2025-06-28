"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { Project } from "@/types";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/data";
import { useEffect, useState } from "react";

// 最新の12つのプロジェクトを表示 (4列×3行)
const selectedProjects = projects.slice(0, 12);

export const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState<Project[]>([]);

  // Progressive loading of projects
  useEffect(() => {
    // Load first 4 projects immediately
    setVisibleProjects(selectedProjects.slice(0, 4));

    // Load the rest with a slight delay
    const timer = setTimeout(() => {
      setVisibleProjects(selectedProjects);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-light mb-4">WORKS</h2>
          {/* <p className="text-gray-600">これまでに手がけた住まいづくりの事例をご紹介します</p> */}
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {visibleProjects.map((project) => (
            <Link href={`/works/${project.id}`} key={project.id} className="block">
              <ProjectCard project={project} showDetails={true} />
            </Link>
          ))}
        </div>
        <div className="mt-12 text-right">
          <Link 
            href="/works"
            className="inline-flex items-center text-gray-900 hover:text-gray-600 transition-colors group"
          >
            <span className="border-b border-gray-900 group-hover:border-gray-600">more</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}