"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const bg = document.getElementById("bg-image");
      if (bg) {
        const scrollY = window.scrollY;
        // Fade out as you scroll down (adjust divisor for speed)
        const opacity = Math.max(0.2, 1 - scrollY / 600);
        bg.style.opacity = `${opacity}`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Reactive Background Image */}
      <div
        id="bg-image"
        className="fixed inset-0 w-full h-full z-0 bg-cover bg-center transition-opacity duration-300"
        style={{
          backgroundImage: "url('/your-background.jpg')",
          opacity: 1,
        }}
        aria-hidden="true"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full z-10 bg-gradient-to-br from-pink-100 via-yellow-100 to-green-100 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 flex flex-col min-h-screen">
        {/* Navigation Bar */}
        <nav className="w-full flex justify-center items-center py-4 bg-gradient-to-r from-pink-400 via-yellow-400 to-green-400 shadow-lg">
          <ul className="flex gap-8 text-white font-bold text-lg">
            <li><a href="#" className="hover:text-yellow-200 transition">Home</a></li>
            <li><a href="#" className="hover:text-yellow-200 transition">Gallery</a></li>
            <li><a href="#" className="hover:text-yellow-200 transition">Workshops</a></li>
            <li><a href="#" className="hover:text-yellow-200 transition">Contact</a></li>
          </ul>
        </nav>

        {/* Hero Section */}
        <main className="flex flex-col items-center justify-center flex-1 px-4 py-16">
          <Image
            src="/arts-crafts-logo.png"
            alt="Arts & Crafts Logo"
            width={160}

            
            height={160}
            priority
            className="mb-8 rounded-full shadow-lg border-4 border-yellow-300"
          />
          <h1 className="text-6xl font-extrabold mb-4 text-pink-600 text-center drop-shadow-lg">
            Creative Hands Studio
          </h1>
          <p className="text-xl text-green-700 mb-6 text-center max-w-2xl font-medium">
            Welcome to Creative Hands Studio! We specialize in unique, handmade arts and crafts, vibrant workshops, and custom creations. Explore our gallery, join a class, or contact us for bespoke projects. Let’s make something beautiful together!
          </p>
          <div className="flex gap-4 mb-8">
            <a
              href="#"
              className="px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition font-bold shadow-md"
            >
              View Gallery
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-yellow-400 text-pink-700 rounded-full hover:bg-yellow-500 transition font-bold shadow-md border border-pink-300"
            >
              Join Workshop
            </a>
          </div>
          <div className="bg-white bg-opacity-80 rounded-xl p-6 shadow-lg max-w-xl text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-2">About Us</h2>
            <p className="text-gray-700">
              Established in 2020, Creative Hands Studio is your local hub for arts and crafts. We offer a wide range of handmade products, host regular workshops for all ages, and love collaborating on custom projects. Visit us to discover your creative side!
            </p>
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full py-8 bg-gradient-to-r from-green-400 via-yellow-400 to-pink-400 flex flex-col items-center gap-4">
          <div className="flex gap-6">
            <a
              href="https://wa.me/yourwhatsapplink"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-green-900 transition font-bold"
            >
              <Image src="/whatsapp.svg" alt="WhatsApp" width={24} height={24} />
              WhatsApp
            </a>
            <a
              href="https://goo.gl/maps/yourlocation"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-pink-900 transition font-bold"
            >
              <Image src="/location.svg" alt="Location" width={24} height={24} />
              Location
            </a>
            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-yellow-900 transition font-bold"
            >
              <Image src="/instagram.svg" alt="Instagram" width={24} height={24} />
              Instagram
            </a>
          </div>
          <span className="text-white text-sm mt-2">
            &copy; {new Date().getFullYear()} Creative Hands Studio. All rights reserved.
          </span>
        </footer>
      </div>
    </div>
  );
}