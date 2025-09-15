import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapTimeLine = () => {
  const timeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    yoyo: true,
  });

  useGSAP(() => {
    timeline.to("#yellow-box", {
      x: 200,
      rotation: 360,
      borderRadius: "100%",
      duration: 1.2,
      ease: "power1.inOut",
    });

    timeline.to("#yellow-box", {
      x: 400,
      rotation: 0,
      borderRadius: "0%",
      duration: 1.2,
      ease: "power1.inOut",
    });

    timeline.to("#yellow-box", {
      x: 600,
      rotation: 360,
      borderRadius: "100%",
      duration: 1.2,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="space-y-5">
      <div>GsapTimeLine</div>
      <button
        className="rounded-lg border border-gray-200 bg-white text-sm font-medium px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-blue-700 focus:text-blue-700"
        onClick={() => {
          if (timeline.paused()) {
            timeline.play();
          } else {
            timeline.pause();
          }
        }}
      >
        播放/暂停
      </button>
      <div id="yellow-box" className="w-20 h-20 bg-yellow-500 rounded-lg"></div>
    </div>
  );
};

export default GsapTimeLine;
