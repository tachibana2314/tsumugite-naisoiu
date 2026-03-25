import { AboutClient } from "./AboutClient";
import { Metadata } from "next";
import { SchemaOrg } from "@/components/SEO/SchemaOrg";
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: '会社概要 | TSUMUGITE',
  description: 'TSUMUGITEは福岡を中心に店舗デザイン・店舗施工を一貫して手掛けています。ジャンル・業種問わず、お客様のコンセプトに合わせた空間づくりを提案いたします。',
  openGraph: {
    title: '会社概要 | TSUMUGITE',
    description: 'TSUMUGITEは福岡を中心に店舗デザイン・店舗施工を一貫して手掛けています。ジャンル・業種問わず、お客様のコンセプトに合わせた空間づくりを提案いたします。',
    images: [
      {
        url: 'https://tsumugite-naisoudesign.com/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'TSUMUGITE 会社概要',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '会社概要 | TSUMUGITE',
    description: 'TSUMUGITEは福岡を中心に店舗デザイン・店舗施工を一貫して手掛けています。ジャンル・業種問わず、お客様のコンセプトに合わせた空間づくりを提案いたします。',
    images: ['https://tsumugite-naisoudesign.com/logo/logo.png'],
  }
};


export default function About() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'ホーム', url: 'https://tsumugite-naisoudesign.com' },
    { name: '会社概要', url: 'https://tsumugite-naisoudesign.com/about' }
  ]);

  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <>
      <SchemaOrg schema={[breadcrumbSchema, localBusinessSchema]} />
      <AboutClient />
    </>
  );
}