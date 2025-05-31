import React, { ReactNode } from "react"
import { Link } from "@heroui/link"

import { WebLoader } from "./WebLoader"
import { SmoothScroller } from "./SmoothScroller"

export const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <SmoothScroller>
      <div>
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
