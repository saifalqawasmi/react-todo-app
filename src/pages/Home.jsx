import { useEffect, useState } from "react"

import Task from "../component/Task"
import AddTaskBar from "../component/addTaskBar"
import TasksCard from "../component/TasksCard"

function Home() {

    const [tasks, setTasks] = useState([])

    const [selectedI, setSelectedI] = useState(0)

    useEffect(() => {
        console.log(tasks)
    })

    const addTask = (taskValue) => {

        const newTask = {
            id: tasks.length,
            name: taskValue,
            checked: false
        }

        setTasks(prevTasks => [...prevTasks, newTask])
    }

    const updateTask = (taskId) => {
        console.log(taskId)
        setTasks(prevTasks => prevTasks.map(task =>
            task.id === parseInt(taskId) ? { ...task, checked: !task.checked } : task
        ));
    }

    const deleteTask = (taskId) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
    }

    return (
        <>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10">
                        <div className="text-center mb-5">
                            <h1 className="display-4 text-primary">Todo App</h1>
                            <p className="lead text-muted">Organize your tasks efficiently</p>
                        </div>

                        <AddTaskBar onAddTask={addTask} />
                        <TasksCard tasks={tasks} selectedI={selectedI} setSelectedI={setSelectedI} >
                            {selectedI === 0 && tasks.map(task => (<Task key={task.id} task={task} onDeleteTask={deleteTask} onUpdateTask={updateTask}/>))}
                            {selectedI === 1 && tasks.filter(task => !task.checked).map(task => (<Task key={task.id} task={task} onDeleteTask={deleteTask} onUpdateTask={updateTask}/>))}
                            {selectedI === 2 && tasks.filter(task => task.checked).map(task => (<Task key={task.id} task={task} onDeleteTask={deleteTask} onUpdateTask={updateTask}/>))}
                        </TasksCard>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home