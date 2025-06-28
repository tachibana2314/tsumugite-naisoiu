"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Project } from "@/types";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useState, useEffect } from "react";

interface WorkDetailClientProps {
  project: Project;
}

export function WorkDetailClient({ project }: WorkDetailClientProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({});

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  // Track image loading
  const handleImageLoad = (index: number) => {
    setImagesLoaded(prev => ({ ...prev, [index]: true }));
  };

  // Use useEffect to register the onSelect event handler
  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    
    // Register the event handler
    emblaApi.on('select', onSelect);
    // Initial call to set the initial selected index
    onSelect();
    
    // Cleanup function to remove the event handler
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 md:py-24">
        <Link 
          href="/works"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 md:mb-12 text-sm md:text-base"
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
          一覧に戻る
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8 md:space-y-16"
        >
          {/* メイン情報 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <div className="order-2 md:order-1">
              <div className="mb-4 md:mb-6">
                <h1 className="text-2xl md:text-4xl font-light mb-3 inline-block border-b-2 border-gray-900 pb-1" >{project.title}</h1>
              </div>
              <div className="space-y-3 md:space-y-4 text-gray-600">
                <p className="flex items-center text-sm">
                  <span>{project.location}</span>
                </p>
                <p className="flex items-center text-sm">
                  <span>{project.date}</span>
                </p>
                <p className="flex items-center text-sm">
                  <span>{project.category}</span>
                </p>
                <p className="mt-6 md:mt-8 leading-relaxed text-sm md:text-base">{project.description}</p>
              </div>
            </div>
            {/* <div className="relative aspect-[4/3] order-1 md:order-2 bg-gray-100">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover rounded-lg shadow-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div> */}
          </div>

          {/* 画像スライダー */}
          {project.images && project.images.length > 0 && (
            <div className="relative -mx-4 md:mx-0">
              <div className="overflow-hidden md:rounded-lg" ref={emblaRef}>
                <div className="flex">
                  {project.images.map((image, index) => (
                    <div key={index} className="relative flex-[0_0_100%] min-w-0 px-4 md:px-0">
                      <div className="relative aspect-[4/3] md:aspect-[16/9] bg-gray-100">
                        <Image
                          src={image}
                          alt={`${project.title} - Image ${index + 1}`}
                          fill
                          className={`object-cover md:rounded-lg transition-opacity duration-300 ${
                            imagesLoaded[index] ? 'opacity-100' : 'opacity-0'
                          }`}
                          sizes="100vw"
                          loading="lazy"
                          onLoad={() => handleImageLoad(index)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* ナビゲーションボタン */}
              <button
                onClick={scrollPrev}
                className="absolute left-6 md:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1.5 md:p-2 rounded-full shadow-lg transition-all z-10"
                aria-label="前の画像"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <button
                onClick={scrollNext}
                className="absolute right-6 md:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1.5 md:p-2 rounded-full shadow-lg transition-all z-10"
                aria-label="次の画像"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
          )}

          {/* サムネイル画像ギャラリー */}
          {project.images && project.images.length > 0 && (
            <div className="mt-4 md:mt-6">
              <div className="grid grid-cols-5 md:grid-cols-8 gap-2 md:gap-3">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={`relative aspect-[4/3] overflow-hidden rounded-md transition-all bg-gray-100 ${
                      selectedIndex === index 
                        ? 'ring-2 ring-gray-900 ring-offset-2' 
                        : 'opacity-70 hover:opacity-100'
                    }`}
                    aria-label={`画像 ${index + 1} を表示`}
                  >
                    <Image
                      src={image}
                      alt={`${project.title} - Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 20vw, 12.5vw"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </main>
  );
}