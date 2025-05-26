"use client"
import React from "react"
import "./index.css"
import { useMarquee } from "@/hooks/useMarquee"
import { useGSAP } from "@gsap/react"
import { usePinnedCardsAnimation } from "@/hooks/usePinnedCardAnimations"

export const PinnedCards = () => {
  const runAnimation = usePinnedCardsAnimation()
  useGSAP(() => {
    runAnimation()
  }, [])
  return (
    <div className="pinned-trigger overflow-x-hidden">
      {/* <section className="pinned-intro">
        <h1>We design spaces that don&apos;t just exist.</h1>
      </section> */}
      <section className="pinned-cards">
        <div className="pinned-card">
          <div className="pinned-card-marquee">
            <div className="marquee">
              <h1>Design Beyond Boundaries</h1>
              <h1>Built for Tomorrow</h1>
              <h1>Real Impact</h1>
              <h1>Digital Visions</h1>
            </div>
          </div>
          <div className="pinned-card-wrapper">
            <div className="pinned-card-content">
              <div className="pinned-card-title">
                <h1>Curved Horizon</h1>
              </div>
              <div className="pinned-card-description">
                <p>
                  A futuristic residence that plays with curvature and flow,
                  blending bold geometry with natural topography.
                </p>
              </div>
            </div>
            <div className="pinned-card-img">
              <img src="/card-img-1.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="pinned-card">
          <div className="pinned-card-wrapper">
            <div className="pinned-card-content">
              <div className="pinned-card-title">
                <h1>Glass Haven</h1>
              </div>
              <div className="pinned-card-description">
                <p>
                  A sleek pavilion of pure transparency, openness and light,
                  designed to dissolve into its environment.
                </p>
              </div>
            </div>
            <div className="pinned-card-img">
              <img src="/card-img-2.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="pinned-card">
          <div className="pinned-card-wrapper">
            <div className="pinned-card-content">
              <div className="pinned-card-title">
                <h1>Moss Cube</h1>
              </div>
              <div className="pinned-card-description">
                <p>
                  A minimalist cube home crowned with a living moss dome,
                  merging micro-architecture with ecological design.
                </p>
              </div>
            </div>
            <div className="pinned-card-img">
              <img src="/card-img-3.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="pinned-card">
          <div className="pinned-card-wrapper">
            <div className="pinned-card-content">
              <div className="pinned-card-title">
                <h1>Floating Shelter</h1>
              </div>
              <div className="pinned-card-description">
                <p>
                  This design explores an ethereal structure perched on a grassy
                  islet, seemingly hovering above water.
                </p>
              </div>
            </div>
            <div className="pinned-card-img">
              <img src="/card-img-4.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="pinned-outro">
        <h1>Architecture reimagined for the virtual age.</h1>
      </section>
    </div>
  )
}
