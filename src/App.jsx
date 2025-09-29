import { useState } from "react";
import TodoList from "./components/ToDoList.jsx";

export default function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (text) => {
    const newTodo = { id: Date.now(), text };
    setTodos((prev) => [...prev, newTodo]);
  };

  const handleDeleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TodoList
        todos={todos}
        onAddTodo={handleAddTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}
