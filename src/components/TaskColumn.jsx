import React from 'react'
import "./TaskColumn.css"
import TaskCard from './TaskCard';
import DropArea from './DropArea';

const TaskColumn = ({
  title,
  icon,
  tasks,
  status,
  handleDelete,
  setActiveCard,
  onDrop
}) => {
  return (
     <section className="task_column">
      <h2 className='task_column_heading'>
      <img className="task_column_icon" src={icon} alt=''></img>
        {title}
      </h2>
      <DropArea onDrop={() => onDrop(status, 0)} />
      {
        tasks.length>0?(
        tasks.map((task, index) =>
          task.status === status &&
          (
            <React.Fragment key={index}>
            <TaskCard
            title={task.task}
            tags={task.tags}
            handleDelete={handleDelete}
            index={index}
            setActiveCard={setActiveCard}
              />
              <DropArea onDrop={()=>onDrop(status,index+1)} />
            </React.Fragment>
          )
          )
        ) : (
              <p>No tasks available</p>
              
              )
            
    }
      </section>
    
  );
}

export default TaskColumn
