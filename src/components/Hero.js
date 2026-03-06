"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="text-center py-32 bg-gray-100 flex flex-col items-center">
      {/* Animated Profile Image */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/porfile.jpg"
          alt="Nitesh Kumar"
          width={160}
          height={160}
          className="rounded-full mb-6 shadow-lg"
        />
      </motion.div>

      {/* Animated Heading */}
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        Hi, I'm Nitesh Kumar
      </motion.h1>

      {/* Animated Text */}
      <motion.p
        className="text-xl text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Full Stack Developer | Next.js | React | MongoDB
      </motion.p>

      {/* Animated Button */}
      <motion.button
        className="mt-8 bg-black text-white px-8 py-3 rounded-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        View My Work
      </motion.button>
    </section>
  );
}
