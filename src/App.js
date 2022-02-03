import Header from './components/Header'
import './index.css';
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useEffect, useState } from 'react'


function App() {
  const [tasks, setTasks] = useState([]);


  useEffect(() => {
    const getData = async () => {
      const getDataFetch = await fetchData()
      setTasks(getDataFetch)

    }
    getData()
  }, [])

  const fetchData = async () => {
    const dataFetch = await fetch('https://my-json-server.typicode.com/reydelshit/JSON-Place-Holder/tasks')
    const res = await dataFetch.json()
    return res
  }

  
  const [showTask, setShowTask] = useState(false);

  const submitTask = async (task) => {
    const response = await fetch('https://my-json-server.typicode.com/reydelshit/JSON-Place-Holder/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const data = await response.json()

    setTasks([...tasks, data])
  }

  const removeBtn = async (id) => {
    await fetch(`https://my-json-server.typicode.com/reydelshit/JSON-Place-Holder/tasks/${id}`,{
      method: 'DELETE',
    })
    setTasks(tasks.filter((e) => e.id != id))
  }

  const fetchDataTask = async (id) => {
    const dataFetch = await fetch(`https://my-json-server.typicode.com/reydelshit/JSON-Place-Holder/tasks/${id}`)
    const res = await dataFetch.json()
    return res
  }

  const setReminder = async (id) => {
    const taskData = await fetchDataTask(id)
    const updatedTask = { ...taskData, reminder: !taskData.reminder}

    const response  = await fetch(`https://my-json-server.typicode.com/reydelshit/JSON-Place-Holder/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })

    const res = await response.json()


    await fetch('https://my-json-server.typicode.com/reydelshit/JSON-Place-Holder/tasks/')
    setTasks(tasks.map((rem) => rem.id === id ? {...rem, reminder: res.reminder} : rem))
}



  
  return (
    <div className="container">
      <Header title="Task Tracker" taskShow={() => setShowTask(!showTask)} showTitle={showTask}/>
      
     {showTask && <AddTask addTask={submitTask}/>}
      {tasks.length ? <Tasks tasks={tasks} removeBtn={removeBtn} setReminder={setReminder}/> : 'no task to show'}
    </div>
  );
}

export default App;
