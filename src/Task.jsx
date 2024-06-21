import Button from "./Button";
import "./main.css";

export default function Task({
  todos,
  setTodos,
  addTaskToImpTasks,
  addTaskToCompletedTasks,
  removeTaskFromImpTasks,
  removeTaskFromCompletedTasks,
}) {
  const markAsImp = (taskId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === taskId ? { ...todo, status: true } : todo
    );
    const newImpTask = updatedTodos.find((todo) => todo.id === taskId);
    setTodos(updatedTodos);
    addTaskToImpTasks(newImpTask);
  };

  const markAsCompleted = (taskId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === taskId) {
        console.log("Updated todo:", { ...todo, completed: true }); // Log updated todo
        return { ...todo, completed: true };
      } else {
        return todo;
      }
    });

    // const completedTask = todos.find((todo) => todo.id === taskId);

    // Remove this line:
    // removeTaskFromCompletedTasks(completedTask);

    // Update todos state to remove the completed task
    const remainingTodos = todos.filter((todo) => todo.id !== taskId);
    setTodos(remainingTodos);

    // Add the task to completed tasks
    const newCompletedTask = updatedTodos.find((todo) => todo.id === taskId);
    addTaskToCompletedTasks(newCompletedTask);
  };

  const deleteTask = (taskId) => {
    const remainingTodos = todos.filter((todo) => todo.id !== taskId);
    const deletedTask = todos.find((todo) => todo.id === taskId);

    setTodos(remainingTodos);

    // Remove from important tasks
    removeTaskFromImpTasks(deletedTask);

    // Remove from completed tasks
    removeTaskFromCompletedTasks(deletedTask);
  };

  return (
    <div className="task-main-div">
      <ul>
        {todos.map((task) => (
          <li key={task.id}>
            <div className="task">
              {task.task}
              <div className="button-div-task">
                {task.status === true ? (
                  ""
                ) : (
                  <Button
                    label={"Important"}
                    onClick={() => markAsImp(task.id)} // Pass taskId to markAsImp function
                  />
                )}

                {task.completed === true ? (
                  ""
                ) : (
                  <Button
                    label={"Complete"}
                    onClick={() => markAsCompleted(task.id)} // Pass taskId to markAsImp function
                  />
                )}
                <Button label={"Delete"} onClick={() => deleteTask(task.id)} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
