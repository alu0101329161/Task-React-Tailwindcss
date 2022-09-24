export default function TaskCard({ task, deleteTask }) {
  return (
    <div>
        <h1>{task.text}</h1>
        <p>{task.day}</p>
        <button onClick={() => deleteTask(task.id)}>
          Eliminar
        </button>
    </div>
  )
}