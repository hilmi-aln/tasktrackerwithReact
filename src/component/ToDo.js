import { useState } from "react";
import NewTask from "./NewTask";
import styles from "./toDo.module.css";
import { BiCheck } from "react-icons/bi";
import { ImCross } from "react-icons/im";

const ToDo = () => {
  const [tasks, setTasks] = useState([
    {
      id: Math.random(),
      text: "learn react",
      day: "monday",
    },
  ]);

  const addTask = (text, day) => {
    tasks.forEach((task) => {
      if (Object.values(task).includes(text)) {
        alert("Task already exists");
      } else {
        setTasks([...tasks, { id: Math.random(), text: text, day: day }]);
      }
    });
    setTasks([...tasks, { id: Math.random(), text: text, day: day }]);
  };

  const deleteClick = (id) => {
    setTasks(tasks.filter((task) => task.id !== Number(id)));
    // console.log("objects");
  };

  const removeTask = (e) => {
    const id = Number(e.target.id);
    deleteClick(id);
  };

  return (
    <div className={styles.tasks}>
      <NewTask addTask={addTask} />

      {tasks.map((task) => {
        return (
          <div className={styles.taskList} key={task.id}>
            <p>
              <BiCheck /> <span className={styles.text}>{task.text} </span>
              <ImCross
                className={styles.cross}
                id={task.id}
                onClick={removeTask}
              />
              <span className={styles.day}>{task.day}</span>{" "}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ToDo;
