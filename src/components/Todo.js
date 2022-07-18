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
    <ListGroup.Item variant={item_color} as='li' className="d-flex justify-content-between align-items-stretch" onClick={handleTodoClick}>
      <div className="ms-2 me-auto text-break">{todo.text}</div>
      <div className='ms-3 d-flex align-items-center'>
        <Badge bg={color} pill>{todo.completed ? 'Done' : ''}</Badge>
      </div>
    </ListGroup.Item>
  )
}
