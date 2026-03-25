import { projects } from "@/lib/data";
import { WorksClient } from "./WorksClient";
import { Metadata } from "next";
import { SchemaOrg } from "@/components/SEO/SchemaOrg";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: '施工事例 | TSUMUGITE',
  description: 'TSUMUGITEが手掛けた店舗デザイン・店舗施工の事例をご紹介します。飲食店、美容室、アパレル、オフィスなど、様々な業種の施工実績があります。',
  openGraph: {
    title: '施工事例 | TSUMUGITE',
    description: 'TSUMUGITEが手掛けた店舗デザイン・店舗施工の事例をご紹介します。飲食店、美容室、アパレル、オフィスなど、様々な業種の施工実績があります。',
    images: [
        {
          url: 'https://tsumugite-naisoudesign.com/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'TSUMUGITE 施工事例',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '施工事例 | TSUMUGITE',
    description: 'TSUMUGITEが手掛けた店舗デザイン・店舗施工の事例をご紹介します。飲食店、美容室、アパレル、オフィスなど、様々な業種の施工実績があります。',
    images: ['https://tsumugite-naisoudesign.com/logo/logo.png'],
  }
};

export default function Works() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'ホーム', url: 'https://tsumugite-naisoudesign.com' },
    { name: '施工事例', url: 'https://tsumugite-naisoudesign.com/works' }
  ]);

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      <WorksClient projects={projects} />
    </>
  );
}