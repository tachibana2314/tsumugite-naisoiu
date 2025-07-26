"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram } from "lucide-react";
import { Logo } from "@/components/atoms/Logo";

const menuItems = [
  { href: "/about", label: "ABOUT" },
  { href: "/works", label: "WORKS" },
  { href: "/contact", label: "CONTACT" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className={`relative z-50 ${isOpen ? 'bg-transparent' : 'bg-white/80 backdrop-blur-md'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-16">
            <div className={`${isOpen ? 'text-white' : 'text-black'} flex items-center h-full`}>
              <Logo />
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm py-2"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://www.instagram.com/tsumugite_/#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </nav>
            

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-1 z-50 flex items-center"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="メニューを開く"
            >
              {isOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
          >
            <nav className="h-full flex flex-col justify-center items-center">
              <ul className="space-y-8">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <Link
                      href={item.href}
                      className="block text-xl font-light text-white/90 hover:text-white transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: menuItems.length * 0.1 }}
                className="mb-12 pt-12"
              >
                <a
                  href="https://www.instagram.com/tsumugite_/#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-white/80 hover:text-white transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}