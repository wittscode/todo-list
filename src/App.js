import Task from "./Task";
import TaskForm from "./TaskForm";
import "./App.css";
import { useState } from "react";


function App() {
  const [tasksList, setTasksList] = useState([])

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
