import "../css/style.css";
import { Gradient } from "../utils/Gradient.js";
import { useEffect, useRef } from "react";

const gradient = new Gradient();
// https://whatamesh.vercel.app/

export const MeshGradient = () => {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      gradient.initGradient("#gradient-canvas");
    }
  }, [ref]);

  return (
    <>
      <canvas id="gradient-canvas" data-transition-in></canvas>
      <div ref={ref} id="app" className="App"></div>
    </>
  );
};
