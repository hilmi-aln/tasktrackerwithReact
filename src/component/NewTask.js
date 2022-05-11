import { useState } from "react";
import styles from "./NewTask.module.css";

const NewTask = ({ addTask }) => {
  const [newTask, setNewTask] = useState("");
  const [newDay, setNewDay] = useState("");

  const taskChange = (e) => {
    setNewTask(e.target.value.toLowerCase());
    // console.log(newTask);
  };

  const dayChange = (e) => {
    setNewDay(e.target.value);
    // console.log(typeof (newDay));
    // console.log(newDay);
  };

  const taskSubmit = (e) => {
    e.preventDefault();
    // console.log(newTask.trim().length);
    if (newTask.trim().length === 0 || newDay.trim().length === 0) {
      alert("Please enter task and day");
    } else {
      addTask(newTask, newDay);
    }
  };

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

if (dd < 10) {
   dd = '0' + dd;
}

if (mm < 10) {
   mm = '0' + mm;
} 
    
today = yyyy + '-' + mm + '-' + dd;
// console.log(today);
  return (
    <form className={styles.newTask} onSubmit={taskSubmit}>
      <label htmlFor="task">Task</label>
      <input
        type="text"
        id="task"
        name="task"
        placeholder="Task"
        onChange={taskChange}
        required
      />
      <label htmlFor="day">Day & Time</label>
      <input
        type="date"
        name="day"
        placeholder="Day & Time"
        onChange={dayChange}
        required
        min={today}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default NewTask;
