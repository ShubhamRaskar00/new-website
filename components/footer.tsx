"use client"

import Link from "next/link";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
function Footer() {
  const currentYear = new Date().getFullYear();
  const social = [
    {
      label: "instagram",
      icon: Instagram,
      link: "https://www.instagram.com/",
    },
    {
      label: "facebook",
      icon: Facebook,
      link: "https://www.facebook.com/",
    },
    {
      label: "linkedin",
      icon: Linkedin,
      link: "https://www.facebook.com/",
    },
  ];
  return (
    <div className="bg-black text-white ">
      <div className="mx-auto max-w-screen-xl w-full h-full md:py-14 sm:py-12 md:px-4 flex items-center justify-between">
        <div> All copy right received by shubhamraskar.in {currentYear}</div>
        <div className="flex items-center sm:gap-x-4 gap-x-2 flex-wrap	">
          {social.map((item) => (
            <Link href={item.link} key={item.label} className="">
              <item.icon className={cn("text-white", item.label)} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
