import React from "react";
import styles from './TodoList.module.css'
import TodoItem from "./TodoItem/TodoItem";


const TodoList = (props) => {

    let ObjTodos = props.todos.map( (el, index) => <TodoItem text={el.title} index={index} key={el.id} id={el.id} completed={el.completed} toggleTodos={props.toggleTodos}/>)

    return (<ul className={styles.listStyle}>

        {ObjTodos}

    </ul>)
}
export default TodoList