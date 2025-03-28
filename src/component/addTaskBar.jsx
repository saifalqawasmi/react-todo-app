import { useState } from "react"

function AddTaskBar({onAddTask}) {
    const [taskValue, setTaskValue] = useState('')

    const handleTaskValue = (e) => {
        e.preventDefault()
        setTaskValue('')
    }

    return (
        <div className="card shadow-sm mb-4">
            <div className="card-body">
                <form onSubmit={(e) => handleTaskValue(e)} className="row g-2">
                    <div className="col-md-9">
                        <input className="form-control form-control-lg" placeholder="Add a new task..." value={taskValue} onChange={(e) => setTaskValue(e.target.value)} />
                    </div>
                    <div className="col-md-3">
                        <button onClick={() => onAddTask(taskValue)} className="btn btn-primary btn-lg w-100">Add Task</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddTaskBar