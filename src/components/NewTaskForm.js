import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

export default function NewTaskForm({ onAdd, onDelete, label_ref }) {
  return (
    <div style={{ marginBottom: '16px' }}>
      <Stack direction="horizontal" gap={2}>
        {/* TODO: change gap-2 to 16px */}
        <Form.Control ref={label_ref} className="me-auto" placeholder="Add new task..." />
        <Button variant="primary" onClick={onAdd}>Add</Button>
        <Button variant="danger" onClick={onDelete}>Clear</Button>
      </Stack>
    </div>
  )
}