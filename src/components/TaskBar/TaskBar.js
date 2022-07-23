import React, {useState} from 'react';
import './tasksbar.css';
import Todo from './Todo';

function TaskBar() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const inputTextHandler = (e) =>{
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) =>{
    e.preventDefault();
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
      <form>
          <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input"/>
          <button onClick={submitTodoHandler} className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
          </button>
        </form>
        <div className="todo-container">
          <ul className="todo-list">
            {todos.map((todo) => (
              <Todo 
                setTodos = {setTodos}
                todos = {todos}
                key = {todo.id}
                todo = {todo}
                text = {todo.text}
                />
            ))}
          </ul>
        </div>
    </>
  )
}

export default TaskBar