"use client"
import React from "react"

import { Navbar } from "../navbar"
import { Footer } from "../Footer"

import { About } from "./AboutSection"
import { Works } from "./Works"
import Image from "next/image"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export const Home = () => {
  useGSAP(() => {
    const tl = gsap.timeline({ paused: false })
    tl.to(".home-hero-image", {
      scrollTrigger: {
        trigger: ".home-hero-about",
        scrub: true,
      },
      scale: 1.5,
    })
  })
  return (
    <div className="relative bg-white  overflow-x-hidden no-scrollbar">
      <Navbar />

      <div className="overflow-hidden h-screen  w-full flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-screen z-[1] bg-[#00000028]" />
        <div className="fixed top-0 left-0 w-full h-screen hero-img_ overflow-hidden home-hero-image">
          <Image
            src="/assets/img4.jpeg"
            alt="Cr8ive Hero Image"
            className="w-full h-full"
            fill
            priority
          />
          {/* <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full !h-screen object-cover object-top"
          >
            <source src="/hero-vid.mp4" />
          </video> */}
        </div>
        <p className="relative z-[2] text-white text-center md:text-[14px] text-[16px] tracking-[2px] reveal-block">
          Where ideas races to life for the world&apos;s ambitious brands.
        </p>
      </div>

      <div className="min-h-screen !bg-black relative">
        <div className="home-hero-about">
          <About />
        </div>
        <Works />
        <Footer />
      </div>
    </div>
  )
}
