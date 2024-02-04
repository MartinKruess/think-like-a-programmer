import { useState } from "react";
import { About } from "./assets-one-three/about";
import { Home } from "./assets-one-three/home";

export const TaskOne = () => {
  const [sideSwitch, setSideSwitch] = useState(false);

  /*
    Verwende diesen State um zwischen den beiden Kompontenten zu wechseln, beim Wechsel der Komponenten sollte sich die Beschriftung des Buttons ebenfalls ändern.
    Button: "About" / "Home"
    NUR 1 BUTTON
  */

  return (
    <article>
      <Home />
      <About />
    </article>
  );
};
