"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "PLANING",
    description: "出店する街が持つ特徴を捉え、この場所で何をやるべきか一緒に導きだすことから始めます。そして導きだした結果を元に店舗名やコンセプト等を将来性も踏まえ、構築していきます。",
    imageUrl: "/images/planning.png",
    points: [
      "市場調査・分析",
      "コンセプト立案",
      "事業計画策定",
      "店舗名・ブランディング提案"
    ]
  },
  {
    title: "SHOP DESIGN",
    description: "コンセプトやストーリーに合わせたプラン作りを行います。その街に根付いた上でオリジナル性の高いお店作りを行います。また、お客様により良いサービスを提供できるよう、機能性も考え抜いた空間作りを心がけています。",
    imageUrl: "/images/design.png",
    points: [
      "店舗設計・デザイン",
      "内装デザイン",
      "照明計画",
      "動線設計"
    ]
  },
  {
    title: "COORDINATE",
    description: "オリジナル家具のデザインから、照明や雑貨、グリーンなど、細部までコンセプトに合わせた提案をいたします。空間にあったサインや装飾までコーディネートいたします。",
    imageUrl: "/images/coordinate.png",
    points: [
      "家具デザイン・選定",
      "照明器具選定",
      "インテリア小物選定",
      "グリーンコーディネート"
    ]
  },
  {
    title: "MANAGEMENT",
    description: "ご予算、店舗の業態、希望立地などに合わせて最適な物件選びからお手伝いいたします。そしてコンセプトに合わせて考えられたプランを提案します。",
    imageUrl: "/images/management.png",
    points: [
      "物件選定サポート",
      "予算管理",
      "工程管理",
      "各種申請手続き"
    ]
  }
];

export const Services = () => {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-lg md:text-5xl font-light mb-4">SERVICE</h2>
          <p className="text-sm md:text-base text-gray-600">
            その街に根付き永く愛されることを目指す業態提案、店名、ロゴ、<br />
            そしてお店の設計からインテリアデザイン、販促物まで、ワンストップで提案いたします。
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                <div className="relative bg-white p-6 rounded-lg ring-1 ring-gray-200/50">
                  <div className="flex items-center justify-center mb-6 mx-auto">
                    <Image
                      src={service.imageUrl}
                      alt={service.title}
                      width={120}
                      height={120}
                      className="w-24 h-24 object-contain group-hover:scale-110 transition-transform duration-200"
                    />
                  </div>
                  <div className="bg-gray-900 text-white py-1.5 px-3 inline-block mb-4">
                    <h3 className="text-sm tracking-wider">{service.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600 group/item">
                        <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mr-2 group-hover/item:scale-150 transition-transform duration-200" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};