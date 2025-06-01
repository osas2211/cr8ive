"use client"
import React from "react"

import "./index.css"
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
                <h1>Re-Imagined</h1>
              </div>
              <div className="pinned-card-description">
                <p>
                  The Re-Imagined Phantom Horseman painting, 1870-93 by Sir John
                  Gilbert (d.1897)
                </p>
              </div>
            </div>
            <div className="pinned-card-img">
              <img alt="" src="/card-img-1.jpg" />
            </div>
          </div>
        </div>
        <div className="pinned-card">
          <div className="pinned-card-wrapper">
            <div className="pinned-card-content">
              <div className="pinned-card-title">
                <h1>On-Repeat</h1>
              </div>
              <div className="pinned-card-description">
                <p>
                  This design explores an ethereal depiction of basketball as an
                  art.
                </p>
              </div>
            </div>
            <div className="pinned-card-img">
              <img alt="" src="/card-img-4.jpg" />
            </div>
          </div>
        </div>
        <div className="pinned-card">
          <div className="pinned-card-wrapper">
            <div className="pinned-card-content">
              <div className="pinned-card-title">
                <h1>Wild-Life</h1>
              </div>
              <div className="pinned-card-description">
                <p>
                  A sleek pavilion of pure transparency, openness and light,
                  designed to dissolve into its environment.
                </p>
              </div>
            </div>
            <div className="pinned-card-img">
              <img alt="" src="/card-img-2.jpg" />
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
              <img alt="" src="/card-img-3.jpg" />
            </div>
          </div>
        </div>
      </section>
      <section className="pinned-outro">
        <h1>Art re-imagined for the virtual age.</h1>
      </section>
    </div>
  )
}
