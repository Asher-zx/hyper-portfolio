import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";

const services = [
  {
    id: "01",
    title: "Web Development",
    description: "User-focused app design that maximizes usability and encourages retention.",
    items: [
      "Framer, Webflow, or WordPress Builds",
      "CMS Integration",
      "SEO Optimization",
      "Site Migrations",
    ],
  },
  {
    id: "02",
    title: "Application Design",
    description: "User-focused app design that maximizes usability and encourages retention.",
    items: [
      "Mobile Apps",
      "Desktop Apps",
      "Complex Systems",
      "Design Systems Optimization",
    ],
  },
  {
    id: "03",
    title: "Website Design",
    description: "Not just about aesthetics, but about developing logical, scalable design systems that are precisely tailored to the web and app application.",
    items: [
      "Landing Pages",
      "Corporate Websites",
      "Blogs",
      "E-commerce",
      "Complex Websites",
    ],
  },
  {
    id: "04",
    title: "Branding & Marketing",
    description: "Branding that builds trust and drives loyalty through clear visuals and messaging.",
    items: [
      "Brand Strategy and Messaging",
      "Logo Design",
      "Visual Identity",
      "Brand Guidelines & Frameworks",
      "Marketing materials",
      "Motion Design",
    ],
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="border-b border-[#c4bfbf] py-20"
    >
      <div className="flex gap-8">
        {/* Large Number */}
        <motion.div
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
          className="text-[#f5f5f5] text-[392px] font-['DM_Mono'] leading-[342px] tracking-[-7.8px] select-none"
        >
          {service.id}
        </motion.div>

        {/* Content */}
        <div className="flex-1 flex flex-col gap-20">
          <div className="flex flex-col gap-6">
            <motion.h3
              animate={{ x: isHovered ? 10 : 0 }}
              className="text-[68px] font-semibold tracking-[-2.16px] leading-[72px] text-[#151414]"
            >
              {service.title}
            </motion.h3>
            <p className="text-[#4f4a4a] max-w-[640px] pl-4 border-l-2 border-transparent hover:border-[#ff442b] transition-colors">
              {service.description}
            </p>
          </div>

          {/* Service Items */}
          <div className="space-y-0">
            {service.items.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 + i * 0.1 }}
                whileHover={{ x: 10 }}
                className="border-t border-[#c4bfbf] py-4 px-6 flex items-center justify-between group cursor-pointer"
              >
                <span className="font-semibold text-[#151414] group-hover:text-[#ff442b] transition-colors">
                  {item}
                </span>
                <span className="font-['DM_Mono'] text-[#4f4a4a] opacity-50">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-white py-16">
      {/* Section Header */}
      <div className="sticky top-0 bg-white border-b border-[#c4bfbf] z-10">
        <div className="px-5 py-3 flex items-center gap-3">
          <span className="text-[#ff442b]">//</span>
          <h2 className="text-[#ff442b] font-semibold">Services</h2>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-5">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
