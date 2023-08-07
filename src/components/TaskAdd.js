import React, { useState } from "react";
import "./AddTask.css";
export default function TaskAdd({ tasks, setTasks }) {
  const [taskValue, setTaskValue] = useState("");
  const [progress, setProgress] = useState(false);
  const handleChange = (e) => {
    setTaskValue(e.target.value);
  };
  const handleReset = () => {
    setTaskValue("");
    setProgress(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      id: Math.floor(Math.random() * 100000),
      name: taskValue,
      completed: Boolean(progress),
    };
    setTasks([...tasks,task]) ;
    console.log(task);
    handleReset();
  };
  return (
    <section className="addtask">
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">Task Name : </label>
        <input
          type="text"
          onChange={handleChange}
          value={taskValue}
          name="task"
          id="task"
          placeholder="task name"
          autoComplete="off"
        />
        <select
          name=""
          id=""
          onChange={(e) => {
            setProgress(e.target.value);
          }}
          value={progress}
        >
          <option value={false}>Pending</option>
          <option value={true}>Completed</option>
        </select>
        <span onClick={handleReset} className="reset">
          Reset
        </span>
        <button type="submit">add task</button>
      </form>
      <p>{taskValue}</p>
    </section>
  );
}
