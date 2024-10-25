// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([{ text: "Eggs" }, { text: "Milk" }, { text: "Cheese" }]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask }]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const editTask = (index) => {
    setEditIndex(index);
    setEditText(tasks[index].text);
  };

  const saveEditTask = () => {
    const newTasks = [...tasks];
    newTasks[editIndex].text = editText;
    setTasks(newTasks);
    setEditIndex(null);
    setEditText("");
  };

  return (
    <div className="container">
      <h1>Grocery Shopping</h1>
      <div className="task-list">
        {tasks.map((task, index) => (
          <div key={index} className="task-item">
            {editIndex === index ? (
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onBlur={saveEditTask}
              />
            ) : (
              <div className="task-text">{task.text}</div>
            )}
            <div className="task-actions">
              <button onClick={() => deleteTask(index)} className="delete-btn">🗑</button>
              <button onClick={() => editTask(index)} className="edit-btn">✏️</button>
            </div>
          </div>
        ))}
      </div>
      <div className="input-group">
        <input
          type="text"
          placeholder="Add something to your list"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <button className="delete-all-btn" onClick={() => setTasks([])}>Delete List</button>
    </div>
  );
}

export default App;
