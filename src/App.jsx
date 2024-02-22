import "./App.css";
import Cursor from "./components/cursor/Cursor";
import StarCursor from "./components/starCursor/starCursor";
import BtnToWandComponents from "./sections/btnToWandComponents/BtnToWandComponents";
import Header from "./sections/header/Header";
import HowAreMade from "./sections/howAreMade/HowAreMade";
import Intro from "./sections/intro/Intro";
import Process from "./sections/process/Process";

function App() {
  return (
    <>
      <Cursor />
      <StarCursor />
      <Header />
      <Intro />
      <Process />
      <HowAreMade />
      <BtnToWandComponents />
    </>
  );
}

export default App;
