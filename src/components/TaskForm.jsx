import { useState, useContext } from 'react'
import {TaskContext} from '../context/TaskContext'

export default function TaskForm() {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const {createTask} = useContext(TaskContext)
    
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
        <div className='max-w-md mx-auto'>
            <form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4'>
                <h1 className='text-2xl font-bold text-white mb-3'>Crea tu Tarea</h1>
                <input className='bg-slate-300 p-3 w-full mb-2' 
                type="text" placeholder="Escribe una tarea"
                    onChange={(e) => setText(e.target.value)} value={text}
                    autoFocus />
                <textarea className='bg-slate-300 p-3 w-full mb-2' 
                placeholder='Fecha de la Tarea' onChange={(e) => setDay(e.target.value) }
                value={day}>
                </textarea>
                <button className='bg-indig-500 px-3 py-1 text-white'>
                    Save
                </button>
            </form>
        </div>
    )
}
