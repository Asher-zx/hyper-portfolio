import Hero from "./components/Hero";
import WhatIDo from "./components/WhatIDo";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Trust from "./components/Trust";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      <Hero />
      <WhatIDo />
      <Services />
      <Projects />
      <Testimonials />
      <Trust />
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}