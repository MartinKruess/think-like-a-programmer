import "./App.css";
import { TaskOne } from "./comps/task-1";
import { TaskTwo } from "./comps/task-2";
import { TaskThree } from "./comps/task-3";
import { TaskFour } from "./comps/task-4";
import { TaskFive } from "./comps/task-5";

function App() {
  return (
    <main>
      <section>
        <h2>Task One</h2>
        <TaskOne />
        <h2>Task Two</h2>
        <TaskTwo />
        <h2>Task Three</h2>
        {/* <TaskThree /> */}
        <h2>Task Four</h2>
        {/* <TaskFour /> */}
        <h2>Task Five</h2>
        {/* <TaskFive /> */}
      </section>
    </main>
  );
}

export default App;
