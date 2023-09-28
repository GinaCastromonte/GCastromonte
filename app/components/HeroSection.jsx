"use client";
import React ,{useState}from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";


const HeroSection = () => {
  const [hireMeHovered, setHireMeHovered] = useState(false)

const scrollToContact = () =>{
  const contactSection = document.getElementById("contact")
  if(contactSection){
    contactSection.scrollIntoView({behavior:"smooth"})
  }
}

const handleDownloadCV = () => {
  const resumeUrl = "/resume.pdf"
  const link = document.createElement("a")
  link.href = resumeUrl
  link.download = "resume.pdf"
  link.click()
}

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="text-white mb-4 text-4xl  sm:text-5lg lg:text-6xl font-extrabold">
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 ">
              Hello, I&apos;m
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                " Gina Castromonte",
                1000,
                "a Software Engineer",
                1000,
                "a Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Welcome to my portfolio site, where you can explore my journey as a
            Software Engineer and Developer, showcasing my proficiency in a wide
            range of web development technologies.
          </p>
          <div>
            <button
              onClick={scrollToContact}
              className={`px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-600 via-blue-400 to-blue-300 hover:bg-slate-200 text-white ${
                hireMeHovered ? "bg-yellow-500" : ""
              }`}
              onMouseEnter={() => setHireMeHovered(true)}
              onMouseLeave={() => setHireMeHovered(false)}
            >
              Hire Me
            </button>
            <button
              onClick={handleDownloadCV}
              className={`px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-600 via-blue-400 to-blue-300 hover:bg-slate-800 text-white mt-3 ${
                hireMeHovered ? "bg-green-500" : ""
              }`}
              onMouseEnter={() => setHireMeHovered(true)}
              onMouseLeave={() => setHireMeHovered(false)}
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-4  lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/gina.png"
              alt="hero-image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-[65%] sm:top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
