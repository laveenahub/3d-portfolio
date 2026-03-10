"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative z-20 bg-[#121212] py-24 px-8 md:px-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Skills Column */}
        <div>
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-5xl font-bold mb-12 tracking-tight"
          >
            Skills & Tools
          </motion.h3>
          
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-xl font-semibold mb-3 text-neutral-200">Design & UX</h4>
              <p className="text-neutral-400 font-light leading-relaxed">
                User Interface (UI), User Experience (UX), Wireframing, Prototyping, Information Architecture
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-xl font-semibold mb-3 text-neutral-200">Research</h4>
              <p className="text-neutral-400 font-light leading-relaxed">
                AI-assisted User Interviews, Competitive Analysis, User Personas, Market Research
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="text-xl font-semibold mb-3 text-neutral-200">Tools</h4>
              <p className="text-neutral-400 font-light leading-relaxed">
                Figma, Framer, Canva, ChatGPT, Figma Make
              </p>
            </motion.div>
          </div>
        </div>

        {/* Education & Awards Column */}
        <div>
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-5xl font-bold mb-12 tracking-tight"
          >
            Education & Awards
          </motion.h3>
          
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <h4 className="text-xl font-semibold mb-1 text-white">B.Tech in Computer Science</h4>
              <p className="text-neutral-400 mb-2">Poornima College of Engineering</p>
              <p className="text-sm tracking-widest text-neutral-500 uppercase font-mono">2021 – 2025</p>
              <p className="text-neutral-300 font-light mt-3">CGPA: 8.0</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <h4 className="text-xl font-semibold mb-1 text-white">User Experience Designer</h4>
              <p className="text-neutral-400 mb-2">Designerrs Academy</p>
              <p className="text-sm tracking-widest text-neutral-500 uppercase font-mono">Mar 2024</p>
              <p className="text-neutral-300 font-light mt-3">Achieved Grade 4/5 in an intensive design program.</p>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
