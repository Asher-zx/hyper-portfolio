import { motion, AnimatePresence } from "motion/react";
import { X, ArrowLeft, ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useEffect, useRef, useState } from "react";
import Footer from "./Footer";
import Lenis from "@studio-freight/lenis";

interface ProjectDetailProps {
  project: {
    year: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    client?: string;
    duration?: string;
    role?: string;
    detailedDescription?: string;
    challenge?: string;
    solution?: string;
    results?: string[];
    technologies?: string[];
    galleryImages?: string[];
    testimonial?: {
      quote: string;
      author: string;
      role: string;
    };
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

// Result Image Component with Lenis scroll effects
function ResultImage({ 
  src, 
  alt, 
  index, 
  total,
  containerRef 
}: { 
  src: string; 
  alt: string; 
  index: number; 
  total: number;
  containerRef: React.RefObject<HTMLDivElement>;
}) {
  const imageRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const isVideo = src.endsWith('.mp4');

  useEffect(() => {
    const updateScroll = () => {
      if (!imageRef.current || !containerRef.current) return;
      
      const rect = imageRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const start = windowHeight;
      const end = -rect.height;
      const current = rect.top;
      
      const progress = 1 - (current - end) / (start - end);
      const clampedProgress = Math.max(0, Math.min(1, progress));
      
      setScrollProgress(clampedProgress);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', updateScroll, { passive: true });
      updateScroll();
      
      return () => container.removeEventListener('scroll', updateScroll);
    }
  }, [containerRef]);

  const scale = 1.2 - scrollProgress * 0.4 + (scrollProgress > 0.7 ? (scrollProgress - 0.7) * 0.4 : 0);
  const opacity = scrollProgress < 0.2 ? scrollProgress * 5 : scrollProgress > 0.8 ? (1 - scrollProgress) * 5 : 1;
  const y = (scrollProgress - 0.5) * 200;
  const overlayOpacity = 0.3 + scrollProgress * 0.4;

  return (
    <div ref={imageRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        animate={{ 
          scale,
          y
        }}
        className="absolute inset-0 w-full h-full"
        transition={{ duration: 0, ease: "linear" }}
      >
        {isVideo ? (
          <video
            src={src}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
          />
        ) : (
          <ImageWithFallback
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
          />
        )}
      </motion.div>

      <motion.div
        animate={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-black"
        transition={{ duration: 0, ease: "linear" }}
      />

      <motion.div
        animate={{ opacity }}
        className="relative z-10"
        transition={{ duration: 0, ease: "linear" }}
      >
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <div className="flex items-center gap-2">
            <motion.div 
              animate={{ scaleX: scrollProgress }}
              className="h-px w-8 bg-white/30 origin-left"
              transition={{ duration: 0, ease: "linear" }}
            />
            <span className="text-white/50 font-['DM_Mono'] text-xs">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <motion.div 
              animate={{ scaleX: scrollProgress }}
              className="h-px w-8 bg-white/30 origin-right"
              transition={{ duration: 0, ease: "linear" }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectDetail({ project, isOpen, onClose }: ProjectDetailProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const [heroY, setHeroY] = useState(0);
  const [heroOpacity, setHeroOpacity] = useState(1);

  // Initialize Lenis
  useEffect(() => {
    if (!isOpen || !containerRef.current) return;

    document.body.style.overflow = "hidden";

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
      wrapper: containerRef.current,
      content: containerRef.current,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    // Handle scroll events
    lenis.on("scroll", ({ scroll }: { scroll: number }) => {
      const windowHeight = window.innerHeight;
      const progress = Math.min(scroll / (windowHeight * 0.3), 1);
      setHeroY(progress * 200);
      setHeroOpacity(1 - progress);
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!project) return null;

  const isHeroVideo = project.image.endsWith('.mp4');

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-[#0a0a0a] overflow-y-auto"
          style={{ 
            height: '100vh',
            width: '100vw',
            overflowY: 'auto', 
            backgroundColor: '#0a0a0a'
          }}
        >
          {/* Fixed Navigation */}
          <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 mix-blend-difference"
          >
            <div className="max-w-[1400px] mx-auto px-8 h-20 flex items-center justify-between">
              <motion.button
                whileHover={{ x: -5 }}
                onClick={onClose}
                className="flex items-center gap-2 text-white group"
              >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <span className="font-semibold">Back</span>
              </motion.button>

              <p className="text-white font-['DM_Mono'] text-sm">({project.year})</p>

              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-[#ff442b] hover:text-white transition-colors"
              >
                <X size={20} />
              </motion.button>
            </div>
          </motion.nav>

          {/* Hero Section with Parallax */}
          <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <motion.div
              style={{ 
                y: heroY,
                opacity: heroOpacity
              }}
              transition={{ duration: 0, ease: "linear" }}
              className="absolute inset-0"
            >
              {isHeroVideo ? (
                <video
                  src={project.image}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                />
              ) : (
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0a0a0a]" />
            </motion.div>

            {/* Hero Title */}
            <div className="relative z-10 max-w-[1400px] mx-auto px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {/* Tags */}
                <div className="flex justify-center gap-3 mb-8">
                  {project.tags.map((tag, index) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Project Title */}
                <h1 
                  className="md:text-8xl lg:text-9xl font-bold tracking-tight leading-none text-white mb-8"
                  style={{
                    fontSize: '120px',
                    fontWeight: 700,
                  }}
                >
                  {project.title}
                </h1>
              </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white"
            >
              <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
                <div className="w-1.5 h-1.5 bg-white rounded-full" />
              </div>
            </motion.div>
          </section>

          {/* Project Info Bar */}
         <section className="top-20 z-40 bg-[#0a0a0a]/95 backdrop-blur-md border-y border-white/10 py-8">
            <div className="max-w-[1400px] mx-auto px-8">
              <div className="flex flex-wrap justify-between gap-8">
                <div className="flex-1 min-w-[150px]">
                  <p className="text-xs text-[#ff442b] mb-2 uppercase tracking-widest font-semibold">
                    // Client
                  </p>
                  <p className="text-white font-semibold text-lg">{project.client}</p>
                </div>
                <div className="flex-1 min-w-[150px]">
                  <p className="text-xs text-[#ff442b] mb-2 uppercase tracking-widest font-semibold">
                    // Duration
                  </p>
                  <p className="text-white font-semibold text-lg">{project.duration}</p>
                </div>
                <div className="flex-1 min-w-[150px]">
                  <p className="text-xs text-[#ff442b] mb-2 uppercase tracking-widest font-semibold">
                    // Year
                  </p>
                  <p className="text-white font-semibold text-lg">{project.year}</p>
                </div>
                <div className="flex-1 min-w-[150px]">
                  <p className="text-xs text-[#ff442b] mb-2 uppercase tracking-widest font-semibold">
                    // Role
                  </p>
                  <p className="text-white font-semibold text-lg">{project.role}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Overview Section */}
          <section className="py-32 bg-[#0a0a0a]">
            <div className="max-w-[1400px] mx-auto px-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl"
              >
                <h2 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-light leading-tight text-white mb-12"
                  style={{
                    fontSize: '56px',
                    fontWeight: 700,
                  }}
                >
                  Project Overview
                </h2>
                <p className="text-2xl md:text-3xl text-white/70 leading-relaxed">
                  {project.detailedDescription}
                </p>
              </motion.div>
            </div>
          </section>

          {/* Typography & Color Palette Showcase */}
          {project.galleryImages && project.galleryImages.length > 5 && (
            <section className="py-0">
              <div className="relative h-[80vh]">
                {project.galleryImages[4].endsWith('.mp4') ? (
                  <video
                    src={project.galleryImages[4]}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <ImageWithFallback
                    src={project.galleryImages[4]}
                    alt={`${project.title} - Design System`}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </section>
          )}

          {/* Results Section */}
          {project.results && project.results.length > 0 && (
            <section className="relative">
              {project.results.map((result, index) => (
                <ResultImage 
                  key={index} 
                  src={project.galleryImages?.[index] || project.image} 
                  alt={`Result ${index + 1}`} 
                  index={index} 
                  total={project.results.length} 
                  containerRef={containerRef} 
                />
              ))}
            </section>
          )}

          {/* Technologies Section */}
          {project.technologies && project.technologies.length > 0 && (
            <section className="py-32 bg-[#0a0a0a]">
              <div className="max-w-[1400px] mx-auto px-8">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-xs text-[#ff442b] mb-12 uppercase tracking-widest font-semibold"
                  style={{
                    fontSize: '14px',
                    fontWeight: 600,
                  }}
                >
                  // Technologies
                </motion.h2>
                <div className="flex flex-wrap gap-6">
                  {project.technologies.map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, duration: 0.5 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="border border-white/20 rounded-2xl px-8 py-6 text-center hover:border-[#ff442b] hover:bg-[#ff442b]/10 transition-all cursor-pointer group"
                    >
                      <p className="text-white font-['DM_Mono'] text-lg group-hover:text-[#ff442b] transition-colors whitespace-nowrap">
                        {tech}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Testimonial Section */}
          {project.testimonial && (
            <section className="py-32 bg-[#0a0a0a] relative overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 text-[400px] text-white font-bold">"</div>
              </div>
              <div className="max-w-[1200px] mx-auto px-8 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-center"
                >
                  <p className="text-3xl md:text-5xl font-semibold tracking-[-1px] leading-[1.3] text-white mb-12 italic">
                    "{project.testimonial.quote}"
                  </p>
                  <div className="flex items-center justify-center gap-6">
                    <div className="h-px w-16 bg-[#ff442b]" />
                    <div>
                      <p className="text-white font-semibold text-xl">
                        {project.testimonial.author}
                      </p>
                      <p className="text-white/50 text-sm">{project.testimonial.role}</p>
                    </div>
                    <div className="h-px w-16 bg-[#ff442b]" />
                  </div>
                </motion.div>
              </div>
            </section>
          )}

          {/* CTA Section */}
          <section className="py-32 bg-[#0a0a0a] text-center border-t border-white/10">
            <div className="max-w-[1000px] mx-auto px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-[48px] md:text-[72px] font-bold tracking-[-3px] leading-[1.1] text-white mb-12">
                  Interested in working together?
                </h2>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-[#ff442b] text-white px-12 py-6 rounded-full text-xl font-semibold hover:bg-white hover:text-[#0a0a0a] transition-all group"
                  style={{
                    padding: '24px',
                  }}
                >
                  Let's Talk
                  <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.button>
              </motion.div>
            </div>
          </section>

          {/* Footer */}
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}