'use client';

import { useState } from 'react';

export default function Home() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = () => {
    if (!todo.trim()) return;
    setTodos([...todos, todo]);
    setTodo('');
  };

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <main>
      <h1>✅ Todo App</h1>

      <div className="input-group">
        <input
          type="text"
          placeholder="Conquer chaos! one task at a time..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      {todos.length === 0 ? (
        <p className="empty">No todos yet ✨</p>
      ) : (
        <ul>
          {todos.map((t, index) => (
            <li key={index}>
              <span className="todo-text">{t}</span>
              <button className="delete-btn" onClick={() => deleteTodo(index)}>
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
