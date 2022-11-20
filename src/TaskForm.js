import React, { useState } from 'react'

function TaskForm({onAdd}) {
    const [taskName, setTaskName] = useState('');

    function handleSubmit(ev) {
        ev.preventDefault();
        onAdd(taskName);
        setTaskName('');
    }
  
    return (
    <form onSubmit={ev => handleSubmit(ev)}>
        <input 
            type="text" 
            value={taskName} 
            onChange={ev => setTaskName(ev.target.value)}
            placeholder="Your next tasks..." />
        <button>Add</button>
    </form>
  )
}

export default TaskForm