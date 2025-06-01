"use client"
import React from "react"
import { Accordion, AccordionItem } from "@heroui/accordion"

export const FAQs = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

  return (
    <div>
      <div className="md:h-[400px] h-[250px] w-full relative">
        <img
          src="/faq-img.jpg"
          className="w-full h-full absolute top-0 left-0"
          alt=""
        />
        <div className="w-full h-full absolute top-0 left-0">
          <div className="w-[90%] mx-auto md:py-[8rem] py-[7rem] space-y-3 md:space-y-8">
            <p className="text-blue-500">The FAQs</p>
            <h1 className="md:text-6xl text-2xl text-start text-[#1f1e1e]">
              Help centre
            </h1>
            <div className="text-[#524f4f]">
              Everything you need to know about our product and billing
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 md:gap-10 gap-5 w-[90%] mx-auto py-5 md:py-[5rem]">
        <div className="">
          <div className=" space-y-5">
            <div className="text-blue-500 text-sm">Support</div>
            <h1 className="md:text-3xl text-xl text-start text-[#1f1e1e]">
              FAQs
            </h1>
            <div className="text-[#524f4f]">
              Everything you need to know about our product and billing. Can't
              find the right answer you're looking for? Please contact{" "}
              <span className="cursor-pointer underline">cr8ive@mail.co</span>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 relative z-[2]">
          <Accordion variant="splitted">
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              title="Is there a free trial available?"
            >
              {defaultContent}
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Accordion 2"
              title="Can I change my plan?"
            >
              {defaultContent}
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Accordion 3"
              title="What is your cancellation policy?"
            >
              {defaultContent}
            </AccordionItem>
            <AccordionItem
              key="4"
              aria-label="Accordion 4"
              title="Can other info be added to an invoice?"
            >
              {defaultContent}
            </AccordionItem>
            <AccordionItem
              key="5"
              aria-label="Accordion 5"
              title="How does your billing work?"
            >
              {defaultContent}
            </AccordionItem>
            <AccordionItem
              key="6"
              aria-label="Accordion 6"
              title="How do I change my account email?"
            >
              {defaultContent}
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}
