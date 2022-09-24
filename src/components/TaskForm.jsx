import { useState } from 'react'

export default function TaskForm({ createTask }) {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        createTask({
            text,
            day
        });
        setText('')
        setDay('')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Escribe una tarea"
                    onChange={(e) => setText(e.target.value)} value={text}
                    autoFocus />
                <textarea 
                placeholder='Fecha de la Tarea' onChange={(e) => setDay(e.target.value) }
                value={day}>
                </textarea>
                <button>
                    Save
                </button>
            </form>
        </div>
    )
}
