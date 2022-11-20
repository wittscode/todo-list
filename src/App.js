import Task from "./Task";
import TaskForm from "./TaskForm";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [tasksList, setTasksList] = useState([])
``
  // Local Storage
  useEffect (() => {
    if (tasksList.length === 0) return;
    localStorage.setItem('tasksList', JSON.stringify(tasksList))
  }, [tasksList]);

  useEffect(() => {
    const tasksList  = JSON.parse(localStorage.getItem('tasksList'))
    setTasksList(tasksList);
  }, [])

  //Add New Tasks

  function addTask(name) {
    setTasksList(prev => {
      return [...prev, {name:name, done:false}]
    })
  }

  return (
    <main className="App">
      <TaskForm onAdd={(name) => addTask(name)} />

      {tasksList.map((task) => (
        <Task {...task} />
      ))}
      
    </main>
  );
}

export default App;
