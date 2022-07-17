import React from 'react'
import Todo from './Todo'
import ListGroup from 'react-bootstrap/ListGroup';

export default function TodoList({ todos, toggleTodo }) {
  // if (!todos.length) return <p>No todos</p>
  return (
    <ListGroup as="ol" numbered>
      {todos.map(todo => {
        return <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      })}
    </ListGroup>
  )
}
