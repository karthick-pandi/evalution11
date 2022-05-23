
import styles from "./task.module.css";



const Task = () => {
  // NOTE: do not delete `data-cy` key value pair
   
//  console.log(newTodo);

  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" 
     data-cy="task-checkbox" />
      <div data-cy="task-text" >
        {todos.map((e)=>(
          console.log(e)
        ))}
      </div>
      {/* Counter here */}
      <button data-cy="task-remove-button" onClick={()=>{
        setTodos([...todos,{text:newTodo}])
      }}></button>
    </li>
  );
};

export default Task;
