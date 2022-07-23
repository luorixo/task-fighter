import React, {useState} from 'react';
import './tasksbar.css';
import Todo from './Todo';
import { motion } from "framer-motion";

function TaskBar() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const inputTextHandler = (e) =>{
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) =>{
    e.preventDefault();
    console.log(todos.length);
    if(inputText !== ""){
      setTodos([
        ...todos, {text: inputText, completed: false, id: Math.random()*1000}
      ])
      setInputText("");
    }
  };

  const deleteHandler = () => {
    todos.map(todo => setTodos(todos.filter((el) => el.id !== todos.todo.id)))
  };
    return (
    <>
    <nav className="navbar">
      <motion.div className="side" 
      initial={{y:-100}}
      animate={{y:20}}
      transition={{delay: 0.1, type: "spring", stiffness: 400}}>
      <form>
          <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input"/>
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
                />
            ))}
          </div>
        </div>
    </nav>
      
    </>
  )
}

export default TaskBar