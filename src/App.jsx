import TaskList from './components/TaskList.jsx'
import TaskForm from './components/TaskForm.jsx'
import { tasks as data } from './data/tasks'
import { useState, useEffect } from 'react'

function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    setTasks(data)
  }, [])

  function createTask(task) {
    setTasks([...tasks,
    {
      text: task.text,
      day: task.day,
      id: tasks.length
    }])
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </>
  )
}

export default App