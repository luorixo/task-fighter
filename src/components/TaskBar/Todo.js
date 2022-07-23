import { motion, AnimatePresence } from "framer-motion";
import React, {useState} from 'react';

const buttonVariants = {
    hover: {
        scale:0.9,
        transition:{
            yoyo: Infinity,
            duration: 0.3
        }
    }
}

function Todo({text, todo, todos, setTodos}) {
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return{
                    ...item,
                    completed: !item.completed,
                }
            }
            return item;
        }))
    };

    const [show, setShow] = useState(true);

  return (
    <motion.div variants = {buttonVariants}
    whileHover="hover">
        <motion.div 
    initial={{x:-30}}
    animate={{x:1}}
    transition={{type: "spring", stiffness: 400}}>
        <ul className={`todo ${todo.completed ? "completed" : ""}`}>
        <li className= {`todo-item ${todo.completed ? "completed" : ""}`}>{todo.text}</li>
        <button onClick={completeHandler} className="complete-btn"><motion.i className ="fas fa-check"
        initial={{opacity:-1}}
        animate={{opacity:1}}></motion.i></button>
        <button onClick={deleteHandler} className="trash-btn"><motion.i className="fas fa-trash"
        initial={{opacity:-6}}
        animate={{opacity:1}}></motion.i></button>
    </ul>
    </motion.div>
    </motion.div>
  )
}

export default Todo