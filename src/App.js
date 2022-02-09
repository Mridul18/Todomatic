import React, { useState } from "react";
import Task from "./Components/Task";

function App() {
  const [taskName, setTaskName] = useState("");
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    setTaskList([...taskList, taskName]);
    setTaskName("");
  };

  return (
    <div className="App">
      <h1>To-Do Matic</h1>
      <input
        type="text"
        placeholder="Here goes your task"
        onChange={(e) => {
          setTaskName(e.target.value);
        }}
      ></input>
      <button onClick={addTask}>Add Task</button>

      {taskList.map((task) => {
        return <Task taskName={task} />;
      })}
    </div>
  );
}

export default App;
