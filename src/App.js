import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

// import logo from './logo.svg';
// import './App.css';

const LOCAL_STORAGE_KEY = 'todoApp.todos';

function App() {
  const [todos, setTodos] = useState(
    [
      // { id: 1, text: 'Learn React', completed: false },
      // { id: 2, text: 'Learn Vue', completed: false },
      // { id: 3, text: 'Learn Angular', completed: false },
    ]
  );

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.completed = !todo.completed
    setTodos(newTodos)
  }

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos])

  const todoNameRef = useRef();
  function addHandler(e) {
    const name = todoNameRef.current.value
    if (!name) return;
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), text: name, completed: false }]
    });
    todoNameRef.current.value = null;
  }

  function clearHandler() {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos);
  }

  return (
    <>
      <input type="text" ref={todoNameRef} />
      <button onClick={addHandler}>Add</button>
      <button onClick={clearHandler}>Delete</button>
      <div>{todos.filter(todo => !todo.completed).length} left to do</div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </>
  )
}

export default App;
