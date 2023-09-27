import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import img1 from "./cloud-1.png";
import img2 from "./cloud-2.png";
import img3 from "./cloud-3.png";
import "./App.css";

function App() {
  useLayoutEffect(() => {
    gsap.defaults({ repeat: -1, ease: "none" });
    gsap.to(".img-1", { x: "-100%", duration: 15 });
    gsap.to(".img-2", { x: "-100%", duration: 12 });
    gsap.to(".img-3", { x: "-100%", duration: 8 });
  }, []);
  return (
    <div className="App">
      <img src={img1} className="img-1" alt="" />
      <img src={img2} className="img-2" alt="" />
      <img src={img3} className="img-3" alt="" />
    </div>
  );
}

export default App;
