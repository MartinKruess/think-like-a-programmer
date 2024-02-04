import { useState } from "react";
import { AboutTwo } from "./assets-one-three/aboutTwo";
import { Home } from "./assets-one-three/home";
import { Contact } from "./assets-one-three/contact";

export const TaskThree = () => {
  const [sideSwitch, setSideSwitch] = useState();

  /*
    Verwende diesen State um zwischen den DREI Kompontenten zu wechseln. Verwende einen String um den State zu verwalten, es gibt diesesmal 3 Seiten.
    String: "About" / "Contact" / "Home"
    Es darf nur einen State geben!
  */

  return (
    <article>
      <Home />
      <AboutTwo />
      <Contact />
    </article>
  );
};
