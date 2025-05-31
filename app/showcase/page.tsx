"use client"
import React from "react"

import { PinnedCards } from "@/components/choreography/PinnedCards"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/Footer"

const ShowcasePage = () => {
  return (
    <div className="relative bg-white  overflow-x-hidden">
      <Navbar />
      <div className="min-h-screen">
        <PinnedCards />
        {/* <Lookbook /> */}
        <Footer />
      </div>
    </div>
  )
}

export default ShowcasePage
