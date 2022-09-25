import { createContext, useState, useEffect } from 'react'
import { tasks as data } from '../data/tasks'

export const TaskContext = createContext()
export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([])

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

  useEffect(() => {
    setTasks(data)
  }, [])

  return (
    <TaskContext.Provider value={{
      tasks,
      createTask,
      deleteTask
    }}>{props.children}
    </TaskContext.Provider>
  );
}