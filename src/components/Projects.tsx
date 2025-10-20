import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import ProjectDetail from "./ProjectDetail";

const projects = [
  {
    year: "2024",
    title: "Formula Vintage",
    description:
      "For Formula Vintage, we crafted a design that honors the rich heritage of classic cars while adding a modern twist. Combining timeless elegance with sleek, contemporary elements, we created an experience that appeals to both enthusiasts and newcomers.",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7",
    tags: ["Landing Page", "Mobile App", "Redesign"],
    client: "Formula Vintage Ltd.",
    duration: "3 months",
    role: "Lead Designer & Developer",
    detailedDescription:
      "Formula Vintage needed a complete digital transformation to showcase their collection of classic and vintage racing cars. The project involved creating a responsive landing page, developing a companion mobile app for virtual showrooms, and redesigning their entire brand identity to appeal to both collectors and younger enthusiasts entering the vintage car market.",
    challenge:
      "The main challenge was bridging the gap between traditional vintage car enthusiasts who value authenticity and heritage, and a new generation of collectors who expect modern, interactive digital experiences. We needed to create a design that felt both timeless and contemporary.",
    solution:
      "We developed a design system that combines classic typography and elegant layouts with modern interactions and smooth animations. The color palette draws from vintage racing heritage while the UI elements are thoroughly modern. Interactive 3D car viewers and AR features make the experience engaging for tech-savvy users.",
    results: [
      "250% increase in mobile engagement",
      "40% boost in qualified leads from the landing page",
      "Featured in 5 major automotive design publications",
      "4.8/5 average app store rating with 10K+ downloads",
    ],
    technologies: ["React Native", "Three.js", "Framer Motion", "Tailwind CSS", "Node.js"],
    galleryImages: [
      "https://images.unsplash.com/photo-1757559451664-88ebccf866ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY2FyJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYwOTgwOTMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
      "https://images.unsplash.com/photo-1485291571150-772bcfc10da5",
    ],
    testimonial: {
      quote:
        "The team transformed our vision into reality. The attention to detail and understanding of our brand heritage was exceptional.",
      author: "Richard Sterling",
      role: "CEO, Formula Vintage Ltd.",
    },
  },
  {
    year: "2024",
    title: "Sprey Zest",
    description:
      "For Sprey Zest, we took a playful, bold approach to packaging and branding. Instead of following the typical fresh or clean aesthetic, we infused energy and personality into every detail.",
    image: "https://images.unsplash.com/photo-1556155092-490a1ba16284",
    tags: ["Website Design", "Branding"],
    client: "Zest Consumer Products",
    duration: "2 months",
    role: "Brand Designer & Web Developer",
    detailedDescription:
      "Sprey Zest is a new line of eco-friendly cleaning products targeting millennials and Gen Z consumers. The brand needed a complete identity package and an e-commerce website that would stand out in the crowded cleaning products market. Our goal was to make cleaning products exciting and Instagram-worthy.",
    challenge:
      "Breaking away from the sterile, clinical aesthetic that dominates the cleaning product industry while still communicating effectiveness and safety. We needed to appeal to environmentally conscious consumers without using typical 'green' clichés.",
    solution:
      "We created a vibrant, energetic brand identity with bold colors, playful illustrations, and dynamic typography. The website features micro-interactions, product animations, and user-generated content integration. The packaging design uses biodegradable materials with QR codes linking to sustainability metrics.",
    results: [
      "Sold out initial product run within 2 weeks of launch",
      "85% of customers shared product photos on social media",
      "Won 'Best New Brand 2024' at Eco Design Awards",
      "Featured in Vogue, Dwell, and Fast Company",
    ],
    technologies: ["Next.js", "Shopify", "GSAP", "Illustrator", "Figma"],
    galleryImages: [
      "https://images.unsplash.com/photo-1601068785450-ba55f33dfe0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcHJheSUyMGJvdHRsZSUyMHByb2R1Y3R8ZW58MXx8fHwxNzYwOTgwOTMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce",
      "https://images.unsplash.com/photo-1584627904012-23ea7d1c36fc",
      "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    ],
    testimonial: {
      quote:
        "They didn't just design a brand, they created a movement. Our customers are obsessed!",
      author: "Emma Rodriguez",
      role: "Founder, Zest Consumer Products",
    },
  },
  {
    year: "2020",
    title: "Super Pro",
    description:
      "For Super-Pro, we redefined what it means to be a professional by focusing on the mindset and determination behind success, not just the achievements.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
    tags: ["Desktop App", "Mobile App"],
    client: "SuperPro Fitness Inc.",
    duration: "6 months",
    role: "Lead Product Designer & UX Strategist",
    detailedDescription:
      "SuperPro is a comprehensive fitness tracking and coaching platform designed for serious athletes and fitness professionals. The project involved designing both desktop and mobile applications that work seamlessly together, allowing trainers to create programs and clients to track their progress anywhere, anytime.",
    challenge:
      "Creating a professional-grade fitness app that could compete with established platforms while offering unique features that would attract both trainers and their clients. The interface needed to handle complex workout programming while remaining intuitive for users of all tech-skill levels.",
    solution:
      "We designed a dual-interface system: a powerful desktop app for trainers with advanced programming tools, and a streamlined mobile app for clients focused on clarity and motivation. The apps sync in real-time and use smart algorithms to adapt workouts based on performance data.",
    results: [
      "10,000+ active trainers using the platform within first year",
      "Average client retention rate of 89% (industry avg: 45%)",
      "Acquired by major fitness tech company in 2023",
      "Named 'Best Fitness App' by Apple App Store (2021)",
    ],
    technologies: ["React", "React Native", "TypeScript", "GraphQL", "PostgreSQL", "AWS"],
    galleryImages: [
      "https://images.unsplash.com/photo-1732917771559-949743ab90ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwbW9iaWxlJTIwYXBwfGVufDF8fHx8MTc2MDg4NzQzOHww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f",
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9",
    ],
    testimonial: {
      quote:
        "This platform revolutionized how I run my training business. My clients love it and I've doubled my capacity.",
      author: "Marcus Thompson",
      role: "Professional Trainer & SuperPro Beta Tester",
    },
  },
  {
    year: "2024",
    title: "Architech Buildings",
    description:
      "We redefined the concept of modern living by creating a design that challenges conventional boundaries. Focusing on comfort, functionality, and unexpected elements.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    tags: ["Mobile App", "Branding", "Website Design"],
    client: "Architech Development Group",
    duration: "4 months",
    role: "Creative Director & Full-Stack Developer",
    detailedDescription:
      "Architech Buildings is a luxury real estate developer specializing in sustainable, technology-integrated residential buildings. The project encompassed a complete brand identity, a sophisticated website showcasing their properties, and a resident mobile app for building management and community engagement.",
    challenge:
      "Communicating the complex value proposition of smart, sustainable luxury living while maintaining an approachable, human-centered brand voice. The digital platforms needed to reflect the sophistication of $2M+ properties while being accessible to a diverse resident base.",
    solution:
      "We created a minimalist, architectural brand language with clean lines, generous whitespace, and stunning photography. The website uses immersive 3D virtual tours and the mobile app provides intuitive building controls, community features, and concierge services in one beautifully designed interface.",
    results: [
      "95% of property viewings start with website virtual tour",
      "Resident app has 98% adoption rate across all buildings",
      "$150M in pre-sales attributed to digital marketing",
      "Winner of 2024 Real Estate Innovation Award",
    ],
    technologies: ["Vue.js", "Flutter", "Three.js", "Firebase", "Strapi CMS"],
    galleryImages: [
      "https://images.unsplash.com/photo-1572457598110-2e060c4588ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjA5Njg0NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd",
    ],
    testimonial: {
      quote:
        "The digital experience perfectly captures what makes our buildings special. It's not just beautiful—it drives real sales.",
      author: "David Chen",
      role: "VP of Marketing, Architech Development Group",
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

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="sticky top-0 h-screen flex items-center justify-center py-16"
    >
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        className="bg-white rounded-[20px] shadow-2xl p-3 max-w-[1250px] w-full cursor-pointer"
      >
        <div className="flex gap-2">
          {/* Image */}
          <motion.div
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
            className="relative w-[793px] h-[716px] rounded-2xl overflow-hidden border border-[#c4bfbf]"
          >
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
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