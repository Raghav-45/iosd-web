"use client";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react"
import { useIsDesktop } from "@/hooks/use-mobile";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const isDesktop = useIsDesktop()
  useGSAP(() => {
    if (isDesktop) {
       const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#home",
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        }
       })

       timeline.to(".mask img", {
        transform: "scale(1.1)"
       })
    }
  }, [isDesktop])


  return (
    <section id="home">
        <div className="media">
            <video src="/videos/landing_video.mp4" autoPlay loop muted playsInline preload="auto"/>
            <div className="mask">
                <img src="/logo.svg"/>
            <h1>International Organisation of Software Developers</h1>
            </div>
        </div>

        <div className="text-center max-w-md mx-auto relative z-10 my-5 lg:-mt-40">
            <h2
              className="text-5xl font-bold"
            >Welcome to IOSD, MAIT</h2>
            <p className="mt-3 text-xl text-justify">

              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias nam quasi consequuntur sunt distinctio architecto voluptatibus tenetur quia similique quo cum nulla explicabo non iusto, consequatur velit tempora atque nobis suscipit laborum, incidunt dolores sequi, dolorem dolorum. Ipsam, porro, laudantium in consectetur sequi error iure beatae doloremque vitae deleniti alias cumque similique non quas eum dicta a aspernatur voluptate libero debitis voluptatum quam? Consectetur quod voluptate harum labore tempora sit voluptatum autem, minima esse quis vel alias, natus iste error doloribus fuga explicabo delectus! Dignissimos commodi deserunt illum corrupti voluptatum molestiae modi quas, accusamus, praesentium delectus sit, consequatur blanditiis vitae?
            </p>
        </div>
    </section>
  )
}

export default HeroSection