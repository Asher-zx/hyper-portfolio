import { motion } from "motion/react";

const brands = [
  { name: "Framer", width: 110 },
  { name: "Webflow", width: 110 },
  { name: "Figma", width: 109 },
  { name: "Adobe", width: 41 },
];

export default function Trust() {
  return (
    <section className="bg-white border-t border-[#c4bfbf] py-12 overflow-hidden">
      <div className="relative">
        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-8 items-center whitespace-nowrap"
        >
          {[...Array(10)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-8 items-center">
              {brands.map((brand, index) => (
                <div
                  key={`${setIndex}-${index}`}
                  className="h-16 flex items-center justify-center px-4 opacity-40 hover:opacity-100 transition-opacity"
                  style={{ width: brand.width }}
                >
                  <div className="w-full h-8 bg-[#4f4a4a] rounded" />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
