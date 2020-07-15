import React from "react";
import styles from './AddTodo.module.css'

const Loader = () => {
    return (<div>
        <div className={styles.ldsRing}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>)
}
export default Loader