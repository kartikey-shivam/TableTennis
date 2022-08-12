import "./App.css";
import Home from "./Pages/Home";
import { Route, Router, Routes } from "react-router-dom";
import About1 from "./Pages/About1";
import About2 from "./Pages/About2";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about/tt" exact element={<About2 />} />
        <Route path="/about/yoga" exact element={<About1 />} />
      </Routes>
    </div>
  );
}

export default App;
