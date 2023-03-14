import SideBar from "./components/SideBar";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="flex bg-black w-screen h-screen">
      <SideBar />
      <div className="ml-16 w-full">
        <Skills />
      </div>
    </div>
  );
}

export default App;
