// import { useEffect } from "react"
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
// import "./lookbook.css"

import { useGSAP } from "@gsap/react";

export const Lookbook = () => {
  useGSAP(() => {
    const lenis = new Lenis({});

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    // gsap.ticker.lagSmoothing(0)
    lenis.start();

    document
      .querySelectorAll(".img:not([data-origin])")
      .forEach((img, index) => {
        img.setAttribute("data-origin", index % 2 === 0 ? "left" : "right");
      });

    gsap.set(".img", { scale: 0, force3D: true });

    const timeline = gsap.timeline({ defaults: { ease: "power1.out" } });

    document.querySelectorAll(".lookbook-row").forEach((row, index) => {
      const rowImages = row.querySelectorAll(".img");

      if (rowImages.length > 0) {
        row.id = `row-${index}`;

        timeline.to(rowImages, {
          scale: 1,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            id: `scaleIn-${index}`,
            trigger: row,
            start: "top bottom",
            end: "bottom bottom-=10%",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      }
    });

    timeline.to(".lookbook", {
      backgroundColor: "#000",
      color: "#fff",
      scrollTrigger: {
        trigger: ".work",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    timeline.to(".ham-btn", {
      backgroundColor: "#fff",
      scrollTrigger: {
        trigger: ".work",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    timeline

      .fromTo(
        ".lookbook-intro-tx-t",
        {
          y: 100,
        },
        {
          y: 0,
        },
      )
      .fromTo(
        ".lookbook-intro-tx",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 0.03,
          duration: 0.03,
        },
      )
      .fromTo(
        ".lookbook-intro-tx-b",
        {
          y: -100,
        },
        {
          y: 0,
        },
      );

    ScrollTrigger.refresh();

    const handleResize = () => ScrollTrigger.refresh(true);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      lenis.destroy();
      timeline?.scrollTrigger?.kill();
    };
  }, []);

  return (
    <div className="lookbook">
      <section className="work">
        <div className="lookbook-row">
          <div className="lookbook-col">
            <div className="img" data-origin="right">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1726066012618-f3b5fc6f6593?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </div>
          <div className="lookbook-col" />
          <div className="lookbook-col">
            <div className="img" data-origin="left">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1516146544193-b54a65682f16?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </div>
          <div className="lookbook-col" />
        </div>
        <div className="lookbook-row">
          <div className="lookbook-col" />
          <div className="lookbook-col">
            <div className="img" data-origin="left">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1741802872469-b404a312fa91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </div>
          <div className="lookbook-col" />
          <div className="lookbook-col" />
        </div>
        <div className="lookbook-row">
          <div className="lookbook-col">
            <div className="img" data-origin="right">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1540331547168-8b63109225b7?q=80&w=2038&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </div>
          <div className="lookbook-col" />
          <div className="lookbook-col" />
          <div className="lookbook-col">
            <div className="img" data-origin="left">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1575305331117-0580726a1d34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNyZWF0aXZlfGVufDB8fDB8fHww"
              />
            </div>
          </div>
        </div>
        <div className="lookbook-row">
          <div className="lookbook-col" />
          <div className="lookbook-col">
            <div className="img" data-origin="left">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1588200618450-3a5b1d3b9aa5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </div>
          <div className="lookbook-col">
            <div className="img" data-origin="right">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1633977264259-b3517c187e3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGNyZWF0aXZlfGVufDB8fDB8fHww"
              />
            </div>
          </div>
          <div className="lookbook-col" />
        </div>
        <div className="lookbook-row">
          <div className="lookbook-col">
            <div className="img" data-origin="left">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1541284249430-534171b90445?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGNyZWF0aXZlfGVufDB8fDB8fHww"
              />
            </div>
          </div>
          <div className="lookbook-col" />
          <div className="lookbook-col" />
          <div className="lookbook-col">
            <div className="img" data-origin="left">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1628359355624-855775b5c9c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </div>
        </div>
        <div className="lookbook-row">
          <div className="lookbook-col" />
          <div className="lookbook-col" />
          <div className="lookbook-col">
            <div className="img" data-origin="left">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1613520771675-a8acb52bc78b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGNyZWF0aXZlfGVufDB8fDB8fHww"
              />
            </div>
          </div>
          <div className="lookbook-col" />
        </div>
        <div className="lookbook-row">
          <div className="lookbook-col" />
          <div className="lookbook-col">
            <div className="img" data-origin="left">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1601599009979-f85c21cbd703?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </div>
          <div className="lookbook-col" />
          <div className="lookbook-col">
            <div className="img" data-origin="left">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1548364538-60b952c308b9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </div>
        </div>
        <div className="lookbook-row">
          <div className="lookbook-col">
            <div className="img" data-origin="right">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJyYW5kfGVufDB8fDB8fHww"
              />
            </div>
          </div>
          <div className="lookbook-col" />
          <div className="lookbook-col">
            <div className="img" data-origin="left">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </div>
          <div className="lookbook-col" />
        </div>
        <div className="lookbook-row">
          <div className="lookbook-col" />
          <div className="lookbook-col">
            <div className="img" data-origin="left">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1588200618450-3a5b1d3b9aa5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </div>
          <div className="lookbook-col" />
          <div className="lookbook-col" />
        </div>
        <div className="lookbook-row">
          <div className="lookbook-col">
            <div className="img" data-origin="right">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1516146544193-b54a65682f16?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </div>
          <div className="lookbook-col" />
          <div className="lookbook-col" />
          <div className="lookbook-col">
            <div className="img" data-origin="left">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
