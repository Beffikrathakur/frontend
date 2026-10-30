"use client";
import React, { useState } from 'react';
import Link from 'next/link'; // Next.js का Link कंपोनेंट इम्पोर्ट किया

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // सभी href को आपके असली फोल्डर के नामों (app/folder-name) से 100% मैच कर दिया है
  const navLinks = [
    { name: "आपका भैया", href: "/" },
    { name: "ग्राम तरौली", href: "/gram-tarauli" },
    { name: "आपका मथुरा", href: "/mathura" },
    { name: "उत्तर प्रदेश", href: "/uttar-pradesh" },
    { name: "अपना भारत", href: "/apna-bharat" },
    { name: "सरकारी योजनाएं", href: "/sarkari-yojana" }, // फोल्डर का नाम sarkari-yojana है
    { name: "ग्रामीण कौशल", href: "/rural-skills" },
    { name: "सामाजिक सफर", href: "/gallery" },
    { name: "विचार मंच", href: "/vichar-manch" },
    { name: "AI सहायक", href: "/ai-sahayak" },
    { name: "संपर्क करें", href: "/sampark" },
  ];

  return (
    <nav className="bg-gradient-to-r from-red-950 via-amber-950 to-red-950 text-white shadow-xl sticky top-0 z-50 border-b-2 border-amber-500 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* ब्रांड लोगो / नाम */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            <div className="h-12 w-12 rounded-full border-2 border-amber-500 bg-amber-600 flex items-center justify-center font-bold text-black text-xl shadow-md font-serif">
              MB
            </div>
            <div>
              <h1 className="text-xl font-black text-amber-500 tracking-wide font-serif leading-none">MANVENDRA BHAIYA</h1>
              <p className="text-[10px] text-gray-300 font-semibold uppercase tracking-widest mt-1">जन-जन का संकल्प</p>
            </div>
          </div>

          {/* लैपटॉप/डेस्कटॉप के लिए मेनू लिंक्स - <a> को <Link> से बदला */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-medium">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="px-3 py-2 rounded-md hover:bg-amber-500 hover:text-black transition-all duration-200 border border-transparent hover:border-amber-400"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* मोबाइल के लिए हैमबर्गर मेनू बटन */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-amber-500 hover:text-white hover:bg-red-900 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={false}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* मोबाइल के लिए ड्रॉपडाउन मेनू - <a> को <Link> से बदला */}
      {isOpen && (
        <div className="lg:hidden bg-red-950 border-t border-amber-500/30" id="mobile-menu">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 shadow-inner">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2.5 rounded-md text-base font-medium hover:bg-amber-500 hover:text-black transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
