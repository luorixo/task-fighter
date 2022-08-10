import React from 'react';
import './tasksbar.css';
import Todo from './Todo';
import { motion } from "framer-motion";

function TaskBar({inputText, inputTextHandler, submitTodoHandler, todos, setTodos, CompleteTask, noFirstTask, setNumOfTasks, numOfTasks}) {
  
    return (
    <>
    <nav className="navbar">
      <motion.div className="side" 
      initial={{y:-100}}
      animate={{y:20}}
      transition={{delay: 0.1, type: "spring", stiffness: 400}}>
      <form>
          <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" maxLength={30}/>
          <motion.button onClick={submitTodoHandler} className="todo-button" type="submit">
            <motion.i className="fas fa-plus-square"
            whileHover={{textShadow: "0px 0px 8px rgb(255,255,255"}}></motion.i>
          </motion.button>
        </form>
      </motion.div>
        <div className="todo-container">
          <div className="todo-list">
            {todos.map((todo) => (
              <Todo 
                setTodos = {setTodos}
                todos = {todos}
                key = {todo.id}
                todo = {todo}
                text = {todo.text}
                CompleteTask = {CompleteTask}
                noFirstTask = {noFirstTask}
                setNumOfTasks = {setNumOfTasks}
                numOfTasks = {numOfTasks}
                />
            ))}
          </div>
        </div>
    </nav>
      
    </>
  )
}

export default TaskBar