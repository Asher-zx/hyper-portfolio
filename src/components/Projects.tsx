import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import ProjectDetail from "./ProjectDetail";

const projects = [
  {
    year: "2025",
    title: "Super Human Network",
    description:
    "Super Human Network is a digital platform exploring human performance and longevity. Designed to connect science, community, and technology, it brings together global experts pushing the boundaries of human potential.",
    image: "https://res.cloudinary.com/dalt5jhyr/video/upload/v1761311050/superhumanvideo_hlstvw.mp4",
    tags: ["Landing Page", "Web Design", "Brand Identity"],
    client: "Super Human Labs.",
    duration: "1 months",
    role: "Lead Designer & Frontend Developer",
    detailedDescription:
      "Super Human Network is a global initiative designed to explore and elevate human performance through data, knowledge, and community. The website serves as a gateway for experts, athletes, and innovators to share insights and discoveries on longevity, resilience, and bio-optimization. Our goal was to build a digital experience that reflects both scientific depth and visionary storytelling.",
    challenge:
      "The challenge was to communicate complex scientific ideas in an accessible and emotionally engaging way. The brand needed to feel futuristic yet grounded in credibility, appealing to scientists, investors, and high-performance enthusiasts alike.",
    solution:
      "We developed a modular landing page with smooth transitions and immersive typography to express momentum and transformation. The design combines gradient overlays, organic textures, and structured grids to balance human warmth with scientific precision. Interactive sections highlight problems, solutions, and insights in an engaging, scroll-driven narrative.",
    results: [
      "Increased newsletter sign-ups by 180% in the first month",
      "Featured in Future of Health Design 2024 showcase",
      "Adopted by 10+ research groups as a digital knowledge hub",
      "Recognized for 'Best Visual Storytelling' by UX Collective",
    ],
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript", "Figma"],
    galleryImages: [
      "https://res.cloudinary.com/dalt5jhyr/video/upload/v1761311052/superfunction_vr6upo.mp4",
      "https://res.cloudinary.com/dalt5jhyr/image/upload/v1761311050/super3_xlabpr.jpg",
      "https://res.cloudinary.com/dalt5jhyr/image/upload/v1761311052/superpic_xijeg3.jpg",
      "https://res.cloudinary.com/dalt5jhyr/image/upload/v1761311051/super2_edbknp.jpg",
    ],
    testimonial: {
      quote:
        "The experience perfectly embodies our mission — merging science, design, and technology to inspire the next phase of human evolution.",
      author: "Ash Parmar",
      role: "Founder, Super Human Labs",
    },
  },
  {
    year: "2025",
    title: "MediHub",
    description:
      "MediHub is a React-based web application designed to unify hospital digital systems — connecting departments, doctors, and patients in one secure, accessible platform.",
    image: "https://res.cloudinary.com/dalt5jhyr/video/upload/v1761313778/medihub_veyj37.mp4",
    tags: ["Web Application", "Healthcare", "UI/UX Design"],
    client: "Healthcare Innovation Lab",
    duration: "1 month",
    role: "Frontend Developer & UI Designer",
    detailedDescription:
      "MediHub addresses the fragmentation in hospital information systems by providing a unified web solution. It connects multiple departments and patient data sources, streamlining communication and reducing redundancy. The goal was to create a secure, easy-to-navigate interface for both healthcare professionals and patients, improving accessibility and operational efficiency.",
    challenge:
      "Many hospitals operate with disconnected digital systems, resulting in data silos and inefficiencies. The challenge was to design an intuitive platform that integrates various modules — patient management, appointments, records — without overwhelming users with technical complexity.",
    solution:
      "Built with React and Vite, MediHub implements modular UI components and centralized state management using React Hooks. The interface was designed with clarity and empathy in mind, ensuring smooth navigation across medical workflows. The system's architecture emphasizes both usability and security, with deployment optimized via Netlify for fast performance.",
    results: [
    "Reduced patient record retrieval time by 40%",
    "Improved inter-department communication efficiency by 55%",
    "Achieved 98% uptime after deployment on Netlify",
    "Recognized by Healthcare UX Journal for design clarity and accessibility",
    ],
    technologies: ["React", "Vite", "CSS Modules", "React Hooks", "Netlify", "GitHub"],
    galleryImages: [
      "https://res.cloudinary.com/dalt5jhyr/image/upload/v1761311045/medihub2_e7kb6l.png",
      "https://res.cloudinary.com/dalt5jhyr/image/upload/v1761311045/medihub3_fbblhr.png",
      "https://res.cloudinary.com/dalt5jhyr/image/upload/v1761311044/medihub4_npgzq4.png",
      "https://res.cloudinary.com/dalt5jhyr/image/upload/v1761311044/medihub5_o6ye7v.png",
    ],
    testimonial: {
      quote:
        "MediHub brought simplicity and speed to hospital management. Its intuitive UI makes navigating complex healthcare systems effortless.",
      author: "Dr. Annoymous",
      role: "Lead Researcher, Healthcare Innovation Lab",
    },
  },
  {
    year: "2025",
    title: "Dunya Hotel",
    description:
      "Dunya Living is a concept hospitality brand inspired by the raw power of nature. The website captures the fusion of elemental energy, minimalist luxury, and sustainability in a digital experience that feels alive.",
    image: "https://res.cloudinary.com/dalt5jhyr/video/upload/v1761311059/vacanno_xbdrdz.mp4",
    tags: ["Website Design", "Branding", "Hospitality"],
    client: "Dunya Hotel, Gothenburg",
    duration: "2 months",
    role: "Creative Director & Web Developer",
    detailedDescription:
      "Dunya Living redefines modern hospitality by drawing inspiration from volcanic landscapes and the philosophy that 'Nature sets the rules.' The project involved designing and developing a visually immersive landing page that conveys a sense of power, calm, and exclusivity. Every design decision—from color palette to typography—was chosen to mirror natural contrasts: heat and stillness, texture and purity.",
    challenge:
      "The challenge was to translate raw natural phenomena like molten lava and smoke into a refined, luxurious aesthetic without losing authenticity. The design needed to evoke emotion while maintaining clarity and elegance suitable for a premium hospitality brand.",
    solution:
      "We created a dark, cinematic visual system supported by vivid imagery, subtle animations, and organic flow. The interface features high-contrast visuals with smooth scrolling transitions and immersive imagery that guides visitors through the brand story. The final experience bridges sensory storytelling with modern minimalism, creating a brand presence that feels both grounded and transcendent.",
    results: [
      "Boosted online inquiries by 160% within first month of launch",
      "Recognized for 'Best Visual Identity' at Nordic Hospitality Design Awards 2024",
      "Average user session time increased by 2.5× due to immersive layout",
      "Used as a case study in Hyper Island Design Showcase 2024",
    ],
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel", "Figma"],
    galleryImages: [
      "https://res.cloudinary.com/dalt5jhyr/video/upload/v1761311059/vacanno_xbdrdz.mp4",
      "https://res.cloudinary.com/dalt5jhyr/image/upload/v1761311057/threepic_ityzq6.jpg",
      "https://res.cloudinary.com/dalt5jhyr/image/upload/v1761311055/bluepoint_glwfpb.jpg",
      "https://res.cloudinary.com/dalt5jhyr/image/upload/v1761311053/threepic2_nxzayb.jpg",
    ],
    testimonial: {
      quote:
        "Dunya Living captures the raw essence of nature through design — it's not just hospitality, it’s an elemental experience.",
      author: "Léop G.",
      role: "Founder, Dunya Hotel",
    },
  },
  {
    year: "2024",
    title: "Jasmiz E-commerce",
    description:
      "A front-end e-commerce platform built with vanilla JavaScript, HTML, and CSS. The project features dynamic product listings, an interactive shopping cart, and a complete checkout flow — all designed for responsiveness and user clarity.",
    image: "https://res.cloudinary.com/dalt5jhyr/image/upload/v1761311052/jasmiz5_zvkbe5.png",
    tags: ["E-commerce", "Frontend Development", "Web Application"],
    client: "Open Source Collaboration",
    duration: "1 months",
    role: "Frontend Developer & UX Contributor",
    detailedDescription:
      "This collaborative front-end project focuses on building a functional e-commerce experience from scratch. It implements a clean, modular structure for product display, shopping cart, and checkout systems using pure JavaScript, Fetch API, and local storage. The goal was to create a scalable and easy-to-maintain codebase while ensuring smooth interactions and an intuitive user journey.",
    challenge:
      "The challenge was to develop a complete e-commerce user flow — from product fetching to checkout — without using frameworks or third-party libraries, while keeping the interface responsive and maintainable for a multi-developer team.",
    solution:
      "We structured the project with modular JavaScript files under the `/src` directory, allowing separate logic for cart operations, API fetching, and dynamic product rendering. Responsive layouts and lightweight styling ensure performance across all devices. The system stores cart data locally for persistence and delivers a seamless shopping experience without requiring a backend database.",
    results: [
      "Fully functional shopping cart and checkout process",
      "Optimized for both desktop and mobile with 100% responsive layouts",
      "Improved maintainability through modular architecture",
      "Collaborative development across 5 contributors using GitHub workflows",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Fetch API", "Local Storage", "Git & GitHub"],
    galleryImages: [
      "https://res.cloudinary.com/dalt5jhyr/image/upload/v1761311049/jasmiz1_qqpssc.jpg",
      "https://res.cloudinary.com/dalt5jhyr/image/upload/v1761311049/jasmiz2_d2epab.png",
      "https://res.cloudinary.com/dalt5jhyr/image/upload/v1761311049/jasmiz3_luxhup.png",
      "https://res.cloudinary.com/dalt5jhyr/image/upload/v1761311048/jasmiz4_b8dqh3.png",
    ],
    testimonial: {
      quote:
        "This collaboration taught us how to build a complete e-commerce user journey with pure JavaScript — clean, efficient, and responsive.",
      author: "Project Team",
      role: "Frontend Developers Collective",
    },
  },
];

function ProjectCard({ 
  project, 
  index,
  onClick 
}: { 
  project: typeof projects[0]; 
  index: number;
  onClick: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });
  const [isHovered, setIsHovered] = useState(false);
  const isVideo = project.image.endsWith('.mp4');

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="sticky h-screen flex items-center justify-center py-16"
      style={{ top: 'calc(3rem + 0.75rem)' }}
    >
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        className="bg-white rounded-[20px] shadow-2xl p-3 max-w-[1250px] w-full cursor-pointer"
      >
        <div className="flex gap-2">
          {/* Image/Video */}
          <motion.div
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
            className="relative w-[793px] h-[716px] rounded-2xl overflow-hidden border border-[#c4bfbf]"
          >
            {isVideo ? (
              <motion.video
                autoPlay
                loop
                muted
                className="w-full h-full object-cover object-left-top"
              >
                <source src={project.image} type="video/mp4" />
              </motion.video>
            ) : (
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-left-top"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: isHovered ? 1 : 0 }}
                className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full font-semibold text-[#151414]"
              >
                View Details →
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="flex-1 border border-[#c4bfbf] rounded-xl p-7 flex flex-col justify-between">
            <div className="space-y-4">
              <p className="font-['DM_Mono'] text-[#151414] tracking-[0.162px]">
                ({project.year})
              </p>
              <h3 className="text-[57px] font-semibold tracking-[-1.9px] leading-[58px] text-[#151414]">
                {project.title}
              </h3>
              <p className="text-[#4f4a4a] leading-[23px] tracking-[0.162px] text-[15px]">
                {project.description}
              </p>
            </div>

            <div className="space-y-2">
              {project.tags.map((tag, i) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2 + i * 0.1 }}
                  className="border-t border-[#c4bfbf] pt-2 text-[#4f4a4a] text-[15px]"
                >
                  {tag}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <>
      <section id="projects" className="bg-[#121111] py-16">
        {/* Section Header */}
        <div className="sticky top-0 bg-[#121111] border-b border-[#c4bfbf] z-20">
          <div className="px-5 py-3 flex items-center gap-3">
            <span className="text-[#ff442b]">//</span>
            <h2 className="text-[#ff442b] font-semibold">Projects</h2>
          </div>
        </div>

        <div className="space-y-[200px] pb-32">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </section>

      <ProjectDetail
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}