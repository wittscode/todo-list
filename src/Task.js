import React from 'react'
import Checkbox from './Checkbox'

function Task({name, done, onToggle, id, deleteTask}) {
  return (
    <div className={'task ' + (done? 'done' : 'not-done')}>
        <Checkbox checked={done} onClick={() => onToggle(!done)}/>
        <span>{name}</span>
      <button onClick={() => deleteTask(id)}>Remove</button>
     </div>
  )
}

export default Task




