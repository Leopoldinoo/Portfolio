"use client";
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Rocket, Code2, Award } from "lucide-react";

const timeline = [
  {
    year: "2026",
    title: "Curso de Desenvolvimento de Sistemas- Senac MG",
    desc: "Iniciando o curso de Desenvolvimento de Sistemas no Senac MG, focado em programação, desenvolvimento web e mobile.",
    icon: Rocket,
    color: "from-blue-500 to-purple-500",
  },
  {
    year: "2025",
    title: "Curso de Técnico em Informática- Senac MG",
    desc: "Estudando o curso de Técnico em Informática no Senac MG, com foco em lógica de programação, hardware e redes.",
    icon: Code2,
    color: "from-purple-500 to-pink-500",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-blue-400 tracking-widest uppercase mb-3">
            Jornada
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Experiência e Crescimento
          </h2>
          <p className="mt-4 text-gray-500 max-w-lg mx-auto">
            Minha trajetória na área de tecnologia — das primeiras linhas de
            código à construção de aplicações completas.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/30 to-transparent" />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="relative pl-16 sm:pl-20 group"
              >
                {/* Icon circle */}
                <div
                  className={`absolute left-0 top-0 w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${item.color} p-[1px] transition-transform duration-300 group-hover:scale-110`}
                >
                  <div className="w-full h-full rounded-xl bg-[#0a0a0f] flex items-center justify-center">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white/80" />
                  </div>
                </div>

                <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
                  <span className="text-xs font-medium text-gray-500 tracking-wider">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-semibold text-white mt-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
