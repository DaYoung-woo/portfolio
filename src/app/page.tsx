"use client"; // This is a client component 👈🏽

import Lottie from "react-lottie-player";
import lottieJson from "../TopAnimation.json";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "postcss";

gsap.registerPlugin(ScrollTrigger); // ScrollTrigger Trigger 호출

export default function index() {
  const triggerRef = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);
  const text4 = useRef(null);

  useEffect(() => {
    //const tl = gsap.timeline();
    gsap.to(text1.current, { duration: 3 });
  }, []);

  return (
    <div style={{ width: "100vw" }} ref={triggerRef}>
      <Lottie
        loop
        animationData={lottieJson}
        play
        style={{ width: "100%", marginTop: "-200px" }}
      />
      <section id="section1" className="section__item">
      
          <div className="section__item__text" ref={text1}>
            🙋‍♀️안녕하세요
          </div>
          <div className="section__item__text" ref={text2}>
            프론트엔드 개발자
          </div>
          <div className="section__item__text" ref={text3}>
            우다영의 포트폴리오입니다.
          </div>
       
      </section>
    </div>
  );
}
