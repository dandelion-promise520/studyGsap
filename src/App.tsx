import GsapFrom from "./pages/GsapFrom";
import GsapFromTo from "./pages/GsapFromTo";
import GsapScrollTrigger from "./pages/GsapScrollTrigger";
import GsapStagger from "./pages/GsapStagger";
import GsapText from "./pages/GsapText";
import GsapTimeLine from "./pages/GsapTimeLine";
import GsapTo from "./pages/GsapTo";

const App = () => {
  return (
    <div className="mt-10 ml-10 space-y-10 overflow-y-hidden no-scrollbar">
      <GsapTo />
      <GsapFrom />
      <GsapFromTo />
      <GsapTimeLine />
      <div className="mb-[260px]">
        <GsapStagger />
      </div>
      <div className="mb-[260px]">
        <GsapScrollTrigger />
      </div>
      <GsapText />
    </div>
  );
};

export default App;
