import { useState } from "react";
import styles from "./NewTask.module.css";

const NewTask = ({addTask}) => {
  const [newTask, setNewTask] = useState("");
  const [newDay, setNewDay] = useState("");
  const taskChange = (e) => {
    setNewTask(e.target.value);
    console.log(newTask);
  };

  const dayChange = (e) => {
    setNewDay(e.target.value);
    // console.log(typeof (newDay));
  };

  const taskSubmit = (e) => {
    e.preventDefault();
    addTask(newTask, newDay);
  }
  return (
    <form className={styles.newTask} onSubmit={taskSubmit}>
      <label htmlFor="task">Task</label>
      <input type="text" id="task" name="task" placeholder="Task" onChange={taskChange} required/>
      <label htmlFor="day">Day & Time</label>
      <input
        type="date"
        name="day"
        placeholder="Day & Time"
        onChange={dayChange}
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default NewTask;
