import React, {useContext} from "react";
import styles from './TodoItem.module.css'
import Context from "../../context";

const TodoItem = (props) => {

    const {removeTodo} = useContext(Context)

    return (
        <li className={styles.listItem}>
            <span className={props.completed ? styles.done : null}>
                <input
                    type="checkbox"
                    onChange={() => {props.toggleTodos(props.id)}}
                    checked={props.completed}
                />
                <strong>{props.index + 1}</strong>
                &nbsp;
                {props.text}
            </span>
            <button className={styles.rm} onClick={() => {removeTodo(props.id)}}>&times;</button>
        </li>

    )
}
export default TodoItem

