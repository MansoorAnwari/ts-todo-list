import { useState } from "react";
import { TodoItem } from "./type";
import "./App.css";
import { Todo } from "./Todo";

function App() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [input, setInput] = useState("");

  const addTodo = (text: string) => {
    if (text.trim() === "") return;

    const newTodo: TodoItem = {
      id: Date.now(),
      text,
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);
    setInput("");
  };

  const toggleTodo = (id: number) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );

    setTodos(newTodos);
  };

  return (
    <main>
      <h2>My TODO List</h2>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => addTodo(input)}>Add</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </main>
  );
}

export default App;
