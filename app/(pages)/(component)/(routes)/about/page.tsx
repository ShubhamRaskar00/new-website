"use client";
import Image from "next/image";

function AboutPage() {
  return (
    <div className="h-[67vh]">
      <h1 className="text-3xl text-medium mb-4">About Us</h1>
      <div className="flex justify-between flex-col md:flex-row">
        <div className="relative h-48 w-48 overflow-hidden rounded">
          <Image fill alt="Author image" src="/shubham.png" />
        </div>
        <div className=" md:w-1/2">
          <h2 className="text-2xl py-3 bold capitalize">
            Heading 
          </h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut consequatur, accusantium ratione in, et molestias facere rerum praesentium, unde nostrum illo recusandae. Dolorum.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
