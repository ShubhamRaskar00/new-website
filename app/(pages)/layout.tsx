"use client";

import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Suspense } from "react";
import Loader from "@/components/loader"

function LandingLayout({ children }: { children: React.ReactNode }) {
  
  return (
    <div>
      <ScrollArea className="h-screen">
        <div className="mx-auto max-w-screen-xl w-full h-full md:p-4 sm:p-2">
          <NavBar />
          <Suspense fallback={<Loader />}>{children}</Suspense>
        </div>
        <Footer />
      </ScrollArea>
    </div>
  );
}

export default LandingLayout;
