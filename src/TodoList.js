import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos, toggleTodo }) {
  if (!todos.length) return <p>No todos</p>
  return (
    todos.map(todo => {
      return <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
    })
  )
}
