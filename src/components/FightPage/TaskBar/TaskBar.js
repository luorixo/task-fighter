import React from 'react';
import './tasksbar.css';
import Todo from './Todo';

function TaskBar({inputText, inputTextHandler, submitTodoHandler, todos, setTodos, CompleteTask, noFirstTask, setNumOfTasks, numOfTasks}) {
  
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
                CompleteTask = {CompleteTask}
                noFirstTask = {noFirstTask}
                setNumOfTasks = {setNumOfTasks}
                numOfTasks = {numOfTasks}
                />
            ))}
          </ul>
        </div>
    </>
  )
}

export default TaskBar