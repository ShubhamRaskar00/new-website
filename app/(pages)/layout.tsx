"use client";

import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, useScroll } from "framer-motion"

function LandingLayout({ children }: { children: React.ReactNode }) {
    const { scrollYProgress } = useScroll();
    // <motion.div style={{ scaleX: scrollYProgress }} className="progress-bar" />
  return (
    <div>
      <ScrollArea className="h-screen">
        <div className="mx-auto max-w-screen-xl w-full h-full md:p-4 sm:p-2">
          <NavBar />
          
          {children}
        </div>
        <Footer />
      </ScrollArea>
    </div>
  );
}

export default LandingLayout;
