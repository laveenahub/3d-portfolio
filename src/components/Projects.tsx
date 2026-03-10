"use client";

import { motion } from "framer-motion";

const PROJECTS = [
  {
    id: 1,
    title: "DesignLink",
    category: "Product Design",
    description: "An end-to-end portfolio-based recruitment platform connecting designers with employers. Involved AI-assisted user research, wireframing, and minimal high-fidelity designs.",
  },
  {
    id: 2,
    title: "WanderStories",
    category: "Hackathon - 1st Position",
    description: "0-1 design of WanderStories for the Open Innovation Track at lnmhacks5.0. Collaborated in a team of 4 to deliver a winning solution.",
  },
  {
    id: 3,
    title: "Friends of Figma, Jaipur",
    category: "Community Management",
    description: "Co-ordinated the chapter launch, organizing events for 200+ creatives to foster networking and collaboration within the local design community.",
  },
  {
    id: 4,
    title: "Google Developer Student Clubs",
    category: "Team Leadership",
    description: "Organized 20+ events with Tier-1 recognition at Gen-AI Study Jams and secured 1st place at the Women in Tech Conference 2023.",
  },
];

export default function Projects() {
  return (
    <section className="relative z-20 bg-[#121212] py-32 px-8 md:px-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight">
          Projects & Initiatives
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden hover:bg-white/10 transition-colors duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <p className="text-neutral-400 text-sm md:text-md uppercase tracking-widest mb-4">
                {project.category}
              </p>
              <h4 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
                {project.title}
              </h4>
              <p className="text-neutral-300 font-light leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
