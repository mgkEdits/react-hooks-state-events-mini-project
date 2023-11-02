import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {

  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState("All")
  
  function handleDelete(deletedTaskText) {
    setTasks(tasks.filter((task) => task.text !== deletedTaskText));
  }
  
  function handleAddTask(newTask) {
    setTasks([...tasks, newTask])
  }

  const visibleTasks = tasks.filter(
    (task) => category === 'All' || task.category === category
  )
  
    return (
      <div className="App">
        <h2>My tasks</h2>
        <CategoryFilter categories={CATEGORIES} selectedCategory={category} onCategoryFilter={setCategory}/>
        <NewTaskForm onTaskFormSubmit={handleAddTask} categories={CATEGORIES.filter((category) => category !== "All")}/>
        <TaskList onHandleDelete={handleDelete} tasks={visibleTasks}/>
      </div>
    );
  }
  
  export default App;
