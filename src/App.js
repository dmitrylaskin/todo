import React, {useEffect, useState} from 'react';
import './index.css';
import TodoList from "./todo/TodoList";
import Context from "./context";
import AddTodo from "./addTodo/AddTodo";
import Loader from "./addTodo/Loader";


function App() {

    const [todos, setTodos] = useState([])
    const [loader, setLoader] = useState(true)

    const toggleTodos = (id) => {

        setTodos(todos.map( el => {
            if (el.id === id) {
                el.completed = !el.completed
            }
            return el
        }))
    }

    const removeTodo = (id) => {
        setTodos(todos.filter(el => el.id !== id))
    }
    const createTodo = (title) => {
        setTodos(todos.concat([{id: Date.now(), completed: false, title: title}]))
    }
    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')

            .then(response => response.json())
            .then(data => {
                setTodos(data)
                setLoader(false)
            })

    }, [])



    return (
        <Context.Provider value={{removeTodo:removeTodo}}>
        <div className="wrapper">
            <h1>Todo app</h1>
            <AddTodo createTodo={createTodo}/>

            {loader && <Loader/>}


            {todos.length
                ? <TodoList todos={todos} toggleTodos={toggleTodos} />
                : (loader || <p>No todos</p>)}
        </div>
        </Context.Provider>
    );
}

export default App;
