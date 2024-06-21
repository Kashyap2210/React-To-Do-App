import React from "react";

export default function Completedtasks({
  completedTasks,
  removeCompletedTasksFromCompletedSection,
}) {
  if (!completedTasks || completedTasks.length === 0) {
    return <h2>Completed Tasks</h2>;
  }

  const completedTask = completedTasks.filter((task) => task.completed);

  const markAsIncomplete = (taskId) => {
    const taskToUnmark = completedTasks.find((task) => task.id === taskId);

    console.log("taskToUnmark    =>", taskToUnmark);
    if (taskToUnmark) {
      removeCompletedTasksFromCompletedSection(taskToUnmark);
      // Call the function to unmark task in Lhssection
    }
  };

  return (
    <div>
      <h2>Completed Tasks</h2>
      <ul>
        {completedTask.length > 0 ? (
          completedTask.map((task) => (
            <li key={task.id}>
              {task.task}
              <button
                onClick={() => {
                  markAsIncomplete(task.id);
                }}
              >
                Unmark
              </button>
            </li>
          ))
        ) : (
          <li>No Completed Tasks Currently</li>
        )}
      </ul>
    </div>
  );
}
