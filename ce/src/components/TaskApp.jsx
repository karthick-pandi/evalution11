import React from "react";

import styles from "./taskApp.module.css";
import { TaskHeader } from "./TaskHeader";
import { AddTask } from "./AddTask";
import {Tasks}  from "./Tasks";
import data from "../data/tasks.json"
import { useState } from "react";


const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [newTodo,setNewtodo]=useState("");
   const [todos,setTodos]=useState([]);
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      <TaskHeader />
      {/* Header */}
      <AddTask newTodo={newTodo} setNewtodo={setNewtodo} setTodos={setTodos} todos={todos}></AddTask>
      {/* Add Task */}
      <Tasks data={data} >

      </Tasks>
    </div>
  );
};

export default TaskApp;
