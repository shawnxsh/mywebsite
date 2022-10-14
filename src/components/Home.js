import Slider from "./Slider";
import ProjectPreview from "./ProjectPreview";
import Organizations from "./Organizations";

function Home() {
  return (
    <div className="w-screen bg-gradient-to-br from-violet-900 to-sky-800">
      <Slider slideNum={5} />
      <ProjectPreview />
      <Organizations />
    </div>
  );
}

export default Home;
