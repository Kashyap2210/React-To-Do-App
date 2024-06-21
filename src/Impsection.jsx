import React from "react";

export default function Impsection({ impTasks, removeImpTasksFromImpSection }) {
  if (!impTasks || impTasks.length === 0) {
    return <h2>Important Tasks</h2>;
  }

  const importantTasks = impTasks.filter((task) => task.status);

  const markAsUnImpTask = (taskId) => {
    const taskToUnmark = impTasks.find((task) => task.id === taskId);
    console.log("taskToUnmark", taskToUnmark);
    if (taskToUnmark) {
      removeImpTasksFromImpSection(taskToUnmark);
      // Call the function to unmark task in Lhssection
    }
  };

  return (
    <div>
      <h2>Important Tasks</h2>
      <ul>
        {importantTasks.length > 0 ? (
          importantTasks.map((task) => (
            <li key={task.id}>
              {task.task}
              <button
                className="button-element"
                onClick={() => {
                  markAsUnImpTask(task.id);
                }}
              >
                Unmark
              </button>
            </li>
          ))
        ) : (
          <li>No Important Tasks Currently</li>
        )}
      </ul>
    </div>
  );
}
