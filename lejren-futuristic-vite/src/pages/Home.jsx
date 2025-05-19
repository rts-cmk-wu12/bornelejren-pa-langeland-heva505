// src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo/logo.jpg";
import img1 from "../assets/fotos/img-1.jpg";
import img2 from "../assets/fotos/img-2.jpg";
import img3 from "../assets/fotos/img-3.jpg";
import img4 from "../assets/fotos/img-4.jpg";
import img5 from "../assets/fotos/img-5.jpg";
import img6 from "../assets/fotos/img-6.jpg";

const images = [img1, img2, img3, img4, img5, img6];

export default function Home() {
  return (
    <section className="relative from-white to-[#ffeaea] text-gray-800  min-h-screen w-full bg-white font-urbanist">
       
      
      <div className="absolute inset-0">
        <img
          src="/dark-red-bg.png"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-white opacity-60" />
      </div>

    
      <div className="relative max-w-7xl mx-auto text-center z-10 px-4 pt-40 pb-20">
        <motion.img
          src={logo}
          alt="logo"
          className="mx-auto w-28 mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-4 text-[#d0000b]"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Velkommen til Børnelejren på Langeland
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Børnelejren på Langeland er en forening, der udelukkende har til
          formål at sende dårligt stillede børn og unge sammen med deres
          pædagoger på et ophold i landlige omgivelser på det naturskønne
          Sydlangeland.
        </motion.p>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <motion.div
              key={i}
              className="overflow-hidden rounded-3xl shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.25)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.img
                src={src}
                alt={`Billede ${i + 1}`}
                className="object-cover h-64 w-full"
                initial={{ scale: 1 }}
                animate={{ scale: 1 }}
              />
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-12 text-gray-700 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Foreningen Børnelejren på Langeland samler penge ind fra erhvervslivet,
          fonde og private til at sende dårligt stillede børn på et velfortjent
          lejrophold på Søgård. <strong>Hjælp os med at hjælpe dem!</strong>
        </motion.p>

        <motion.a
          href="/tilmeld"
          className="mt-8 inline-block bg-[#d0000b] hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          Bliv sponsor i dag
        </motion.a>
      </div>
    </section>
  );
}


