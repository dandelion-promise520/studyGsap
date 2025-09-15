import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapTo = () => {
  useGSAP(() => {
    gsap.to("#blue-box", {
      x: 200,
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "elastic",
      rotation: 360,
    });
  }, []);

  return (
    <div className="mt-20 ml-20">
      <div>GsapTo</div>
      <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg"></div>
    </div>
  );
};

export default GsapTo;
