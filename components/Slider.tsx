"use client"
import React, { useRef, useEffect } from "react"
import gsap from "gsap"
import { CustomEase } from "gsap/CustomEase"
import "../styles/slider.css"

gsap.registerPlugin(CustomEase)

export const Slider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null)
  const mainImageContainerRef = useRef<HTMLDivElement>(null)
  const titleContainerRef = useRef<HTMLDivElement>(null)
  const descriptionContainerRef = useRef<HTMLDivElement>(null)
  const counterContainerRef = useRef<HTMLDivElement>(null)

  const stateRef = useRef({
    totalSlides: 5,
    currentSlide: 1,
    isAnimating: false,
    scrollAllowed: true,
    lastScrollTime: 0,
  })

  const slideTitles = [
    "Infuse Passion",
    "Feed Curiosity",
    "Share Openly",
    "Your voice",
    "Fail Fearlessly",
    "Nebula Point",
    "Horizon",
  ]

  const slideDescriptions = [
    "Heart Behind Work",
    `Ask "what if?" freely`,
    "Support each other's risks",
    "Speak your unique truth",
    "Learn fast, no blame",
    "VFX",
    "Set Design",
  ]

  const createSlide = (slideNumber: number, direction: "up" | "down") => {
    const slide = document.createElement("div")
    slide.className = "slide"

    const slideBgImg = document.createElement("div")
    slideBgImg.className = "slide-bg-img"

    const img = document.createElement("img")
    img.src = `/assets/img${slideNumber}.jpg`
    img.alt = ""

    slideBgImg.appendChild(img)
    slide.appendChild(slideBgImg)

    if (direction === "down") {
      slideBgImg.style.clipPath =
        "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
    } else {
      slideBgImg.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"
    }

    return slide
  }

  const createMainImageWrapper = (
    slideNumber: number,
    direction: "up" | "down"
  ) => {
    const wrapper = document.createElement("div")
    wrapper.className = "slide-main-img-wrapper"

    const img = document.createElement("img")
    img.src = `/assets/img${slideNumber}.jpg`
    img.alt = ""

    wrapper.appendChild(img)

    if (direction === "down") {
      wrapper.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"
    } else {
      wrapper.style.clipPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
    }

    return wrapper
  }

  const createTextElements = (
    slideNumber: number,
    direction: "up" | "down"
  ) => {
    const newTitle = document.createElement("h1")
    newTitle.textContent = slideTitles[slideNumber - 1]
    gsap.set(newTitle, {
      y: direction === "down" ? 50 : -50,
    })

    const newDescription = document.createElement("p")
    newDescription.textContent = slideDescriptions[slideNumber - 1]
    gsap.set(newDescription, {
      y: direction === "down" ? 20 : -20,
    })

    const newCounter = document.createElement("p")
    newCounter.textContent = slideNumber.toString()
    gsap.set(newCounter, {
      y: direction === "down" ? 18 : -18,
    })

    return { newTitle, newDescription, newCounter }
  }

  const animateSlide = (direction: "up" | "down") => {
    const state = stateRef.current
    if (state.isAnimating || !state.scrollAllowed) return

    state.isAnimating = true
    state.scrollAllowed = false

    const slider = sliderRef.current
    const mainImageContainer = mainImageContainerRef.current
    const titleContainer = titleContainerRef.current
    const descriptionContainer = descriptionContainerRef.current
    const counterContainer = counterContainerRef.current

    if (
      !slider ||
      !mainImageContainer ||
      !titleContainer ||
      !descriptionContainer ||
      !counterContainer
    )
      return

    const currentSlideElement = slider?.querySelector(".slide:first-child")
    const currentMainWrapper = mainImageContainer?.querySelector(
      ".slide-main-img-wrapper:first-child"
    )
    const currentTitle = titleContainer?.querySelector("h1")
    const currentDescription = descriptionContainer?.querySelector("p")
    const currentCounter = counterContainer?.querySelector("p")

    if (direction === "down") {
      state.currentSlide =
        state.currentSlide === state.totalSlides ? 1 : state.currentSlide + 1
    } else {
      state.currentSlide =
        state.currentSlide === 1 ? state.totalSlides : state.currentSlide - 1
    }

    const newSlide = createSlide(state.currentSlide, direction)
    const newMainWrapper = createMainImageWrapper(state.currentSlide, direction)
    const { newTitle, newDescription, newCounter } = createTextElements(
      state.currentSlide,
      direction
    )

    slider.appendChild(newSlide)
    mainImageContainer.appendChild(newMainWrapper)
    titleContainer.appendChild(newTitle)
    descriptionContainer.appendChild(newDescription)
    counterContainer.appendChild(newCounter)

    gsap.set(newMainWrapper?.querySelector("img"), {
      y: direction === "down" ? "-50%" : "50%",
    })

    const tl = gsap.timeline({
      onComplete: () => {
        ;[
          currentSlideElement,
          currentMainWrapper,
          currentTitle,
          currentDescription,
          currentCounter,
        ].forEach((el) => el?.remove())

        state.isAnimating = false
        setTimeout(() => {
          state.scrollAllowed = true
          state.lastScrollTime = Date.now()
        }, 100)
      },
    })

    tl.to(
      newSlide?.querySelector(".slide-bg-img"),
      {
        clipPath:
          direction === "down"
            ? "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)"
            : "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.25,
        ease: "customEase",
      },
      0
    )
      .to(
        currentSlideElement?.querySelector("img") as any,
        {
          scale: 1.5,
          duration: 1.25,
          ease: "customEase",
        },
        0
      )
      .to(
        newMainWrapper,
        {
          clipPath:
            direction === "down"
              ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
              : "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          duration: 1.25,
          ease: "customEase",
        },
        0
      )
      .to(
        currentMainWrapper?.querySelector("img") as any,
        {
          y: direction === "down" ? "50%" : "-50%",
          duration: 1.25,
          ease: "customEase",
        },
        0
      )
      .to(
        newMainWrapper?.querySelector("img"),
        {
          y: "0%",
          duration: 1.25,
          ease: "customEase",
        },
        0
      )
      .to(
        currentTitle,
        {
          y: direction === "down" ? -50 : 50,
          duration: 1.25,
          ease: "customEase",
        },
        0
      )
      .to(
        newTitle,
        {
          y: 0,
          duration: 1.25,
          ease: "customEase",
        },
        0
      )
      .to(
        currentDescription,
        {
          y: direction === "down" ? -20 : 20,
          duration: 1.25,
          ease: "customEase",
        },
        0
      )
      .to(
        newDescription,
        {
          y: 0,
          duration: 1.25,
          ease: "customEase",
        },
        0
      )
      .to(
        currentCounter,
        {
          y: direction === "down" ? -18 : 18,
          duration: 1.25,
          ease: "customEase",
        },
        0
      )
      .to(
        newCounter,
        {
          y: 0,
          duration: 1.25,
          ease: "customEase",
        },
        0
      )
  }

  const handleScroll = (direction: "up" | "down") => {
    const state = stateRef.current
    const now = Date.now()
    if (state.isAnimating || !state.scrollAllowed) return
    if (now - state.lastScrollTime < 1000) return
    state.lastScrollTime = now
    animateSlide(direction)
  }

  useEffect(() => {
    CustomEase.create("customEase", ".87,0,.13,1")

    // Initialize first slide elements
    const firstSlide = document?.querySelector(".slider .slide")
    const firstMainWrapper = document?.querySelector(".slide-main-img-wrapper")
    const firstTitle = document?.querySelector(".slide-title h1")
    const firstDescription = document?.querySelector(".slide-description p")
    const firstCounter = document?.querySelector(".slider-count p")

    // Set initial animation states
    if (firstSlide) gsap.set(firstSlide?.querySelector("img"), { scale: 1 })
    if (firstMainWrapper)
      gsap.set(firstMainWrapper?.querySelector("img"), { y: "0%" })
    if (firstTitle) gsap.set(firstTitle, { y: 0 })
    if (firstDescription) gsap.set(firstDescription, { y: 0 })
    if (firstCounter) gsap.set(firstCounter, { y: 0 })

    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault()
      const direction = e.deltaY > 0 ? "down" : "up"
      handleScroll(direction)
    }

    let touchStartY = 0
    let isTouchActive = false

    const touchStartHandler = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY
      isTouchActive = true
    }

    const touchMoveHandler = (e: TouchEvent) => {
      e.preventDefault()
      const state = stateRef.current
      if (!isTouchActive || state.isAnimating || !state.scrollAllowed) return
      const touchCurrentY = e.touches[0].clientY
      const difference = touchStartY - touchCurrentY
      if (Math.abs(difference) > 10) {
        isTouchActive = false
        const direction = difference > 0 ? "down" : "up"
        handleScroll(direction)
      }
    }

    const touchEndHandler = () => {
      isTouchActive = false
    }

    window.addEventListener("wheel", wheelHandler, { passive: false })
    window.addEventListener("touchstart", touchStartHandler, { passive: false })
    window.addEventListener("touchmove", touchMoveHandler, { passive: false })
    window.addEventListener("touchend", touchEndHandler)

    return () => {
      window.removeEventListener("wheel", wheelHandler)
      window.removeEventListener("touchstart", touchStartHandler)
      window.removeEventListener("touchmove", touchMoveHandler)
      window.removeEventListener("touchend", touchEndHandler)
    }
  }, [])

  return (
    <>
      <footer className="slider-footer">
        <p>Cr8ive</p>

        <div className="slider-counter">
          <div className="slider-count" ref={counterContainerRef}>
            <p>1</p>
          </div>
          <p>/</p>
          <p>{stateRef.current.totalSlides}</p>
        </div>
      </footer>

      <div className="slider" ref={sliderRef}>
        <div className="slide">
          <div className="slide-bg-img">
            <img src="/assets/img1.jpg" alt="" />
          </div>
        </div>

        <div className="slide-main-img" ref={mainImageContainerRef}>
          <div className="slide-main-img-wrapper">
            <img src="/assets/img1.jpg" alt="" />
          </div>
        </div>

        <div className="slide-copy">
          <div className="slide-title" ref={titleContainerRef}>
            <h1>Infuse Passion</h1>
          </div>
          <div className="slide-description" ref={descriptionContainerRef}>
            <p>Heart Behind Work</p>
          </div>
        </div>
      </div>
    </>
  )
}
