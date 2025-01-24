
import React, { useState } from "react";
import styles from './Components/todo.module.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      const newTodo = { id: Date.now(), text: input };
      setTodos([...todos, newTodo]);
      setInput("");
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const deleteAll = () => {
    setTodos([]);
  };

  const editTodo = (id) => {
    const newValue = prompt("Enter updated value:");
    if (newValue) {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, text: newValue } : todo
        )
      );
    }
  };

  return (
    <div className={styles.App}>
      <h1>TODO App</h1>
      <div className={styles["input-container"]}>
        <input
          type="text"
          placeholder="Enter items..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={styles.input}
        />
        <button onClick={addTodo} className={styles.button}>
          Add Item
        </button>
        <button onClick={deleteAll} className={styles.button}>
          Delete All
        </button>
      </div>
      <ul className={styles["todo-list"]}>
        {todos.map((todo) => (
          <li key={todo.id} className={styles["todo-item"]}>
            {todo.text}
            <button
              onClick={() => editTodo(todo.id)}
              className={styles.button}
            >
              Edit
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className={styles.button}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
