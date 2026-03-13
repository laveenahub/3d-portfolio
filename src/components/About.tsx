"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative z-20 bg-[#121212] py-24 px-8 md:px-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto mb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Picture */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-full aspect-square md:aspect-[4/5] lg:aspect-square rounded-[2rem] overflow-hidden border border-white/10 bg-white/5"
        >
          <img 
            src="/profile.jpg"
            alt="Laveena Chetwani"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </motion.div>

        {/* Intro */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="space-y-6 text-neutral-300 font-light text-lg md:text-xl leading-relaxed"
        >
          <p>
            <span className="text-white font-medium">I didn&apos;t start with Figma.</span><br />
            I started with a pencil.
          </p>
          <p>
            Hi, I&apos;m Laveena. But call me Lavee. <span role="img" aria-label="smile">🙂</span>
          </p>
          <p>
            Before I knew what design even was — I was drawing characters, doodling art, crafting things with my hands.
          </p>
          <p>
            That love grew into <span aria-hidden="true">↓</span><br />
            → Business cards. Banners. Posters.<br />
            → Then screens. Flows. Experiences.<br />
            → Then a full passion for Product Design.
          </p>
          <p>
            Computer Science gave me logic.<br />
            Design gave me feeling.<br />
            Together — I build things that solve AND feel right.
          </p>
          <p>
            Because I believe one thing deeply —<br />
            <span className="text-white font-medium">Design should solve. Not decorate.</span>
          </p>
          <p>
            Every pixel I place has a purpose.<br />
            Not a decoration. A solution.<br />
            That&apos;s my standard. Always.
          </p>
          <p className="pt-4">
            <span className="text-white">Want designs that actually work? <span role="img" aria-label="bullseye">🎯</span></span><br />
            <a href="mailto:contact@laveenachetwani.online" className="text-neutral-400 hover:text-white transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-white/100">
              📩 contact@laveenachetwani.online
            </a>
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 pt-24 border-t border-white/10">
        
        {/* Skills Column */}
        <div>
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-5xl font-bold mb-12 tracking-tight"
          >
            Skills
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
