import { Project } from "@/types";

// Organization schema for the company
export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "TSUMUGITE~紡ぎ手~",
    "alternateName": "TSUMUGITE",
    "url": "https://tsumugite-naisoudesign.com",
    "logo": "https://tsumugite-naisoudesign.com/logo/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "福岡市南区",
      "addressRegion": "福岡県",
      "postalCode": "815-0034",
      "streetAddress": "南大橋1-21-3",
      "addressCountry": "JP"
    },
    "telephone": "0930-35-1695",
    "email": "info@tsumugite-naisoudesign.com",
    "description": "理想の暮らしをデザインする。新築・リフォーム・リノベーション",
    "sameAs": [
      "https://www.instagram.com/tsumugite_/#"
    ],
    "openingHours": "Mo,Tu,We,Th,Fr 09:00-18:00",
    "priceRange": "¥¥¥",
    "areaServed": {
      "@type": "State",
      "name": "福岡県"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "店舗デザイン・施工サービス",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "店舗デザイン",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "飲食店デザイン"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "美容室デザイン"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "アパレルショップデザイン"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "オフィスデザイン"
              }
            }
          ]
        }
      ]
    }
  };
};

// LocalBusiness schema for the company
export const generateLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "TSUMUGITE~紡ぎ手~",
    "image": "https://tsumugite-naisoudesign.com/logo/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "南大橋1-21-3",
      "addressLocality": "福岡市南区",
      "addressRegion": "福岡県",
      "postalCode": "815-0034",
      "addressCountry": "JP"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.5531321,
      "longitude": 130.4215321
    },
    "url": "https://tsumugite-naisoudesign.com",
    "telephone": "0930-35-1695",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ]
  };
};

// Project schema for individual work pages
export const generateProjectSchema = (project: Project) => {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "creator": {
      "@type": "Organization",
      "name": "TSUMUGITE~紡ぎ手~"
    },
    "dateCreated": project.date,
    "image": project.imageUrl,
    "locationCreated": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": project.location,
        "addressCountry": "JP"
      }
    },
    "genre": project.category,
    "description": project.description || `${project.title} - ${project.category} in ${project.location}`
  };
};

// BreadcrumbList schema for navigation
export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

// WebSite schema for the entire website
export const generateWebsiteSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "TSUMUGITE~紡ぎ手~",
    "url": "https://tsumugite-naisoudesign.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://tsumugite-naisoudesign.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
};