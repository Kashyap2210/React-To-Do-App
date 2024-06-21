export const markAsUnImp = (taskId, todos, setTodos) => {
  const unImpTodo = todos.map((todo) => {
    if (todo.id === taskId) {
      return { ...todo, status: false };
    } else {
      return todo;
    }
  });

  setTodos(unImpTodo);
};
