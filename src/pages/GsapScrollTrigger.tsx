import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const GsapScrollTrigger = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!scrollRef.current) return;
      const boxes = gsap.utils.toArray(
        scrollRef.current?.children
      ) as Element[];
      boxes.forEach((box) => {
        gsap.to(box, {
          x: 150 * (boxes.indexOf(box) + 5),
          rotation: 360,
          borderRadius: "100%",
          scale: 1.5,
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom",
            end: "top 10%",
            scrub: true,
          },
          ease: "power1.inOut",
        });
      });
    },
    { scope: scrollRef }
  );

  return (
    <div className="space-y-5">
      <div>GsapTo</div>
      <div ref={scrollRef}>
        <div className="w-20 h-20 bg-blue-500 rounded-lg"></div>
        <div className="w-20 h-20 bg-pink-500 rounded-lg"></div>
      </div>
    </div>
  );
};

export default GsapScrollTrigger;
