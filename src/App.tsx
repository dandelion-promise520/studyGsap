import GsapFrom from "./pages/Gsapfrom";
import GsapFromTo from "./pages/GsapFromTo";
import GsapTo from "./pages/GsapTo";

const App = () => {
  return (
    <div className="space-y-10 mt-10 ml-10">
      <GsapTo />
      <GsapFrom />
      <GsapFromTo />
    </div>
  );
};

export default App;
