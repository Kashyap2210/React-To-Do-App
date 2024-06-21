import Task from "./Task";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Lhssection({
  impTasks,
  completedTasks,
  // setImpTasks,
  impTasksFromTasksComp,
  completedTasksFromLhs,
  removeImpTasksFromImpSection,
  removeCompletedTasksFromCompletedSection,
}) {
  let [todos, setTodos] = useState([
    { task: "sample-task", id: uuidv4(), completed: false, status: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    // Update todos based on impTasks changes
    const updatedTodos = todos.map((todo) => {
      const impTask = impTasks.find((task) => task.id === todo.id);
      if (impTask) {
        return { ...todo, status: true };
      } else {
        return { ...todo, status: false };
      }
    });

    setTodos(updatedTodos);
  }, [impTasks]);

  useEffect(() => {
    const updatedTodos = todos.map((todo) => {
      const compTask = completedTasks.find((task) => task.id === todo.id);
      if (compTask) {
        return { ...todo, completed: true };
      } else {
        return { ...todo, completed: false };
      }
    });
    setTodos(updatedTodos);
    console.log("completed task", completedTasks);
  }, [completedTasks]);

  let updateTodoValueInInput = (event) => {
    console.log(event.target.value);
    setNewTodo(event.target.value);
  };

  let addNewTask = () => {
    setTodos((previousTodos) => [
      ...previousTodos,
      { task: newTodo, id: uuidv4(), completed: false, status: false },
    ]);
    setNewTodo("");
  };

  const addTaskToImpTasks = (task) => {
    impTasksFromTasksComp(task);
  };
  const addTaskToCompletedTasks = (task) => {
    completedTasksFromLhs(task);
  };

  const removeTaskFromImpTasks = (task) => {
    removeImpTasksFromImpSection(task);
  };
  const removeTaskFromCompletedTasks = (task) => {
    removeCompletedTasksFromCompletedSection(task);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add task"
        value={newTodo}
        onChange={updateTodoValueInInput}
      />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={addNewTask}>Add Task</button>
      <Task
        todos={todos}
        setTodos={setTodos}
        addTaskToImpTasks={addTaskToImpTasks}
        addTaskToCompletedTasks={addTaskToCompletedTasks}
        removeTaskFromImpTasks={removeTaskFromImpTasks}
        removeTaskFromCompletedTasks={removeTaskFromCompletedTasks}
      />
    </div>
  );
}
