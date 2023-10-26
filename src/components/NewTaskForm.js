import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [newTaskText, setNewTaskText] = useState("");
  const [newTaskCategory, setNewTaskCategory] = useState("All");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { text: newTaskText, category: newTaskCategory };
    onTaskFormSubmit(newTask);
    setNewTaskText("");
    setNewTaskCategory("All");
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={newTaskText} onChange={(e) => setNewTaskText(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category" value={newTaskCategory} onChange={(e) => setNewTaskCategory(e.target.value)}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;