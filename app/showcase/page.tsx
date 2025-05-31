"use client";
import React from "react";

import { PinnedCards } from "@/components/choreography/PinnedCards";
import { Navbar } from "@/components/navbar";

const ShowcasePage = () => {
  return (
    <div className="relative bg-white  overflow-x-hidden">
      <Navbar />
      <div className="min-h-screen">
        <PinnedCards />
        {/* <Lookbook /> */}
      </div>
    </div>
  );
};

export default ShowcasePage;
