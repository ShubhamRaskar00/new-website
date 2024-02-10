"use client";
import Image from "next/image";
import { motion } from "framer-motion";

function AboutPage() {
  return (
    <div className="h-[67vh]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      ><h1 className="text-3xl text-medium mb-4">About Us</h1></motion.div>
      <div className="flex justify-between flex-col md:flex-row">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative h-48 w-48 overflow-hidden rounded">
            <Image fill alt="Author image" src="/shubham.png" />
          </div>
        </motion.div>
        <div className=" md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl py-3 bold capitalize">Heading</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
              consequatur, accusantium ratione in, et molestias facere rerum
              praesentium, unde nostrum illo recusandae. Dolorum.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
