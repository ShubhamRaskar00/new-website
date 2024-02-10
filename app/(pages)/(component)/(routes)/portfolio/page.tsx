"use client";
import Image from "next/image";
import { motion } from "framer-motion";

function PortPolio() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl text-medium mb-4">Portfolio</h1>
      </motion.div>
      <div className="flex flex-wrap flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="cart border shadow rounded w-48 cursor-pointer">
            <div className="relative h-44 overflow-hidden">
              <Image fill alt="Author image" src="/shubham.png" />
            </div>
            <div className="p-4">
              <h3 className="bold text-2xl truncate">heading</h3>
              <p className="truncate">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laudantium commodi mollitia recusandae provident tempore ad
                neque dignissimos consectetur eligendi praesentium atque
                repellendus esse doloremque quod eum placeat, ab impedit libero
                optio et sequi quos. Explicabo beatae, soluta fugiat sapiente
                libero nam tenetur itaque.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default PortPolio;
