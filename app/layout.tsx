import './globals.css';
import type { Metadata } from 'next';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import { SchemaOrg } from '@/components/SEO/SchemaOrg';
import { generateOrganizationSchema, generateWebsiteSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'TSUMUGITE | 福岡の店舗デザイン・店舗施工',
  description: '福岡を中心に店舗デザイン・店舗施工を一貫して手掛けるTSUMUGITE。飲食店、美容室、アパレル、オフィスなど、ジャンル・業種問わず、お客様のコンセプトに合わせた空間づくりを提案します。',
  keywords: '店舗デザイン, 店舗施工, 福岡, 内装, リノベーション, 飲食店, 美容室, アパレル, オフィス',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://tsumugite-naisoudesign.com',
    title: 'TSUMUGITE | 福岡の店舗デザイン・店舗施工',
    description: '福岡を中心に店舗デザイン・店舗施工を一貫して手掛けるTSUMUGITE。飲食店、美容室、アパレル、オフィスなど、ジャンル・業種問わず、お客様のコンセプトに合わせた空間づくりを提案します。',
    siteName: 'TSUMUGITE',
    images: [
      {
        url: 'https://tsumugite-naisoudesign.com/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'TSUMUGITE',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TSUMUGITE | 福岡の店舗デザイン・店舗施工',
    description: '福岡を中心に店舗デザイン・店舗施工を一貫して手掛けるTSUMUGITE。飲食店、美容室、アパレル、オフィスなど、ジャンル・業種問わず、お客様のコンセプトに合わせた空間づくりを提案します。',
    images: ['https://tsumugite.com/logo/logo.png'],
    creator: '@tsumugite',
    site: '@tsumugite'
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Combine organization and website schemas
  const combinedSchema = [
    generateOrganizationSchema(),
    generateWebsiteSchema()
  ];

  return (
    <html lang="ja">
      <head>
        <meta name="format-detection" content="telephone=no" />
        <link rel="canonical" href="https://tsumugite-naisoudesign.com" />
        <SchemaOrg schema={combinedSchema} />
      </head>
      <body className="font-shippori">
        <Header />
        <div className="pt-16 md:pt-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}