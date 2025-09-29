import AddTodoForm from "./AddTodoForm";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, onAddTodo, onDeleteTodo }) {
  return (
    <div>
      <AddTodoForm onAddTodo={onAddTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            task={todo}
            onDelete={onDeleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}
