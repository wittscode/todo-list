import React from 'react'
import Checkbox from './Checkbox'

function Task({name, done, updateTaskDone, id, deleteTask}) {
  return (
    <div className={'task ' + (done? 'done' : 'not-done')}>
        <Checkbox checked={done} onClick={() => updateTaskDone(id, !done)}/>
        <span>{name}</span>
      <button onClick={() => deleteTask(id)}>Remove</button>
     </div>
  )
}

export default Task




