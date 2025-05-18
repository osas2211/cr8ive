/* eslint-disable @next/next/no-img-element */
"use client"
import { Link } from "@heroui/link"
import gsap from "gsap"
import React, { useEffect, useRef } from "react"

export const Footer = () => {
  const scope = useRef(null)
  useEffect(() => {
    gsap.matchMedia(scope).add("(min-width:760px)", () => {
      gsap.fromTo(
        ".footermarquee",
        {
          y: 400,
        },
        {
          y: 0,
          // ease: "power4.out",
          scrollTrigger: { trigger: ".footermarquee", scrub: true },
        }
      )
    })
  }, [])

  return (
    <>
      <div className="relative" ref={scope}>
        <div
          className="bg-[#101012] text-[#eee] w-full md:pl-[40px] pl-5 2xl:py-[70px] md:py-[48px] py-10 overflow-hidden z-[20] relative"
          id="footer-section"
        >
          <div className="uppercase md:text-sm text-[10px] md:sticky md:top-[70px] 2xl:min-w-[640.5px] md:min-w-[30%] md:-mb-[80px] mb-[30px] about-sticky">
            <p className="overflow-hidden">
              <span className="footer-text-reveal">
                DROP US A LINE, AND WE&apos;LL
              </span>
            </p>
            <p className="overflow-hidden">
              <span className="footer-text-reveal">GET IN TOUCH!</span>
            </p>

            <div className="mt-5">
              <Link
                href={""}
                className="uppercase md:text-sm text-xs underline font-semibold"
              >
                schedule a call
              </Link>
            </div>
          </div>

          <div className="flex lg:flex-row flex-col">
            <div className="2xl:min-w-[640.5px] md:min-w-[30%]"></div>
            <div className="2xl:text-[40px] md:text-[32px] text-[19px] relative service-text md:w-[70%] w-full">
              <div className="flex flex-wrap items-center md:justify-between gap-4 md:text-sm text-[10px] uppercase text-[#eee] pr-5 md:pr-10">
                <div>
                  <div className="cursor-pointer relative show-social-image">
                    <span className="signal-line-link inline-block">
                      dribble
                    </span>
                    <div className="absolute top-[30px] left-[0px] h-[150px] md:h-[180px] w-[300px] md:block hidden">
                      <img
                        src="https://Grainient.b-cdn.net/Inspirux/dribble.png"
                        alt=""
                        className="h-full w-full object-cover block rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="cursor-pointer relative show-social-image">
                    <span className="signal-line-link inline-block">
                      behance
                    </span>
                    <div className="absolute top-[30px] left-[50%] translate-x-[-50%] h-[150px] md:h-[180px] w-[300px] md:block hidden">
                      <img
                        src="https://Grainient.b-cdn.net/Inspirux/behance.png"
                        alt=""
                        className="h-full w-full object-cover block rounded-md"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="cursor-pointer relative show-social-image">
                    <span className="signal-line-link inline-block">
                      linkedin
                    </span>
                    <div className="absolute top-[30px] left-[50%] translate-x-[-50%] h-[150px] md:h-[180px] w-[300px] md:block hidden">
                      <img
                        src="https://Grainient.b-cdn.net/Inspirux/linkedin.png"
                        alt=""
                        className="h-full w-full object-cover block rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="cursor-pointer relative show-social-image">
                    <span className="signal-line-link inline-block">
                      x(twitter)
                    </span>
                    <div className="absolute top-[30px] left-[50%] translate-x-[-50%] h-[150px] md:h-[180px] w-[300px] md:block hidden">
                      <img
                        src="https://Grainient.b-cdn.net/Inspirux/twitter.png"
                        alt=""
                        className="h-full w-full object-cover block rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="cursor-pointer relative show-social-image">
                    <span className="signal-line-link inline-block">
                      instagram
                    </span>
                    <div className="absolute top-[30px] left-[50%] translate-x-[-50%] h-[150px] md:h-[180px] w-[300px] md:block hidden">
                      <img
                        src="https://Grainient.b-cdn.net/Inspirux/instagram.png"
                        alt=""
                        className="h-full w-full object-cover block rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="cursor-pointer relative show-social-image">
                    <span className="signal-line-link inline-block">
                      facebook
                    </span>
                    <div className="absolute top-[30px] left-[50%] translate-x-[-50%] h-[150px] md:h-[180px] w-[300px] md:block hidden">
                      <img
                        src="https://Grainient.b-cdn.net/Inspirux/facebook.png"
                        alt=""
                        className="h-full w-full object-cover block rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="cursor-pointer relative show-social-image">
                    <span className="signal-line-link inline-block">
                      youtube
                    </span>
                    <div className="absolute top-[30px] right-[0px] h-[150px] md:h-[180px] w-[300px] md:block hidden">
                      <img
                        src="https://Grainient.b-cdn.net/Inspirux/youtube.png"
                        alt=""
                        className="h-full w-full object-cover block rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="w-full overflow-x-hidden md:mt-[170px] mt-7"
                id="selected-footer-links"
              >
                <div className="uppercase w-full flex selected-footer-link will-change-scroll cursor-pointer">
                  <div
                    className={`w-full border-b-[1px] border-[#f9faf7]/20 md:py-5 py-5 md:pr-10 pr-5 flex items-center justify-between line-bottom before:bg-primary mail-address`}
                  >
                    <div className="w-full">
                      <div className="flex md:gap-5 gap-2">
                        <p className="md:text-[5.5vw] text-[7.5vw]">
                          HELLO@HEROUI.COM
                        </p>
                        <img
                          className="object-contain md:h-[48px] md:w-[48px] w-[12px] h-[12px] mail-arrow mt-4 inline-block"
                          src="https://Grainient.b-cdn.net/Inspirux/footerArrow2.png"
                          alt="arrow"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:my-24 my-7 grid md:grid-cols-3 gap-10 text-xs md:text-xs uppercase md:pr-10 pr-5">
                <div>
                  <p> +44 7463615117</p>
                  <div className="mt-5 leading-[18px]">
                    <p>LYTCHETT HOUSE, 13 FREELAND</p>
                    <p>PARK, WAREHAM ROAD, POOLE</p>
                    <p>DORSET, BH16 6FA</p>
                  </div>
                </div>
                <div className="space-y-3 flex flex-col *:overflow-hidden">
                  <p className="signal-line-link w-fit cursor-pointer">works</p>
                  <p className="signal-line-link w-fit cursor-pointer">
                    expertise
                  </p>
                  <p className="signal-line-link w-fit cursor-pointer">about</p>
                  <p className="signal-line-link w-fit cursor-pointer">
                    insights
                  </p>
                </div>
                <div className="space-y-3 flex flex-col *:overflow-hidden">
                  <p className="signal-line-link w-fit cursor-pointer">
                    careers
                  </p>
                  <p className="signal-line-link w-fit cursor-pointer">
                    contact
                  </p>
                </div>
              </div>
              <div className="flex md:flex-row flex-col md:items-center justify-between md:gap-5 gap-1 flex-wrap md:text-xs text-[10px] text-[#eee]/30 md:pr-10 pr-5">
                <p>© ALL RIGHTS RESERVED, HERO UI 2024</p>
                <p>
                  LET&apos;S MAKE YOUR IDEAS TO LIFE{" "}
                  <span className="text-white">❤️</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary pt-0 sticky bottom-0 left-0 w-full h-auto text-dark-1000">
          <div className="overflow-hidden lg:h-[250px] md:h-[260px] h-[100px] footermarquee_ bg-primary">
            <h2 className="uppercase  text-[12.8vw] leading-[12.8vw] font-mango whitespace-nowrap opacity-75 md:font-semibold text-center">
              Cr8ive.HeroUI
            </h2>
          </div>
        </div>
      </div>
    </>
  )
}
