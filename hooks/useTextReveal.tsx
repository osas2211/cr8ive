"use client"

import gsap from "gsap"
import { useEffect, useRef } from "react"

export const useTextReveal = (target: string, scrub?: boolean | number) => {
  const scope: React.Ref<HTMLDivElement | null> = useRef(null)

  useEffect(() => {
    gsap.set(target as never, {
      rotate: 5,
      y: "150%",
      display: "inline-block",
    })
    gsap.to(target as never, {
      rotate: 0,
      y: 0,
      transformOrigin: "center center",
      stagger: 0.1,
      duration: 0.5,
      scrollTrigger: {
        trigger: target,
        scrub,
        // once: true,
      },
    })
  }, [scrub, target])

  return { scope }
}
