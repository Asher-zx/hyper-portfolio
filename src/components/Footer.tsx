import { motion } from "motion/react";
import { Mail, Phone, Github, Linkedin, Twitter, Instagram, Send } from "lucide-react";
import { RiTwitterXLine } from "react-icons/ri";
import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { toast } from "sonner@2.0.3";
import footerImage from "../assets/footerpic.png";

export default function Footer() {
  const scrollingText = "Reach Out -";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Message sent successfully! I'll get back to you soon.", {
      duration: 4000,
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <footer id="contact" className="relative bg-[#121111] min-h-screen overflow-hidden">
      <img 
        src={footerImage} 
        alt="Hero background" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40" />

      {/* Close Button */}
      <motion.button
        whileHover={{ scale: 1.1, rotate: 90 }}
        className="absolute top-5 right-5 w-10 h-10 bg-white rounded-full flex items-center justify-center z-10"
      >
        <span className="text-2xl">×</span>
      </motion.button>

      {/* Scrolling Text */}
      <div className="absolute left-0 right-0 top-32 overflow-hidden mix-blend-exclusion pointer-events-none">
        <motion.div
          animate={{ x: [0, -1640] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex whitespace-nowrap"
        >
          {[...Array(5)].map((_, i) => (
            <h1
              key={i}
              className="text-[261px] font-medium tracking-[-11.2px] leading-[220px] text-white mr-6"
            >
              {scrollingText}
            </h1>
          ))}
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-5 py-24">
        <div className="flex gap-12 items-start min-h-screen pt-64">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 max-w-2xl"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[48px] font-semibold text-white mb-2"
              >
                Let's Work Together
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-white/70 mb-8"
              >
                Fill out the form below and I'll get back to you within 24 hours.
              </motion.p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-white/90 mb-2 font-semibold">
                    Your Name *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[#ff442b] focus:ring-[#ff442b] h-12"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label className="block text-white/90 mb-2 font-semibold">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[#ff442b] focus:ring-[#ff442b] h-12"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <label className="block text-white/90 mb-2 font-semibold">
                    Subject
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project inquiry"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[#ff442b] focus:ring-[#ff442b] h-12"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <label className="block text-white/90 mb-2 font-semibold">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project..."
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[#ff442b] focus:ring-[#ff442b] min-h-[150px] resize-none"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#ff442b] hover:bg-[#ff442b]/90 text-white h-14 text-lg font-semibold rounded-full group"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message
                        <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    )}
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 max-w-md pt-24"
          >
            <div className="space-y-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h4 className="text-white/60 mb-6 flex items-center gap-2">
                  <span className="text-[#ff442b]">//</span>
                  Contact Information
                </h4>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4 text-white bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
              >
                <Github size={24} className="text-[#ff442b] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Github</p>
                  <a 
                    className="text-white/70 hover:text-[#ff442b] transition-colors" 
                    href="https://github.com/Asher-zx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Asher-zx
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-4 text-white bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
              >
                <Mail size={24} className="text-[#ff442b] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <a href="mailto:zhixuan.wang@hyperisland.se" className="text-white/70 hover:text-[#ff442b] transition-colors">
                    zhixuan.wang@hyperisland.se
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-start gap-4 text-white bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
              >
                <Phone size={24} className="text-[#ff442b] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Phone</p>
                  <a href="tel:+493012345678" className="text-white/70 hover:text-[#ff442b] transition-colors">
                    +46 76-591 36 11
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h4 className="text-white/60 mb-4 flex items-center gap-2">
                <span className="text-[#ff442b]">//</span>
                Follow Me
              </h4>
              <div className="flex gap-4">
                {[
                  { 
                    Icon: Linkedin, 
                    label: "Linkedin", 
                    url: "https://www.linkedin.com/in/asher-wangzx/" 
                  },
                  { 
                    Icon: RiTwitterXLine, 
                    label: "X", 
                    url: "https://x.com/asherwang1128" 
                  },
                  { 
                    Icon: Github, 
                    label: "GitHub", 
                    url: "https://github.com/Asher-zx" 
                  },
                ].map(({ Icon, label, url }) => (
                  <motion.a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[#ff442b] hover:border-[#ff442b] transition-all group"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="max-w-[1400px] mx-auto px-5">
          <div className="border-t border-white/10 pt-6 flex justify-between items-center text-white/50 text-sm">
            <p>© 2025 Asher Zhixuan Wang. All rights reserved.</p>
            <p>Designed & Developed with ❤️</p>
          </div>
        </div>
      </div>
    </footer>
  );
}