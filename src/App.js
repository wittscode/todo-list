import Task from "./Task";
import TaskForm from "./TaskForm";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [tasksList, setTasksList] = useState([])
 
  // Local Storage
  // useEffect (() => {
  //   if (tasksList.length === 0) return;
  //   localStorage.setItem('tasksList', JSON.stringify(tasksList))
  // }, [tasksList]);

  // useEffect(() => {
  //   const tasksList  = JSON.parse(localStorage.getItem('tasksList'))
  //   setTasksList(tasksList);
  // }, [])

  //Add New Tasks

  function addTask(name) {
    setTasksList(prev => {
      return [...prev, {name:name, done:false}]
    })
  }

  function updateTaskDone(taskIndex, newDone) {
    setTasksList(prev => {
      const newTasksList = [...prev];
      newTasksList[taskIndex].done = newDone;
      return newTasksList;
    })
  }

  const numberCompleted = tasksList.filter(task => task.done).length;
  const numberTotal = tasksList.length;

  function getMessage() {
    const percentageDone = Math.trunc((numberCompleted/numberTotal)*100);
    if (numberTotal === 0) {
      return `Start adding some works for today`
    } else {
      if (percentageDone === 0) {
        return `Here's your works for today, knock some off!`
      } 
  
      if (percentageDone > 0 && percentageDone < 100) {
        return `${percentageDone}% Done, ${100 - percentageDone}% to go!`
      }
      
      if (percentageDone === 100) {
        return `Work's done today, take some time off`
      }
    }
  }

  return (
    <main className="App">
      <h1>{numberCompleted}/{numberTotal} Complete</h1>
      <h2>{getMessage()}</h2>
      <TaskForm onAdd={(name) => addTask(name)} />

      {tasksList.map((task, index) => (
        <Task {...task} onToggle={done => updateTaskDone(index, done)} />
      ))}
      
    </main>
  );
}

export default App;
