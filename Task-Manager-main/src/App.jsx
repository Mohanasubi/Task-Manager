import React, {useState,useEffect} from 'react'
import "./App.css"
import TaskForm from './components/TaskForm';
import TaskColumn from './components/TaskColumn';
import todoIcon from "./assets/direct-hit.png"
import doingIcon from "./assets/glowing-star.png"
import doneIcon from './assets/check-mark-button.png'
import reviewIcon from './assets/review.png'

const oldTasks = localStorage.getItem("tasks")

 const handleEdit = (index, newTitle, newTags) => {
   const updatedTasks = tasks.map((task, i) =>
     i === index ? { ...task, task: newTitle, tags: newTags } : task
   );
   setTasks(updatedTasks);
 };

const App = () => {
  const [tasks, setTasks] = useState(oldTasks ? JSON.parse(oldTasks) : [])
  const [activeCard,setActiveCard] = useState(null)

  useEffect(() => {
    if (tasks) {
      localStorage.setItem("tasks", JSON.stringify(tasks))
    }
  },[tasks])
  const handleDelete = (taskIndex) => {
   const newTasks = tasks.filter((task, index) => index !== taskIndex)
    setTasks(newTasks)
  }

  const onDrop = (status,position) => {
    if (activeCard == null || activeCard === undefined)
      return;
    const taskToMove = tasks[activeCard];
    const updatedTasks = tasks.filter((task, index) => index !== activeCard)
    
    updatedTasks.splice(position, 0, {
      ...taskToMove,
      status:status
    })

    setTasks(updatedTasks)
  }
  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn
          title="To Do"
          icon={todoIcon}
          tasks={tasks}
          status="todo"
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <TaskColumn
          title="In Progress"
          icon={doingIcon}
          tasks={tasks}
          status="In Progress"
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <TaskColumn
          title="Review"
          icon={reviewIcon}
          tasks={tasks}
          status="Review"
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <TaskColumn
          title="Completed"
          icon={doneIcon}
          tasks={tasks}
          status="Completed"
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
      </main>
    </div>
  );
}

export default App
