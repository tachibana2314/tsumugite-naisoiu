"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const About = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Text Content - On top for mobile, on top for desktop */}
            <div className="flex flex-col justify-center order-1 md:order-1">
              <div className="space-y-6">
                <h2 className="text-lg md:text-5xl font-light">ABOUT</h2>
                <div className="space-y-4 text-gray-600">
                  <p className="text-base md:text-lg">
                    TSUMUGITEは、福岡を拠点に店舗デザインから施工まで一貫して行う会社です。
                  </p>
                  <p className="text-base md:text-lg">
                    お客様のコンセプトやご予算、ターゲットに合わせて、商品とスタッフが引き立つ空間をご提案します。
                  </p>
                  <p className="text-base md:text-lg">
                    開店後のアフターフォローまで対応可能ですので、まずはお気軽にご相談ください。
                  </p>
                </div>
                <div className="hidden md:block">
                  <Link 
                    href="/about"
                    className="inline-flex items-center text-gray-900 hover:text-gray-600 transition-colors group"
                  >
                    <span className="border-b border-gray-900 group-hover:border-gray-600">詳しく見る</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Image - Below text for mobile, below text for desktop */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="order-2 md:order-2"
            >
              <div className="relative aspect-[4/3] bg-white rounded-lg shadow-sm overflow-hidden">
                <Image
                  src="/logo/logo3.png"
                  alt="TSUMUGITE"
                  fill
                 className="object-contain transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 400px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
          
          {/* Mobile-only "See More" link that appears below the image */}
          <div className="mt-8 text-center md:hidden">
            <Link 
              href="/about"
              className="inline-flex items-center text-gray-900 hover:text-gray-600 transition-colors group"
            >
              <span className="border-b border-gray-900 group-hover:border-gray-600">詳しく見る</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};