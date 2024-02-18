"use client"; // This is a client component 👈🏽

import Lottie from "react-lottie-player";
import lottieJson from "../TopAnimation.json";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section2 from "@/components/section2/page";
gsap.registerPlugin(ScrollTrigger); // ScrollTrigger Trigger 호출

export default function index() {
  const triggerRef = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);

  useEffect(() => {
    gsap.fromTo(text1.current, { opacity: 0 }, { opacity: 1, duration: 2 });
    gsap.fromTo(text2.current, { opacity: 0 }, { opacity: 1, duration: 2 });
    gsap.fromTo(text3.current, { opacity: 0 }, { opacity: 1, duration: 2 });
  }, []);

  return (
    <>
      <div ref={triggerRef}>
        <section id="section1" className="section__item">
          <div className="section__item__title" ref={text1}>
            🙋‍♀️반갑습니다.
          </div>
          <div className="section__item__text " ref={text2}>
            FRONTEND DEVELOPER 우다영입니다.
          </div>
        </section>
        <Lottie
          loop
          animationData={lottieJson}
          play
          className="lottie__item_bg"
        />

        <Section2 />
      </div>
    </>
  );
}
