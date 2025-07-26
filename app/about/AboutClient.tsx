"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Fan as Fax, Mail } from "lucide-react";

const companyInfo = {
  name: "TSUMUGITE~紡ぎ手~",
  nameEn: "TSUMUGITE",
  postalCode: "〒 815-0034",
  address: "福岡県福岡市南区南大橋1-21-3",
  tel: "0930-35-1695",
  fax: "0930-35-1695",
  services: [
    "事業内容：店舗デザイン/店舗施工/物件誘致",
    "飲食店",
    "美容室",
    "アパレル",
    "オフィス",
    "etc",
  ]
};

export function AboutClient() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-lg md:text-5xl font-light text-center mb-16">ABOUT</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            {/* Company Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-2">
                <h2 className="text-lg font-light mb-4">{companyInfo.name}</h2>
                <p className="text-gray-600">{companyInfo.nameEn}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                  <div>
                    <p className="text-gray-600">{companyInfo.postalCode}</p>
                    <p className="text-gray-600">{companyInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <p className="text-gray-600">TEL：{companyInfo.tel}</p>
                </div>

                <div className="flex items-center space-x-3">
                  <Fax className="w-5 h-5 text-gray-400" />
                  <p className="text-gray-600">FAX：{companyInfo.fax}</p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="font-medium">{companyInfo.services[0]}</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {companyInfo.services.slice(1).map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative aspect-square lg:aspect-auto lg:h-[600px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.0093982093135!2d130.42153207545343!3d33.553132143920244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x354191190507eb6d%3A0x3b3867ae90900e81!2z44CSODE1LTAwMzQg56aP5bKh55yM56aP5bKh5biC5Y2X5Yy65Y2X5aSn5qmL77yR5LiB55uu77yS77yR4oiS77yT!5e0!3m2!1sja!2sjp!4v1740234329743!5m2!1sja!2sjp"
                className="w-full h-full min-h-[400px] rounded-lg shadow-lg"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}