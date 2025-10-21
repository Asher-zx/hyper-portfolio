import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Asher blends creativity and technical skill, turning complex ideas into seamless, visually engaging digital experiences.",
    author: "Maya Lopez",
    role: "CEO, Hyperisland",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    quote:
      "He elevated our product with cleaner code, faster performance, and design-driven solutions that enhanced user engagement.",
    author: "Muhammad Ali",
    role: "Founder, Yoice",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  },
  {
    quote:
      "He led UX implementation and built scalable systems, combining strong technical vision with collaborative precision.",
    author: "Sid",
    role: "CTO, JusteraGroup",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section ref={ref} className="bg-white py-16">
      {/* Section Header */}
      <div className="sticky top-0 bg-white border-b border-[#c4bfbf] z-10">
        <div className="px-5 py-3 flex items-center gap-3">
          <span className="text-[#ff442b]">//</span>
          <h2 className="text-[#ff442b] font-semibold">Testimonials</h2>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 py-24">
        <div className="relative">
          {/* Quote */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h3 className="text-[68px] font-semibold tracking-[-2.16px] leading-[74px] max-w-[920px]">
              <span className="text-[#151414]">{current.quote.split(" ").slice(0, 4).join(" ")}</span>{" "}
              <span className="text-[#ff442b]">{current.quote.split(" ").slice(4).join(" ")}</span>
            </h3>
          </motion.div>

          {/* Author Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#ff442b]">
              <img src={current.avatar} alt={current.author} className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="font-semibold text-[#151414] flex items-center gap-2">
                <span className="text-[#151414]">//</span>
                {current.author}
              </p>
              <p className="text-[#4f4a4a] pl-5">{current.role}</p>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-[#ff442b] font-['DM_Mono']">
              <span>{String(currentIndex + 1).padStart(2, "0")}</span>
              <span className="text-[#c4bfbf]">/{String(testimonials.length).padStart(2, "0")}</span>
            </div>

            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border border-[#c4bfbf] flex items-center justify-center hover:border-[#ff442b] hover:text-[#ff442b] transition-colors"
              >
                <ChevronLeft size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border border-[#c4bfbf] flex items-center justify-center hover:border-[#ff442b] hover:text-[#ff442b] transition-colors"
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>
          </div>

          {/* Avatar Indicators */}
          <div className="absolute right-0 top-0 flex flex-col gap-3">
            {testimonials.map((testimonial, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.1 }}
                onClick={() => setCurrentIndex(index)}
                className={`w-16 h-16 rounded-full overflow-hidden border-4 transition-all ${
                  index === currentIndex ? "border-[#ff442b] scale-110" : "border-white opacity-60"
                }`}
              >
                <img src={testimonial.avatar} alt={testimonial.author} className="w-full h-full object-cover" />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
