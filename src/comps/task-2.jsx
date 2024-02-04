import { useState } from "react";
import { Home } from "./assets-one-three/home";
import { AboutTwo } from "./assets-one-three/aboutTwo";

export const TaskTwo = () => {
  const [sideSwitch, setSideSwitch] = useState();
  /*
    Verwende diesen State um zwischen den beiden Kompontenten zu wechseln, beim Wechsel der Komponenten sollte sich die Beschriftung des Buttons ebenfalls ändern.
    Button: "About" / "Home"
    Zusätzliche Aufgabe in aboutTwo.jsx
  */
  return (
    <article>
      <Home />
      <AboutTwo />
    </article>
  );
};
