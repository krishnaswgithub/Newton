import React from "react";
import { motion } from "framer-motion";
import HeroPng from "../../assets/Newton-logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] shadow-lg z-50">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-4 flex justify-between items-center px-6"
      >
        {/* Logo Section (Left) */}
        <motion.img
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
          src={HeroPng}
          alt="Newton Coaching Logo"
          className="w-[50px] xl:w-[70px] drop-shadow-lg rounded-full"
        />

        {/* Title Aligned to the Right */}
        <h1 className="font-bold text-2xl xl:text-3xl bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent font-[Poppins] text-right">
          Newton Coaching Academy
        </h1>
      </motion.div>
    </nav>
  );
};

export default Navbar;
