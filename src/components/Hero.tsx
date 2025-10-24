import { motion } from "motion/react";
import heorImage from "../assets/heropic.png";
import { Linkedin, Github } from "lucide-react";
import { RiTwitterXLine } from "react-icons/ri";

export default function Hero() {
  const scrollingText = "Asher Zhixuan Wang -";

  return (
    <section id="home" className="relative h-screen bg-[#121111] overflow-hidden">
      <img 
        src={heorImage} 
        alt="Hero background" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
      
      {/* Social Links */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute left-4 bottom-12 z-10 flex flex-col gap-4 mix-blend-exclusion"
      >
        {[
          { 
            Icon: Linkedin, 
            label: "Linkedin",
            href: "https://www.linkedin.com/in/asher-wangzx/"
          },
          { 
            Icon: RiTwitterXLine, 
            label: "X",
            href: "https://x.com/asherwang1128"
          },
          { 
            Icon: Github, 
            label: "GitHub",
            href: "https://github.com/Asher-zx"
          },
        ].map(({ Icon, label, href }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, x: 5 }}
            className="flex items-center gap-2 text-white opacity-80 hover:opacity-100 transition-opacity"
          >
            <Icon size={24} />
            <span>{label}</span>
          </motion.a>
        ))}
      </motion.div>

      {/* Scrolling Text */}
      <div 
        className="absolute left-0 right-0 overflow-hidden mix-blend-exclusion" 
        style={{ top: 'calc(50% - 20px)', transform: 'translateY(-50%)' }}
      >
        <motion.div
          animate={{ x: [0, -1640] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex whitespace-nowrap"
          style={{ paddingBottom: '40px' }}
        >
          {[...Array(5)].map((_, i) => (
            <h1
              key={i}
              className="text-[260px] font-medium tracking-[-11.2px] leading-[220px] text-white mr-6"
            >
              {scrollingText}
            </h1>
          ))}
        </motion.div>
      </div>

      {/* Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-12 right-7 mix-blend-exclusion"
      >
        <div className="text-white text-right">
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="text-[67px] font-semibold tracking-[-2.16px] leading-[72px]"
          >
            // Full-stack Developer
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className="text-[66px] font-semibold tracking-[-2.16px] leading-[72px]"
          >
            Graphic Designer
          </motion.p>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
