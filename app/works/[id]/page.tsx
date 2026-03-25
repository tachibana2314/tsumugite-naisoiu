import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import { WorkDetailClient } from "./WorkDetailClient";
import { Metadata } from "next";
import { SchemaOrg } from "@/components/SEO/SchemaOrg";
import { generateProjectSchema, generateBreadcrumbSchema } from "@/lib/schema";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const project = projects.find(p => p.id === params.id);
  
  if (!project) {
    return {
      title: '施工事例 | TSUMUGITE',
      description: 'TSUMUGITEが手掛けた店舗デザイン・店舗施工の事例をご紹介します。',
    };
  }
  
  return {
    title: `${project.title} | 施工事例 | TSUMUGITE`,
    description: `${project.title}の施工事例です。${project.category}、${project.location}、${project.date}に完成した店舗デザイン・店舗施工の事例をご紹介します。`,
    openGraph: {
      title: `${project.title} | 施工事例 | TSUMUGITE`,
      description: `${project.title}の施工事例です。${project.category}、${project.location}、${project.date}に完成した店舗デザイン・店舗施工の事例をご紹介します。`,
      images: [
        {
          url: project.imageUrl,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export default function WorkDetail({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === params.id);

  if (!project) {
    notFound();
  }

  const projectSchema = generateProjectSchema(project);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'ホーム', url: 'https://tsumugite-naisoudesign.com' },
    { name: '施工事例', url: 'https://tsumugite-naisoudesign.com/works' },
    { name: project.title, url: `https://tsumugite-naisoudesign.com/works/${project.id}` }
  ]);

  return (
    <>
      <SchemaOrg schema={[projectSchema, breadcrumbSchema]} />
      <WorkDetailClient project={project} />
    </>
  );
}