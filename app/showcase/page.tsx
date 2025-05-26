"use client"
import { PinnedCards } from "@/components/choreography/PinnedCards"
import { Lookbook } from "@/components/home/Gallery"
import { Navbar } from "@/components/navbar"
import React from "react"

const ShowcasePage = () => {
  return (
    <div className="relative bg-white  overflow-x-hidden">
      <Navbar />
      <div className="min-h-screen">
        <PinnedCards />
        <Lookbook />
      </div>
    </div>
  )
}

export default ShowcasePage
