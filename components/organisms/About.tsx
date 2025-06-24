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
                <h2 className="text-4xl md:text-5xl font-light">ABOUT</h2>
                <div className="space-y-4 text-gray-600">
                  <p className="text-lg">
                    「TSUMUGITE」は、福岡を中心に店舗デザイン・店舗施工を一貫して手掛けています。
                  </p>
                  <p className="text-lg">
                    お客様の<br />
                    ・コンセプト<br />
                    ・売り方<br />
                    ・ご予算<br />
                    ・エンドユーザーに合わせた空間づくり<br />
                    そして何より、<br />
                    お店の主役である<br />
                    ・&quot;商品&quot;そして&quot;お店の従業員様&quot;を引立たせる店づくりを提案いたします。
                  </p>
                  <p className="text-lg">
                    デザインから施工、OPEN後のアフターフォローまで当社で対応していますので、ご安心してお任せ頂ければ幸いです。<br />
                    まずはお気軽にご相談ください。
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
                  src="/logo/logo.png"
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