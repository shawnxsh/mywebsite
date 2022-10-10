import Slider from "./Slider";
import Organizations from "./Organizations";

function Home() {
  return (
    <div className="w-screen bg-gradient-to-br from-purple-600 to-sky-600 text-white">
      <Slider slideNum={5} />
      <Organizations />
    </div>
  );
}

export default Home;
