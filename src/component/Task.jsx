import { useState } from "react"

function Task({ task, onDeleteTask, onUpdateTask }) {

    const onChecked = (e) => {
        onUpdateTask(task.id)
    }

    

    return (
        <li className="list-group-item">
            <div className="form-check d-flex justify-content-between align-items-center">
                <div>
                    <input checked={task.checked} type="checkbox" onChange={(e) => onChecked(e)} className="form-check-input" id={task.id} />
                    <label className={task.checked === true ? 'form-check-label text-muted text-decoration-line-through' : 'form-check-label text-muted'} htmlFor={task.id}>
                        {task.name}
                    </label>
                </div>
                <button onClick={() => onDeleteTask(task.id)} className="btn btn-sm btn-outline-danger">Delete</button>
            </div>
        </li>
    )
}

export default Task