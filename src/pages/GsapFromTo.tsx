import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapFromTo = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#red-box",
      {
        x: 0,
        borderRadius: "0%",
        rotation: 0,
      },
      {
        x: 200,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: "power1.inOut",
        borderRadius: "100%",
        rotation: 360,
      }
    );
  }, []);

  return (
    <div className="space-y-5">
      <div>GsapFromTo</div>
      <div id="red-box" className="w-20 h-20 bg-red-500 rounded-lg"></div>
    </div>
  );
};

export default GsapFromTo;
