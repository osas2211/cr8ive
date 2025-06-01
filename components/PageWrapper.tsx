"use client"
import React, { ReactNode, useEffect, useRef } from "react"
import { Link } from "@heroui/link"

import { WebLoader } from "./WebLoader"
import { SmoothScroller } from "./SmoothScroller"
import { usePathname } from "next/navigation"

export const PageWrapper = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname()
  const bodyRef: React.RefObject<HTMLDivElement> = useRef(null)
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
  }, [pathname])
  return (
    <SmoothScroller>
      <div ref={bodyRef}>
        <WebLoader>
          <div className="min-h-screen">
            <main className="">{children}</main>
            {/* <footer className="w-full flex items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://heroui.com?utm_source=next-app-template"
                title="heroui.com homepage"
              >
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">HeroUI</p>
              </Link>
            </footer> */}
          </div>
        </WebLoader>
      </div>
    </SmoothScroller>
  )
}
