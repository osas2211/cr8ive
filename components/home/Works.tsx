"use client"
import { useTextReveal } from "@/hooks/useTextReveal"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Link from "next/link"
import React, { useEffect, useRef, useState } from "react"
import { BsArrowRightShort } from "react-icons/bs"
import SelectedWorks from "./SelectedWorks"
import { Lookbook } from "./Gallery"

export const Works = () => {
  const { scope: textRevealScope } = useTextReveal(".work-text-reveal", false)
  const { scope: textRevealScopeLg } = useTextReveal(
    ".work-text-reveal-lg",
    false
  )

  const scope: React.Ref<HTMLDivElement | null> = useRef(null)
  const timeline = useRef(gsap.timeline({ paused: true }))
  const [count, setCount] = useState(0) // Start at 1%
  useEffect(() => {
    // const progress = Number(tl.current.progress() * 100).toFixed(0)
    // setCount(Number(progress))

    const duration = 5000 // Total duration in ms (5 seconds)
    const interval = 50 // Update every 50ms
    const increment = 300 / (duration / interval) // Amount to increment per interval

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev + increment >= 100) {
          timeline.current.play()
          clearInterval(timer) // Stop the timer once we reach 100
          return 100
        }
        return prev + increment
      })
    }, interval)

    return () => clearInterval(timer) // Cleanup on unmount
  }, [])

  useGSAP(
    () => {
      timeline.current

        .fromTo(
          "#selected-works-left",
          { x: "-50%" },
          {
            ease: "linear",
            x: 0,
            duration: 2,
            scrollTrigger: {
              trigger: "#about-keep-scrolling",
              scrub: true,
              end: window?.matchMedia("(max-width: 760px)")?.matches
                ? "+=1500px"
                : "+=2200px",
            },
          }
        )
        .fromTo(
          "#selected-works-right",
          { x: "50%" },
          {
            ease: "linear",
            x: 0,
            duration: 2,
            scrollTrigger: {
              trigger: "#about-keep-scrolling",
              scrub: true,
              end: window?.matchMedia("(max-width: 760px)")?.matches
                ? "+=1500px"
                : "+=2200px",
            },
          }
        )
        .fromTo(
          scope.current?.querySelectorAll(".selected-work-link") as never,
          { x: "30%", opacity: 0.7 },
          {
            ease: "power4.out",
            x: 0,
            duration: 0.8,
            stagger: 0.2,
            opacity: 1,
            scrollTrigger: {
              trigger: scope.current?.querySelectorAll("#selected-work-links"),
              scrub: true,
              end: window?.matchMedia("(max-width: 760px)")?.matches
                ? "+=1500px"
                : "+=3800px",
            },
          }
        )
    },
    { scope }
  )
  return (
    <>
      <div className="bg-[#f9faf7] overflow-x-hidden" ref={scope as any}>
        <div
          className="py-[40px] pb-[50px] md:pb-[100px] w-full flex flex-col items-center justify-center md:text-[15vw] text-[16vw] leading-[105%] tracking-[-1vw] uppercase will-change-scroll"
          id="selected-works-text"
        >
          <h2 id="selected-works-left">Selected</h2>
          <div id="selected-works-right" className="flex gap-4 items-baseline">
            <div className="relative max-w-[326px] md:max-w-[326px]">
              <video
                className="w-[100%] h-[50px] md:w-[100%] md:h-[201px] lg:h-[201px] object-cover rounded-lg"
                autoPlay
                loop
                muted
              >
                <source src="/selected-works-vid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black/70 to-black/0 rounded-xl"></div> */}
            </div>
            <h2 className="">works</h2>
          </div>
        </div>
        <Lookbook />
      </div>
    </>
  )
}
