import React, { useState, useRef, useEffect } from 'react';
import TodoList from './components/TodoList';
import NewTaskForm from './components/TaskForm';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos';

function App() {
  const [todos, setTodos] = useState([]);

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

  var completedTodos = todos.filter(todo => !todo.completed).length
  completedTodos = completedTodos ? completedTodos : 'no'

  return (
    <div className="d-flex flex-column min-vh-100" style={{ width: '100%', height: '100%' }}>
      <div className='d-flex justify-content-center'>
        <div style={{ padding: '16px', maxWidth: '450px' }}>
          <h1 className='text-center' style={{ textAligin: 'center' }}>Simple Task List</h1>
          <h6 className='text-center text-muted mb-3' style={{ textAligin: 'center' }}>
            You have {completedTodos} tasks to do
          </h6>
          <NewTaskForm onAdd={addHandler} onDelete={clearHandler} label_ref={todoNameRef} />
          <TodoList todos={todos} toggleTodo={toggleTodo} />
        </div>
      </div>

      <footer className="mt-auto footer">
        <div className="container" style={{ padding: '0px 16px 16px' }}>
          <div className="muted text-center text-muted">
            Simple Task List • Created with ♡ by {' '}
            <a href="https://github.com/CyberPotat42" className="text-decoration-none" title="Check out my GitHub!">
              Cyber Potato
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App;
