import React from 'react';
import Task from './Task'

function Tasks({tasks, removeBtn, setReminder}) {
  return(
    <>
    {tasks.map((task, index) => (
        <Task key={index} task={task} removeBtn={removeBtn} setReminder={setReminder}/>
    ))}
    </>
  );
}

export default Tasks;
