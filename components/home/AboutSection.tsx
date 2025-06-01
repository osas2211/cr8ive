"use client"
import Link from "next/link"
import React from "react"

import { useTextReveal } from "@/hooks/useTextReveal"

export const About = () => {
  const { scope } = useTextReveal(".about-text-reveal", true)
  const {} = useTextReveal(".about-text-reveal-2", true)
  const { scope: smallScope } = useTextReveal(".about-text-reveal-small", true)

  return (
    <div
      ref={scope as any}
      className="w-full md:min-h-[70vh] my-0 bg-[#f9faf7] md:px-[40px] px-5 2xl:py-[100] md:py-[100] py-[70px]  *:text-black"
    >
      <div className="uppercase md:text-sm text-[10px] md:sticky md:top-[70px] 2xl:min-w-[640.5px] md:min-w-[30%] md:-mb-[60px] mb-[30px] about-sticky *:text-black *:leading-[14px]">
        <p className="overflow-hidden">
          <span className="text-black about-text-reveal">
            WE BELIEVE IN THE POWER OF DESIGN
          </span>
        </p>
        <p className="overflow-hidden">
          <span className="about-text-reveal">
            AND ITS ABILITY TO DEFINE AND
          </span>
        </p>
        <p className="overflow-hidden">
          <span className="about-text-reveal">TRANSFORM BRANDS.</span>
        </p>
      </div>
      <div className="flex">
        <div className="2xl:min-w-[640.5px] md:min-w-[30%]" />
        <div className="2xl:text-[40px] md:text-[32px] text-[19px] relative about-text md:w-[70%] w-full">
          <div className="md:block">
            <h2 className="overflow-hidden">
              <span className="about-text-reveal">
                — Its our commitment to excellence that
              </span>
            </h2>
            <h2 className="overflow-hidden">
              <span className="about-text-reveal">
                distinguishes us. Our expertise spans the realms of
              </span>
            </h2>
            <h2 className="overflow-hidden">
              <span className="about-text-reveal">
                branding, UI/UX design, and development, where we
              </span>
            </h2>
            <h2 className="overflow-hidden">
              <span className="about-text-reveal">
                employ a strategic approach. We seamlessly
              </span>
            </h2>
            <h2 className="overflow-hidden">
              <span className="about-text-reveal">
                coordinate across various disciplines and services to
              </span>
            </h2>
            <h2 className="overflow-hidden">
              <span className="about-text-reveal">
                craft exceptional products.
              </span>
            </h2>
          </div>
          <div className="md:hidden hidden">
            <h2 className="overflow-hidden">
              <span className="about-text-reveal">
                — Its our commitment to excellence that distinguishes us. Our
                expertise
              </span>
            </h2>
            <h2 className="overflow-hidden">
              <span className="about-text-reveal">
                spans the realms of branding, UI/UX design, and development,
                where we
              </span>
            </h2>
            <h2 className="overflow-hidden">
              <span className="about-text-reveal">
                employ a strategic approach. We seamlessly coordinate across
                various
              </span>
            </h2>
            <h2 className="overflow-hidden">
              <span className="about-text-reveal">
                disciplines and services to craft exceptional products.
              </span>
            </h2>
          </div>
          <div className="2xl:mt-[50px] md:mt-[40px] mt-7 mb-[30px]">
            <div className="md:block hidden">
              <h2 className="overflow-hidden">
                <span className="about-text-reveal-2">
                  Our mission is to empower global enterprises to
                </span>
              </h2>
              <h2 className="overflow-hidden about-last-text">
                <span className="about-text-reveal-2">
                  unlock their maximum capabilities.
                </span>
              </h2>
            </div>
            <div className="md:hidden hidden">
              <h2 className="overflow-hidden">
                <span className="about-text-reveal-2">
                  Our mission is to empower global
                </span>
              </h2>
              <h2 className="overflow-hidden about-last-text">
                <span className="about-text-reveal-2">
                  enterprises to unlock their maximum
                </span>
              </h2>
              <h2 className="overflow-hidden about-last-text">
                <span className="about-text-reveal-2">capabilities.</span>
              </h2>
            </div>
          </div>
          <div>
            <Link
              className="uppercase text-sm underline font-semibold md:inline-block hidden"
              href={""}
            >
              read more about us
            </Link>
          </div>
          <div
            ref={smallScope as any}
            className="flex justify-end items-end 2xl:mt-[150px] md:mt-[100px] mt-8 md:text-xs text-[10px] uppercase"
            id="about-keep-scrolling"
          >
            <div className="*:text-black *:leading-[14px]">
              <p className="overflow-hidden">
                <span className="about-text-reveal-small">KEEP SCROLLING</span>
              </p>
              <p className="overflow-hidden">
                <span className="about-text-reveal-small">GOOD THINGS</span>
              </p>
              <p className="overflow-hidden">
                <span className="about-text-reveal-small">ARE COMING ❤️</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
