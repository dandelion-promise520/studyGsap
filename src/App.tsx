import GsapFrom from "./pages/Gsapfrom";
import GsapFromTo from "./pages/GsapFromTo";
import GsapStagger from "./pages/GsapStagger";
import GsapTimeLine from "./pages/GsapTimeLine";
import GsapTo from "./pages/GsapTo";

const App = () => {
  return (
    <div className="space-y-10 mt-10 ml-10">
      <GsapTo />
      <GsapFrom />
      <GsapFromTo />
      <GsapTimeLine />
      <GsapStagger />
    </div>
  );
};

export default App;
