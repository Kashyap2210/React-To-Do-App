import { useState } from "react";
import Completedtasks from "./Completedtasks";
import Impsection from "./Impsection";
import Lhssection from "./Lhssection";
// import Section from "./Lhssection";
import "./main.css";

// export { removeImpTasksFromImpSection };
export default function Dashboard() {
  const [impTasks, setImpTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const impTasksFromTasksComp = (task) => {
    setImpTasks((prevImpTasks) => [...prevImpTasks, task]);
  };

  const completedTasksFromLhs = (task) => {
    setCompletedTasks((prevCompletedTasks) => [...prevCompletedTasks, task]);
  };

  const removeImpTasksFromImpSection = (taskToRemove) => {
    setImpTasks((prevImpTasks) =>
      prevImpTasks.filter((task) => task.id !== taskToRemove.id)
    );
  };

  const removeCompletedTasksFromCompletedSection = (taskToRemove) => {
    console.log({ taskToRemove });
    const newTasks = completedTasks.filter(
      (task) => task.id !== taskToRemove.id
    );
    setCompletedTasks(newTasks);
    console.log(completedTasks);
  };

  return (
    <div className="containerDiv">
      <div className="lhsSideOfPage">
        <Lhssection
          impTasksFromTasksComp={impTasksFromTasksComp}
          completedTasksFromLhs={completedTasksFromLhs}
          removeImpTasksFromImpSection={removeImpTasksFromImpSection}
          removeCompletedTasksFromCompletedSection={
            removeCompletedTasksFromCompletedSection
          }
          impTasks={impTasks}
          setImpTasks={setImpTasks}
          completedTasks={completedTasks}
        />
      </div>
      <div className="rhsSideOfPage">
        <div className="markTaskAsImportant">
          <Impsection
            impTasks={impTasks}
            removeImpTasksFromImpSection={removeImpTasksFromImpSection}
          />
        </div>
        <div className="markTaskAsCompleted">
          <Completedtasks
            completedTasks={completedTasks}
            removeCompletedTasksFromCompletedSection={
              removeCompletedTasksFromCompletedSection
            }
          />
        </div>
      </div>
    </div>
  );
}
