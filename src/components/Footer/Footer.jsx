import React from "react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";


const Footer = () => {
  return (
    <footer className="py-28 bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
          {/* first section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">The Education Journey</h1>
            <p className="text-dark2">
              Newton Coaching Academy is dedicated to shaping young minds and
              building a strong foundation for academic excellence. From
              fundamental concepts to advanced problem-solving, we provide a
              comprehensive learning experience designed to help students excel
              in their studies, boost their confidence, and achieve their
              academic goals.
            </p>
          </div>
          {/* second section */}
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Courses</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Mathematics
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Science
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Social Science
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    English & Bengali
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="space-y-4">
              <h1 className="text-2xl font-bold">Links</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Home
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Services
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    About
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Contact
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
          {/* third section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Get In Touch</h1>
            <div className="flex items-center">
              {/* <input
                type="text"
                placeholder="Enter your email"
                className="p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none placeholder:text-dark2"
              />
              <button className="bg-primary text-white font-semibold py-4 px-6 rounded-e-xl">
                Go
              </button> */}
              <div>Call Now</div>
                
            </div>
            <div>+91 8787698760 (Krishna Das)</div>
            <div>+91 8787784800 (Sayon Sen)</div>
            <div>+91 7629870348 (Bappa Das)</div>
            {/* social icons */}
            <div className="flex space-x-6 py-3">
              <a href="https://wa.me/+918787698760">
                <FaWhatsapp className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="https://endearing-vacherin-08776b.netlify.app/">
                <TbWorldWww className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
      <div
      style={{
        textAlign: "center",
        padding: "20px",
        fontSize: "14px",
        color: "#666",
        backgroundColor: "#f8f8f8",
      }}
    >
      © {new Date().getFullYear()} Newton Coaching Academy. All rights reserved.
    </div>
    </footer>
  );
};

export default Footer;
