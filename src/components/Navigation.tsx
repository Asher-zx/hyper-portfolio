import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`absolute top-0 left-0 right-0 z-50 transition-all duration-300 
      `}
    >
      <div className="max-w-[1400px] mx-auto px-5 h-[92px] flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer mix-blend-difference"
        >
          <p className="text-white">© Asher Design & Strategy</p>
        </motion.div>

        <div className="flex items-center gap-8 mix-blend-difference">
          {["projects", "about", "contact"].map((item) => (
            <motion.button
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(item)}
              className={`text-white capitalize transition-opacity ${
                activeSection === item ? "opacity-100" : "opacity-70"
              }`}
            >
              {item}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
