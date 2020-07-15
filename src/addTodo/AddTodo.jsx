import React, {useState} from "react";
import styles from './AddTodo.module.css'

const AddTodo = (props) => {

    const [inputValue, setInputValue] = useState('')

    const submitHandler = (event) => {
        event.preventDefault()

        if (inputValue.trim()) {
            props.createTodo(inputValue)
            setInputValue('')

        }

    }


    return (<form onSubmit={submitHandler}>
        <input value={inputValue} onChange={event => setInputValue(event.target.value)}/>
        <button className={styles.add} type="submit">Add todo</button>
    </form>)
}
export default AddTodo