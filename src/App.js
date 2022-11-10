import "./App.css";
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Nav></Nav>
      <Home></Home>
    </div>
  );
}

export default App;
