import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

export default function Todo({ todo, toggleTodo }) {
  var color = todo.completed ? 'success' : 'primary'
  var item_color = todo.completed ? 'success' : ''
  function handleTodoClick() {
    toggleTodo(todo.id)
  }

  return (
    <ListGroup.Item variant={item_color} as='li' className="d-flex justify-content-between align-items-start align-items-center" onClick={handleTodoClick}>
      <div className="ms-2 me-auto">
        {todo.text}
      </div>
      <Badge bg={color} pill>
        {todo.completed ? 'Done' : ''}
      </Badge>
    </ListGroup.Item>
  )
}
