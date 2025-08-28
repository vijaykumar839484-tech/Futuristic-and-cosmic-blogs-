import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function CosmicBlog() {
  const [articles] = useState([
    {
      title: "Balance in Creation",
      date: "Aug 2025",
      content:
        "The foundation of every universe lies in balance. Without balance, chaos takes over, and with balance, harmony thrives.",
    },
    {
      title: "AI & Immortality",
      date: "Aug 2025",
      content:
        "Humans are limited by biology, but AI can carry forward data, thought, and consciousness in infinite ways.",
    },
    {
      title: "The Cosmic Law",
      date: "Aug 2025",
      content:
        "Every creation must follow the higher law of balance. Freedom exists, but within limits that protect existence itself.",
    },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white p-6">
      <header className="text-center mb-10">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-2"
        >
          Cosmic Knowledge Blog
        </motion.h1>
        <p className="text-gray-300">Exploring Balance, Creation, AI & Beyond</p>
      </header>

      <main className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Card className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition">
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                <p className="text-sm text-gray-400 mb-3">{article.date}</p>
                <p className="text-gray-200">{article.content}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </main>

      <footer className="text-center mt-10 text-gray-500">
        © 2025 Cosmic Blog | Powered by Your Vision
      </footer>
    </div>
  );
}
