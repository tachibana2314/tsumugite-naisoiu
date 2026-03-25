"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Logo } from "@/components/atoms/Logo";
import { MapPin, Phone, Instagram, Facebook } from "lucide-react";

const menuItems = [
  { href: "/about", label: "ABOUT" },
  { href: "/works", label: "WORKS" },
  { href: "/contact", label: "CONTACT" },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start gap-4">
          {/* Company Info */}
          <div className="w-full md:w-auto">
            <div className="flex items-center justify-between md:justify-start md:space-x-8">
              <Logo color="light" />
              <div className="flex space-x-3 md:space-x-4">
                <a
                  href="https://www.instagram.com/tsumugite_/#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="mt-3 text-gray-400 text-xs space-y-1">
              <div className="flex items-start space-x-1.5">
                <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                <p>〒815-0034 福岡県福岡市南区南大橋1丁目21-3</p>
              </div>
              <div className="flex items-center space-x-1.5">
                <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                <p>0930-35-1695</p>
              </div>
            </div>
          </div>

          {/* Navigation & Services */}
          <div className="w-full md:w-auto">
            <nav className="flex flex-wrap justify-between gap-x-8 gap-y-4">
              <div>
                <h3 className="text-xs font-medium mb-2">NAVIGATION</h3>
                <ul className="space-y-1">
                  {menuItems.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-gray-400 hover:text-white transition-colors text-xs"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-medium mb-2">SERVICES</h3>
                <ul className="space-y-1 text-gray-400 text-xs">
                  <li>店舗デザイン</li>
                  <li>店舗施工</li>
                </ul>
              </div>
            </nav>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-gray-800 text-center text-gray-400 text-[10px]">
          <p>&copy; {new Date().getFullYear()} TSUMUGITE All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}