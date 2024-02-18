import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Section2() {
  const bg = useRef(null);
  const img = useRef(null);
  useEffect(() => {
    gsap.from(img.current, {
      scrollTrigger: {
        trigger: bg.current,
        start: "top bottom",
        end: "top 400px",
        scrub: 1,
      },
      xPercent: -100,
      opacity: 0,
    });
  }, []);

  return (
    <>
      <section id="section2" ref={bg}>
        <div className="second_section_item" ref={img}>
          <img alt="test" className="second_section_img" src="profile.jpg" />
          <article>
            articlearticlearticlearticlearticlearticlearticlearticlearticlearticlearticlearticlearticlearticlearticlearticlearticlearticlearticlearticlearticle
          </article>
        </div>
      </section>
    </>
  );
}
