import { useState } from "react";
import classes from './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = useState(0)

    const increase = () => setCount(count + 1)
    const decrease = () => setCount(count - 1)

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decrease} className={classes.btn}>-</button>
            <button onClick={increase} className={classes.btn}>+</button>
        </div>
    )
}