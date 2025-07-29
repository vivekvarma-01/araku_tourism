"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import React from "react";



export default function AboutArakuTravels() {
  // Animation variants for Framer Motion
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, type: "spring" },
    }),
  };

  return (
    <section
      id="about"
      className="w-full py-16 px-4 sm:px-8 lg:px-0 bg-white dark:bg-zinc-950 transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto rounded-2xl bg-white/80 dark:bg-zinc-900/60 shadow-lg p-6 md:p-12 backdrop-blur-lg border border-zinc-200 dark:border-zinc-800">
        <motion.h1
          className="text-3xl md:text-4xl font-extrabold text-green-700 dark:text-green-300 mb-3 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span role="img" aria-label="mountain">🏞</span> About ArakuTravels
        </motion.h1>
        <motion.p
          className="text-lg text-zinc-700 dark:text-zinc-200 mb-6 text-center"
          // @ts-expect-error
          variants={fadeInUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Welcome to ArakuTravels – your local gateway to the lush valleys, misty mountains, and cultural wonders of Araku Valley.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Who We Are & Journey */}
          <motion.div
           // @ts-expect-error
            variants={fadeInUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-xl font-bold text-green-600 dark:text-green-400 mb-2 flex items-center gap-1">
                <span role="img" aria-label="star">🌟</span> Who We Are
              </h2>
              <p className="text-zinc-700 dark:text-zinc-200 text-base">
                At <span className="font-semibold text-green-700 dark:text-green-300">ArakuTravels</span>, we’re not just a travel service — we are local experts and passionate explorers of Araku. Our mission is to help travelers experience the true heart of Araku with comfort, ease, and authenticity.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-green-600 dark:text-green-400 mb-2 flex items-center gap-1">
                <span role="img" aria-label="rocket">🚀</span> Our Journey
              </h2>
              <p className="text-zinc-700 dark:text-zinc-200 text-base">
                <span className="font-semibold">Founded in 2020</span>, we’ve completed over <span className="font-semibold">4,000+ successful trips</span>, growing from one car to a trusted local fleet:
              </p>
              <ul className="mt-2 ml-3 text-black dark:text-white/90 list-disc text-sm space-y-1">
                <li>🚘 <b>4-seaters</b> – for couples and small families</li>
                <li>🚐 <b>8-seaters</b> – ideal for groups</li>
                <li>Operated by friendly, experienced drivers known for hospitality & punctuality</li>
              </ul>
            </div>
          </motion.div>

          {/* What We Offer & Why Choose */}
          <motion.div
           // @ts-expect-error
            variants={fadeInUp}
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-xl font-bold text-green-600 dark:text-green-400 mb-2 flex items-center gap-1">
                <span role="img" aria-label="clipboard">📋</span> What We Offer
              </h2>
              <ul className="text-zinc-700 dark:text-zinc-200 text-base list-disc ml-4 space-y-2">
                <li>Personalized Araku tour packages</li>
                <li>Clean, comfortable cab services</li>
                <li>Expert guides, local stories</li>
                <li>Accommodation & food recommendations</li>
                <li>Transparent, value-for-money pricing</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-green-600 dark:text-green-400 mb-2 flex items-center gap-1">
                <span role="img" aria-label="map">🗺</span> Why Choose Us?
              </h2>
              <ul className="text-zinc-700 dark:text-zinc-200 text-base list-disc ml-4 space-y-2">
                <li>Local expertise and guidance</li>
                <li>Reliable, safe vehicles</li>
                <li>Perfect timing and planning</li>
                <li>Friendly, knowledgeable drivers</li>
                <li><span className="font-semibold text-green-700 dark:text-green-300">4.9/5</span> customer satisfaction</li>
                <li>24/7 trip support</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


