"use client "

import MainPage from "@/components/main-page";
import AboutPage from "./(component)/(routes)/about/page";
import ContactPage from "./(component)/(routes)/contact/page";
import PortPolio from "./(component)/(routes)/portfolio/page";

function LandingPage() {
  return (
    <div>
      <MainPage />
      <AboutPage />
      <PortPolio />
      <ContactPage />
    </div>
  );
}

export default LandingPage;
