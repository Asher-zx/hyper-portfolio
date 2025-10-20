import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink, Calendar, User, Award, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { ScrollArea } from "./ui/scroll-area";

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

export default function ProjectDetail({ project, isOpen, onClose }: ProjectDetailProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 flex items-center justify-center"
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl w-full h-full max-w-7xl border border-white/20 overflow-hidden">
              {/* Header */}
              <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-[#c4bfbf] px-8 py-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="font-['DM_Mono'] text-[#4f4a4a]">({project.year})</span>
                  <h2 className="text-3xl font-semibold text-[#151414]">{project.title}</h2>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="w-12 h-12 bg-[#ff442b] rounded-full flex items-center justify-center text-white hover:bg-[#ff442b]/90 transition-colors"
                >
                  <X size={24} />
                </motion.button>
              </div>

              {/* Content */}
              <ScrollArea className="h-[calc(100%-88px)]">
                <div className="p-8 space-y-12">
                  {/* Hero Image */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="relative w-full h-[500px] rounded-2xl overflow-hidden"
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </motion.div>

                  {/* Project Info Cards */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                  >
                    {project.client && (
                      <div className="bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm rounded-2xl p-6 border border-[#c4bfbf]">
                        <User className="text-[#ff442b] mb-3" size={24} />
                        <h4 className="text-sm text-[#4f4a4a] mb-1">Client</h4>
                        <p className="font-semibold text-[#151414]">{project.client}</p>
                      </div>
                    )}
                    {project.duration && (
                      <div className="bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm rounded-2xl p-6 border border-[#c4bfbf]">
                        <Calendar className="text-[#ff442b] mb-3" size={24} />
                        <h4 className="text-sm text-[#4f4a4a] mb-1">Duration</h4>
                        <p className="font-semibold text-[#151414]">{project.duration}</p>
                      </div>
                    )}
                    {project.role && (
                      <div className="bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm rounded-2xl p-6 border border-[#c4bfbf]">
                        <Award className="text-[#ff442b] mb-3" size={24} />
                        <h4 className="text-sm text-[#4f4a4a] mb-1">My Role</h4>
                        <p className="font-semibold text-[#151414]">{project.role}</p>
                      </div>
                    )}
                  </motion.div>

                  {/* Tags */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap gap-3"
                  >
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="px-4 py-2 bg-white/50 backdrop-blur-sm border-[#c4bfbf] hover:border-[#ff442b] hover:text-[#ff442b] transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </motion.div>

                  {/* Detailed Description */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-gradient-to-br from-[#ff442b]/5 to-transparent backdrop-blur-sm rounded-2xl p-8 border border-[#ff442b]/20"
                  >
                    <h3 className="text-2xl font-semibold text-[#151414] mb-4 flex items-center gap-2">
                      <span className="text-[#ff442b]">//</span>
                      About The Project
                    </h3>
                    <p className="text-[#4f4a4a] leading-relaxed text-lg">
                      {project.detailedDescription || project.description}
                    </p>
                  </motion.div>

                  {/* Challenge & Solution */}
                  {(project.challenge || project.solution) && (
                    <div className="grid md:grid-cols-2 gap-6">
                      {project.challenge && (
                        <motion.div
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 }}
                          className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-[#c4bfbf]"
                        >
                          <h3 className="text-xl font-semibold text-[#151414] mb-4">The Challenge</h3>
                          <p className="text-[#4f4a4a] leading-relaxed">{project.challenge}</p>
                        </motion.div>
                      )}
                      {project.solution && (
                        <motion.div
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 }}
                          className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-[#c4bfbf]"
                        >
                          <h3 className="text-xl font-semibold text-[#151414] mb-4">The Solution</h3>
                          <p className="text-[#4f4a4a] leading-relaxed">{project.solution}</p>
                        </motion.div>
                      )}
                    </div>
                  )}

                  {/* Results */}
                  {project.results && project.results.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="bg-gradient-to-br from-green-50/80 to-transparent backdrop-blur-sm rounded-2xl p-8 border border-green-200/50"
                    >
                      <h3 className="text-2xl font-semibold text-[#151414] mb-6 flex items-center gap-2">
                        <span className="text-[#ff442b]">//</span>
                        Key Results
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {project.results.map((result, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 + index * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={20} />
                            <p className="text-[#4f4a4a]">{result}</p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Technologies */}
                  {project.technologies && project.technologies.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-[#c4bfbf]"
                    >
                      <h3 className="text-2xl font-semibold text-[#151414] mb-6 flex items-center gap-2">
                        <span className="text-[#ff442b]">//</span>
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-[#151414] text-white rounded-full font-['DM_Mono'] text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Gallery */}
                  {project.galleryImages && project.galleryImages.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                    >
                      <h3 className="text-2xl font-semibold text-[#151414] mb-6 flex items-center gap-2">
                        <span className="text-[#ff442b]">//</span>
                        Project Gallery
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        {project.galleryImages.map((image, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1 + index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="relative h-80 rounded-2xl overflow-hidden border border-[#c4bfbf] cursor-pointer"
                          >
                            <ImageWithFallback
                              src={image}
                              alt={`${project.title} gallery ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Testimonial */}
                  {project.testimonial && (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.1 }}
                      className="bg-gradient-to-br from-[#ff442b]/10 to-transparent backdrop-blur-sm rounded-2xl p-10 border border-[#ff442b]/30"
                    >
                      <div className="flex items-start gap-4 mb-6">
                        <div className="text-6xl text-[#ff442b] leading-none">"</div>
                        <div>
                          <p className="text-xl text-[#151414] italic mb-4">
                            {project.testimonial.quote}
                          </p>
                          <div className="flex items-center gap-3">
                            <div className="h-px flex-1 bg-[#c4bfbf]" />
                            <div className="text-right">
                              <p className="font-semibold text-[#151414]">{project.testimonial.author}</p>
                              <p className="text-sm text-[#4f4a4a]">{project.testimonial.role}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="flex justify-center pt-8"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#ff442b] text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-[#ff442b]/90 transition-colors"
                    >
                      View Live Project
                      <ExternalLink size={20} />
                    </motion.button>
                  </motion.div>
                </div>
              </ScrollArea>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
