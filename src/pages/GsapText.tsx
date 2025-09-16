import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapText = () => {
  useGSAP(() => {
    gsap.to("#text", {
      y: 0,
      opacity: 1,
      ease: "power1.inOut",
    });

    gsap.fromTo(
      ".para",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        ease: "power1.inOut",
        stagger: 0.3,
      }
    );
  }, []);

  return (
    <main className="mb-10 w-1/3">
      <h1 id="text" className="opacity-0 translate-y-10 font-bold text-3xl">
        GsapText
      </h1>
      <p className="mt-5 para">
        核心包含为所有浏览器创建极快、响应迅速的动画所需的一切。其他功能，如拖动
        ，滚动动画或变形隐藏在插件中。这允许核心保持相对较小，并允许您仅在需要时添加功能。
      </p>
      <p className="mt-5 para">
        插件为 GSAP 的核心添加了额外的功能。这允许 GSAP
        核心保持相对较小，并允许您仅在需要时添加功能。
      </p>
      <p className="mt-5 para">
        ScrollTrigger 使任何人都可以用最少的代码创建令人瞠目结舌的基于滚动的动画
        。无限灵活。拖动、固定、捕捉或只是触发任何与滚动相关的内容，即使它与动画无关。
      </p>
      <p className="mt-5 para">
        SplitText 是一个小型 JavaScript 库，它将 HTML
        元素的文本拆分为单独的字符、单词和/或行（每个字符、单词和/或行都在自己的新创建元素中），允许您创建华丽的交错动画。由于具有自动屏幕阅读器可访问性、显示效果遮罩、响应式重新拆分等功能，它比其他文本拆分工具具有高度可配置性和智能性。
      </p>
      <p className="mt-5 para">
        Flip 记录元素的当前位置/大小/旋转，您可以进行任何您想要的更改，然后 Flip
        应用偏移量以使它们看起来从未移动过......最后，FLIP
        以动画方式删除这些偏移量！UI 过渡的编码变得非常简单。Flip
        完成所有繁重的工作。
      </p>
    </main>
  );
};

export default GsapText;
