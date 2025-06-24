"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ScrollIndicator } from "@/components/atoms/ScrollIndicator";
import { useEffect, useState } from "react";
import Image from "next/image";

// 確実に存在する画像パスを使用
const images = [
  "/images/hero/1.webp",
  "/images/hero/2.webp",
  "/images/hero/3.webp",
  "/images/hero/4.webp",
  "/images/hero/5.webp",
];

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(0);

  // Set viewport height on mount and resize
  useEffect(() => {
    const updateViewportHeight = () => {
      // Further increase height with additional 10px
      const height = window.innerWidth > 768 
        ? window.innerHeight * 0.95 + 10
        : window.innerHeight * 0.9 + 10;
      setViewportHeight(height);
    };
    
    // Initial set
    updateViewportHeight();
    
    // Update on resize
    window.addEventListener('resize', updateViewportHeight);
    
    return () => {
      window.removeEventListener('resize', updateViewportHeight);
    };
  }, []);

  // 画像のプリロードを改善
  useEffect(() => {
    let loadedCount = 0;
    const totalImages = images.length;
    
    // 各画像をロードする - window.Image を使用
    images.forEach((src) => {
      const img = new window.Image();
      img.src = src;
      
      // 画像がロードされたらカウントを増やす
      img.onload = () => {
        loadedCount++;
        // すべての画像がロードされたらフラグを設定
        if (loadedCount === totalImages) {
          setImagesLoaded(true);
        }
      };
      
      // エラー時も次の画像に進む
      img.onerror = () => {
        console.warn(`Failed to load image: ${src}`);
        loadedCount++;
        if (loadedCount === totalImages) {
          setImagesLoaded(true);
        }
      };
    });
    
    // 5秒後にタイムアウトして強制的に表示
    const timeout = setTimeout(() => {
      if (!imagesLoaded) {
        console.log("Image loading timed out, showing content anyway");
        setImagesLoaded(true);
      }
    }, 5000);
    
    return () => clearTimeout(timeout);
  }, []);

  // 画像のスライドショー効果
  useEffect(() => {
    if (!imagesLoaded) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [imagesLoaded]);

  // アニメーション完了を追跡
  useEffect(() => {
    if (imagesLoaded) {
      const timer = setTimeout(() => {
        setAnimationComplete(true);
      }, 2500); // ロゴとテキストのアニメーションが完了する時間
      
      return () => clearTimeout(timer);
    }
  }, [imagesLoaded]);

  if (!imagesLoaded) {
    return (
      <div className="h-screen relative overflow-hidden bg-gray-100 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div 
      className="relative overflow-hidden w-full" 
      style={{ height: `${viewportHeight}px` }}
      id="hero-section"
    >
      <AnimatePresence>
        {images.map((image, index) => (
          <motion.div
            key={image}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentImageIndex ? 1 : 0,
              scale: index === currentImageIndex ? 1 : 1.1
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              opacity: { duration: 1.8, ease: "easeInOut" },
              scale: { duration: 8, ease: "easeInOut" }
            }}
          >
            <div 
              className="absolute inset-0 bg-black/50"
              style={{ zIndex: 1 }}
            />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                transform: `scale(${index === currentImageIndex ? 1.05 : 1})`,
                transition: 'transform 6s ease-in-out',
                height: '100%',
                width: '100%'
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
      
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
        <div className="text-center flex flex-col items-center max-w-md mx-auto">
          <motion.div 
            className="mb-8 md:mb-10 w-[200px] md:w-[300px]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              y: [20, 0]
            }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 15,
              delay: 0.3
            }}
          >
            <Image
              src="/logo/logo2.png"
              alt="TSUMUGITE"
              width={300}
              height={75}
              className="w-full h-auto brightness-0 invert"
              priority
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            <motion.p 
              className="text-lg md:text-xl mb-4 md:mb-6 text-white font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
              }}
              transition={{ 
                delay: 1.0,
                duration: 0.8,
                ease: "easeOut"
              }}
            >
              あなたを表現するモノづくり
            </motion.p>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.4, duration: 1.2, ease: "easeInOut" }}
              className="h-px my-4 mx-auto max-w-[180px]"
              // className="h-px bg-white/60 my-4 mx-auto max-w-[180px]"
            />
            
            {/* <motion.p 
              className="text-base md:text-lg text-white/90"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 1.8,
                duration: 0.8,
                ease: "easeOut"
              }}
            >
              新築・リフォーム・リノベーション
            </motion.p> */}
          </motion.div>
        </div>
      </div>
      
      <AnimatePresence>
        {animationComplete && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.8,
              ease: "easeOut"
            }}
            className="z-20 relative"
          >
            <ScrollIndicator />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};