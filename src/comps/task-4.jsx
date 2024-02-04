import { useState } from "react";
import { Profile } from "./assets-four-end/profile";

export const TaskFour = () => {
  const [user, setUser] = useState({
    name: "John",
    age: 30,
    email: "john@mail.com",
    married: true,
    familly: ["wife", "son", "daughter"],
    interests: ["reading", "music"],
  });

  /*
    Sorge dafür, dass die Daten Korekt angezeigt werden. Anschließend solge dafür, dass im Console.log der richige wert steht. Das console.log darf verändet oder verschoben werden!
  */

  return (
    <article>
      <Profile user={[user, setUser]} />
    </article>
  );
};
