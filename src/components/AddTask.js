import React, { useState } from 'react';


function AddTask({ addTask }) {

const [text, setText] = useState('');
const [day, setDate] = useState('');
const [reminder, setReminder] = useState(false);

const submitTask = (e) => {
    e.preventDefault()

    if(!text){
        alert('bro')
        return
    }

    addTask({text, day, reminder})

    setText('')
    setDate('')
    setReminder(false)
}

  return(
    <form className='add-form' onSubmit={submitTask}>
       <div className='form-control'>
           <label>Task</label>
           <input type="text" placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)}/>
       </div>
       <div className='form-control'>
           <label>Day and Time</label>
           <input type="datetime-local" placeholder='Add Task' value={day} onChange={(e) => setDate(e.target.value)}/>
       </div>
       <div className='form-control form-control-check'>
           <label>Reminder</label>
           <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
       </div>
       <input type="submit" value="Save Task" className='btn btn-block'/>
    </form>
  );
}

export default AddTask;
