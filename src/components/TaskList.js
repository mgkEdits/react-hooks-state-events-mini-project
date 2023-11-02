import React from "react";
import Task from "./Task";

function TaskList({tasks, onHandleDelete}) {

  const updateTasks = tasks.map((task) => (
    <Task onHandleDelete={onHandleDelete} key={task.text} category={task.category} text={task.text}/>
  ))

  return (
    <div className="tasks"> {updateTasks} </div>
  
  );
}

export default TaskList;