import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapTo = () => {
  useGSAP(() => {
    gsap.to("#blue-box", {
      x: 200,
      repeat: -1,
      yoyo: true,
      duration: 1.2,
      ease: "power1.inOut",
      rotation: 360,
    });
  }, []);

  return (
    <div className="space-y-5">
      <div>GsapTo</div>
      <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg"></div>
    </div>
  );
};

export default GsapTo;
