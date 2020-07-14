import React, {useState} from 'react';
import './index.css';
import TodoList from "./todo/TodoList";
import Context from "./context";


function App() {

    const [state, setState] = useState([
        {id:1, completed: false, title: 'bread'},
        {id:2, completed: false, title: 'milk'},
        {id:3, completed: false, title: 'vegetables'}
    ])

    const toggleTodos = (id) => {

        setState(state.map( el => {

            if (el.id === id) {
                el.completed = !el.completed
            }
            return el
        }))
    }

    const removeTodo = (id) => {
        setState(state.filter(el => el.id !== id))
    }


    return (
        <Context.Provider value={{removeTodo:removeTodo}}>
        <div className="wrapper">
            <h1>React tutorial</h1>
            {state.length ?
                <TodoList todos={state} toggleTodos={toggleTodos}/> : <p>No todos</p>}
        </div>
        </Context.Provider>
    );
}

export default App;
