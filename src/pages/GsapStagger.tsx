import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapStagger = () => {
  useGSAP(() => {
    gsap.to(".stagger", {
      y: 200,
      rotation: 360,
      borderRadius: "100%",
      duration: 1.2,
      repeat: -1,
      yoyo: true,
      //   stagger:0.5
      stagger: {
        amount: 1.5,
        grid: [2, 1],
        axis: "y",
        ease: "circ.inOut",
        from: "center",
      },
    });
  }, []);

  return (
    <div className="space-y-5">
      <div>GsapStagger</div>
      <div className="flex space-x-4">
        <div className="stagger w-20 h-20 bg-blue-100 rounded-lg"></div>
        <div className="stagger w-20 h-20 bg-blue-200 rounded-lg"></div>
        <div className="stagger w-20 h-20 bg-blue-300 rounded-lg"></div>
        <div className="stagger w-20 h-20 bg-blue-400 rounded-lg"></div>
        <div className="stagger w-20 h-20 bg-blue-500 rounded-lg"></div>
        <div className="stagger w-20 h-20 bg-blue-600 rounded-lg"></div>
        <div className="stagger w-20 h-20 bg-blue-700 rounded-lg"></div>
      </div>
    </div>
  );
};

export default GsapStagger;
