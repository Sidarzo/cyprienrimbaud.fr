"use client"
import Link from 'next/link';
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 text-center">
        
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
      >
          Cyprien Rimbaud
      </motion.h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Développeur web full-stack passionné par la création d'expériences numériques innovantes
        </p>
        <div className="flex gap-4 justify-center">
          <Link 
            href="/projets" 
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Voir mes projets
          </Link>
          <Link 
            href="/contact" 
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
          >
            Me contacter
          </Link>
        </div>
      </div>
    </section>
  );
} 