import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export default function WhatIDo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <section id="about" ref={ref} className="bg-white py-32 relative">
      {/* Section Header */}
      <div className="sticky top-0 bg-white border-b border-[#c4bfbf] z-10">
        <div className="px-5 py-3 flex items-center gap-3">
          <span className="text-[#ff442b]">//</span>
          <h2 className="text-[#ff442b] font-semibold">Intro</h2>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-5 py-32">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-[1200px] mx-auto mb-16"
        >
          <h2 className="text-[68px] font-semibold tracking-[-2.88px] leading-[74px] text-[#151414]">
            Where{" "}
            <span className="text-[#ff442b]">design meets engineering</span> -- I merge visual storytelling and 
            UX strategy with full-stack architecture{" "}
            <span className="text-[#ff442b]">
              to build digital products that are both beautiful and built to scale.
            </span>
          </h2>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-end gap-8 items-end"
        >
          <div className="flex-1" />
          
          <div className="flex flex-col gap-16 max-w-[530px]">
            <p className="text-[#4f4a4a] leading-[25.2px] tracking-[0.18px]">
              Crafting digital experiences that feel effortless 
              — precise in code, refined in design.
            </p>

            <motion.button
            onClick={scrollToProjects}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border border-[#c4bfbf] rounded-full px-10 py-5 text-[#4f4a4a] hover:border-[#ff442b] hover:text-[#ff442b] transition-all self-start"
            >
              See my Work
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
