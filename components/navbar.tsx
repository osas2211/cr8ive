"use client"
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarBrand,
} from "@heroui/navbar"

import NextLink from "next/link"

import { Logo } from "@/components/icons"
import { IoClose, IoGrid } from "react-icons/io5"
import { HiViewGrid } from "react-icons/hi"
import { useCallback, useState } from "react"
import { Menu } from "./Menu"
import { usePathname } from "next/navigation"
import { useTransitionRouter } from "next-view-transitions"
import Link from "next/link"

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const router = useTransitionRouter()
  const pathname = usePathname()
  const toggleMenu = useCallback(() => {
    if (!isAnimating) {
      setOpenMenu((prevIsOpen) => {
        return !prevIsOpen
      })
    }
  }, [isAnimating, openMenu])
  function triggerPageTransition() {
    document.documentElement.animate(
      [
        {
          clipPath: "polygon(25% 75%, 75% 75%, 75% 75%, 25% 75%)",
        },
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        },
      ],
      {
        duration: 2000,
        easing: "cubic-bezier(0.9, 0, 0.1, 1)",
        pseudoElement: "::view-transition-new(root)",
      }
    )
  }

  const handleNavigation = (path: string) => (e: any) => {
    if (path === pathname) {
      e.preventDefault()
      return
    }

    router.push(path, {
      onTransitionReady: triggerPageTransition,
    })
  }
  return (
    <>
      <HeroUINavbar
        maxWidth="xl"
        // position="sticky"
        className="md:!w-[50vw] w-[94vw] mx-auto my-5 rounded-xl fixed top-0 left-0 bg-[#0000001a] backdrop-blur-[10px] reveal-block"
      >
        <NavbarContent justify="start">
          <div className="flex items-center gap-4 justify-between !w-full">
            <NavbarBrand as="li" className="gap-3 max-w-fit">
              <NextLink
                className="flex justify-start items-center gap-1"
                href="/"
              >
                <Logo />
                <p className="font-bold text-inherit text-[18px] lowercase">
                  <span className="uppercase">C</span>r8ive*
                </p>
              </NextLink>
            </NavbarBrand>
            <li className="flex items-center gap-4">
              {!openMenu && (
                <>
                  <NextLink
                    className="flex justify-start items-center gap-1"
                    href="/"
                  >
                    <p>work</p>
                  </NextLink>
                  <NextLink
                    className="flex justify-start items-center gap-1"
                    href="/"
                  >
                    <p>culture</p>
                  </NextLink>
                  <Link
                    className="flex justify-start items-center gap-1"
                    href="/contact"
                    // onClick={handleNavigation("/contact")}
                  >
                    <p>contact</p>
                  </Link>
                </>
              )}
              <div
                className="hover:bg-[#46454549] p-1 rounded-sm cursor-pointer"
                onClick={toggleMenu}
              >
                {openMenu ? (
                  <div className="flex items-center gap-2">
                    <IoClose className="text-white" size={20} />
                    {/* <p>close</p> */}
                  </div>
                ) : (
                  <HiViewGrid className="text-white" size={20} />
                )}
              </div>
            </li>
          </div>
        </NavbarContent>
      </HeroUINavbar>
      <Menu
        isOpen={openMenu}
        setIsOpen={setOpenMenu}
        toggleMenu={toggleMenu}
        isAnimating={isAnimating}
        setIsAnimating={setIsAnimating}
      />
    </>
  )
}
