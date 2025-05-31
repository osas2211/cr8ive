import React from "react";

import { Navbar } from "../navbar";
import { Footer } from "../Footer";

import { About } from "./AboutSection";
import { Works } from "./Works";

export const Home = () => {
  return (
    <div className="relative bg-white  overflow-x-hidden no-scrollbar">
      <Navbar />

      <div className="overflow-hidden h-screen  w-full flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-screen z-[1] bg-[#00000048]" />
        <div className="absolute top-0 left-0 w-full h-screen hero-img_ overflow-hidden">
          {/* <Image
            src="/hero-img.jpg"
            alt="Cr8ive Hero Image"
            className="w-full h-full"
            fill
            priority
          /> */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full !h-screen object-cover object-top"
          >
            <source src="/hero-vid.mp4" />
          </video>
        </div>
        <p className="relative z-[2] text-white text-center md:text-[14px] text-[16px] tracking-[2px] reveal-block">
          Where ideas races to life for the world&apos;s ambitious brands.
        </p>
      </div>

      <div className="min-h-screen">
        <About />
        <Works />
        <Footer />
      </div>
    </div>
  );
};
