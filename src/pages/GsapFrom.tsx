import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapFrom = () => {
  useGSAP(() => {
    gsap.from("#green-box", {
      x: 200,
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "power1.inOut",
      rotation: 360,
    });
  }, []);

  return (
    <div className="space-y-5">
      <div>GsapFrom</div>
      <div id="green-box" className="w-20 h-20 bg-green-500 rounded-lg"></div>
    </div>
  );
};

export default GsapFrom;
