import { useState } from 'react'
import CategoryBtn from './categoryButton'



function TasksCard({children, tasks, selectedI, setSelectedI}) {

    const calcTasksLeft = () => {
        const tasksLeft = tasks.filter(task => task.checked === false).length
        return tasksLeft
    }

    const categories = [
        {id: 1, text: 'All', color: 'primary'},
        {id: 2, text: 'Active', color: 'secondary'},
        {id: 3, text: 'Completed', color: 'secondary'}
    ]

    return (
        <div className="card shadow-sm">
            <div className="card-header bg-white">
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">My Tasks</h5>
                    <span className="badge bg-primary rounded-pill">{tasks.length}</span>
                </div>
            </div>
            <div className="card-body p-0">
                <ul className="list-group list-group-flush">
                    {children}
                </ul>
            </div>
            <div className="card-footer bg-white">
                <div className="d-flex justify-content-between">
                    <span className="text-muted">{calcTasksLeft()} items left</span>
                    <div>
                        {categories.map((category, index) => <CategoryBtn onClick={() => {setSelectedI(index)}} key={category.id} text={category.text} color={category.color} active={selectedI === index ? 'active': ''}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TasksCard