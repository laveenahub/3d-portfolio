"use client";

import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    id: 1,
    role: "UI/UX Designer",
    company: "HelpingGeeks",
    duration: "Aug 2024 – Feb 2025",
    bullets: [
      "Delivered user-centric digital products that improved usability, user engagement, and brand experience for multiple clients.",
      "Contributed to the creation of high-converting websites and digital interfaces supporting businesses in improving their online presence."
    ],
  },
  {
    id: 2,
    role: "UI/UX Designer",
    company: "Conscent.ai",
    duration: "Aug 2023 – Oct 2023",
    bullets: [
      "Drafted sales enablement and marketing assets such as a landing page and subscription page in Figma and saw a 25% improvement in user engagement.",
      "Collaborated with clients, creative teams and developers to translate brand identity into user-centered digital experiences."
    ],
  },
  {
    id: 3,
    role: "Creative Designer",
    company: "Socialveins Private Limited",
    duration: "Oct 2021 – Jun 2023",
    bullets: [
      "Designed social media campaigns adhering to brand guidelines, resulting in a 35% increase in user engagement.",
      "Through enhanced visual communication & content clarity, achieved a 15% decrease in the rate of user drop-off."
    ],
  },
];

export default function Experience() {
  return (
    <section className="relative z-20 bg-[#121212] py-24 px-8 md:px-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <motion.h3 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl md:text-5xl font-bold mb-16 tracking-tight"
        >
          Experience
        </motion.h3>
        
        <div className="space-y-12 max-w-4xl">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
                <div>
                  <h4 className="text-2xl font-semibold">{exp.role}</h4>
                  <p className="text-xl text-neutral-400 font-light mt-1">{exp.company}</p>
                </div>
                <div className="text-sm tracking-widest text-neutral-500 uppercase mt-2 md:mt-0 font-mono">
                  {exp.duration}
                </div>
              </div>
              <ul className="list-disc list-outside ml-5 space-y-2 text-neutral-300 font-light leading-relaxed">
                {exp.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
