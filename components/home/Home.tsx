"use client"
import React from "react"

import { Navbar } from "../navbar"
import { Footer } from "../Footer"

import { About } from "./AboutSection"
import { Works } from "./Works"
import Image from "next/image"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import TextPlugin from "gsap/TextPlugin"
import { Button } from "@heroui/button"

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
    gsap.to(".home-hero-content", {
      scrollTrigger: {
        trigger: ".home-hero-about",
        scrub: true,
      },
      scale: 2,
      y: 100,
      opacity: 0,
    })
  })
  return (
    <div className="relative bg-white  overflow-x-hidden no-scrollbar">
      <Navbar />

      <div className="overflow-hidden md:h-screen h-[100vh]  w-full flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full md:h-screen h-[100vh] z-[1] bg-[#00000028]" />
        <div className="fixed top-0 left-0 w-full md:h-screen h-[100vh] hero-img_ overflow-hidden home-hero-image">
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
        <div className="relative home-hero-content z-[1] text-white text-center reveal-block">
          {/* <p className="text-xs tracking-[2px] mb-3">Cr8ive</p> */}

          <p className="md:text-[12px] text-[16px] tracking-[2px]  capitalize">
            Where ideas races to life for the world&apos;s ambitious brands.
          </p>
          <p className="mt-3 md:text-6xl md:tracking-[20px] text-2xl tracking-[10px] text-[#ffffff] -mr-[20px]">
            RE-IMAGINED
          </p>
        </div>
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
