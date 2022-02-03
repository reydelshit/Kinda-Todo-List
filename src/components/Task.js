import React from 'react';
import { FaTimes } from 'react-icons/fa'

function Task({task, removeBtn, setReminder}) {

  return(
      <div onDoubleClick={() => setReminder(task.id)} className={`task ${task.reminder ? 'reminder' : ''}`}>
         <h3>{task.text} <FaTimes style={{color: 'red', pointer: 'cursor'}} onClick={() => removeBtn(task.id)}/></h3>
         <p>{task.day}</p>
      </div>
  );
}

export default Task;
