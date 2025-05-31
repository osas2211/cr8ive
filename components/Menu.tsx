"use client"
import React, { useEffect, useCallback, useRef, useLayoutEffect } from "react"
import Link from "next/link"
import "../styles/nav.css"
import gsap from "gsap"
import CustomEase from "gsap/CustomEase"

export const Menu = ({
  toggleMenu,
  isOpen,
  setIsOpen,
  isAnimating,
  setIsAnimating,
}: {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  toggleMenu: () => void
  isAnimating: boolean
  setIsAnimating: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const menuRef: React.RefObject<HTMLDivElement> = useRef(null)
  const isInitializedRef = useRef(false)

  useLayoutEffect(() => {
    gsap.registerPlugin(CustomEase)
    CustomEase.create(
      "hop",
      "M0,0 C0.354,0 0.464,0.133 0.498,0.502 0.532,0.872 0.651,1 1,1"
    )
  }, [])

  useEffect(() => {
    console.log("Initializing Nav component")
    if (menuRef.current) {
      const menu = menuRef.current
      const links = menu.querySelectorAll(".link")
      const socialLinks = menu.querySelectorAll(".socials p")

      gsap.set(menu, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      })
      gsap.set(links, { y: 30, opacity: 0 })
      gsap.set(socialLinks, { y: 30, opacity: 0 })
      gsap.set(".menu-header h1 span", {
        y: 500,
        rotateY: 90,
        scale: 0.8,
      })

      isInitializedRef.current = true
    }
  }, [])

  const animateMenu = useCallback((open: boolean) => {
    if (!menuRef.current) {
      console.log("Menu ref is not available")

      return
    }

    const menu = menuRef.current
    const links = menu.querySelectorAll(".link")
    const socialLinks = menu.querySelectorAll(".socials p")

    setIsAnimating(true)

    if (open) {
      gsap.to(menu, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "hop",
        duration: 1.5,
        onStart: () => {
          menu.style.pointerEvents = "all"
        },
        onComplete: () => {
          setIsAnimating(false)
          console.log("Open animation completed")
        },
      })

      gsap.to(links, {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        delay: 0.85,
        duration: 1,
        ease: "power3.out",
      })

      gsap.to(socialLinks, {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        delay: 0.85,
        duration: 1,
        ease: "power3.out",
      })

      gsap.to(".video-wrapper", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "hop",
        duration: 1.5,
        delay: 0.5,
      })

      gsap.to(".menu-header h1 span", {
        rotateY: 0,
        stagger: 0.05,
        delay: 0.75,
        duration: 1.5,
        ease: "power4.out",
      })

      gsap.to(".menu-header h1 span", {
        y: 0,
        scale: 1,
        stagger: 0.05,
        delay: 0.5,
        duration: 1.5,
        ease: "power4.out",
      })
    } else {
      gsap.to(menu, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        ease: "hop",
        duration: 1.5,
        onComplete: () => {
          menu.style.pointerEvents = "none"
          gsap.set(menu, {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          })

          gsap.set(links, { y: 30, opacity: 0 })
          gsap.set(socialLinks, { y: 30, opacity: 0 })
          gsap.set(".menu-header h1 span", {
            y: 500,
            rotateY: 90,
            scale: 0.8,
          })

          setIsAnimating(false)
          console.log("Close animation completed")
        },
      })
    }
  }, [])

  useEffect(() => {
    if (isInitializedRef.current) {
      console.log(`isOpen changed: ${isOpen}`)
      animateMenu(isOpen)
    }
  }, [isOpen, animateMenu])

  const splitTextIntoSpans = (text: string) => {
    return text
      .split("")
      .map((char, index) =>
        char === " " ? (
          <span key={index}>&nbsp;&nbsp;</span>
        ) : (
          <span key={index}>{char}</span>
        )
      )
  }

  return (
    <div>
      {/* <div className="logo">
        <a href="#">Cr8ive</a>
      </div> */}

      <div ref={menuRef} className="menu z-[10]">
        <div className="col col-1">
          <div className="logo">
            <p>Cr8ive*</p>
          </div>
          <div className="links">
            <div className="link">
              <Link href="/showcase">Showcase</Link>
            </div>
            <div className="link">
              <Link href="/culture">Culture</Link>
            </div>

            <div className="link">
              <Link href="/">Contact</Link>
            </div>
            <div className="link">
              <Link href="/">Hero UI</Link>
            </div>
          </div>
          <div className="video-wrapper">
            <video
              autoPlay
              loop
              muted
              poster="hero-img.jpg"
              src={"/hero-vid.mp4"}
            />
          </div>
        </div>
        <div className="col col-2">
          <div className="socials">
            <div className="sub-col">
              <p>Cr8ive</p>
              <p>9 quao Androe Rockfield</p>
              <p>69001 Ontario</p>
              <p>Canada</p>
              <br />
              <p>contact@Cr8ive.fr</p>
              <p>job@Cr8ive.fr</p>
            </div>
            <div className="sub-col">
              <p>Instagram</p>
              <p>LinkedIn</p>
              <p>Twitter</p>
              <p>Facebook</p>
              <br />
              <p>01 62 31 82 42</p>
            </div>
          </div>

          <div className="menu-header">
            <h1>{splitTextIntoSpans("Cr8ive")}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
