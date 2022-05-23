import React from "react";
import styles from "./addTask.module.css";

import data from "../data/tasks.json";

const AddTask = ({newTodo,setNewtodo,setTodos,todos}) => {
  // NOTE: do not delete `data-cy` key value pair
  
  

  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" onChange={(e)=>{
        setNewtodo(e.target.value);
      }} />
      <button data-cy="add-task-button"
      onClick={()=>{
        setTodos([...todos,{text:newTodo}])
      }}>add</button>
    </div>
  );
};

export default AddTask;
