import { useState } from "react";
import './Counter.scss';

export const Counter = () => {
    const [count, setCount] = useState(0)

    const increase = () => setCount(count + 1)
    const decrease = () => setCount(count - 1)

    return (
        <>
            <h1>{count}</h1>
            <button onClick={decrease}>-</button>
            <button onClick={increase}>+</button>
        </>
    )
}