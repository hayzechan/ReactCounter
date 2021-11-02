import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import "./Counter.css";

function Counter() {
    // const [number, setNumber] = useState(0);
    const [number, setNumber] = useState(0);
    const dispatch = useDispatch();

    const increaseSum = () => {
        dispatch({type: 'updateSum', payload: +1})
        setNumber(number + 1)
    }

    const decreaseSum = () => {
        dispatch({type: 'updateSum', payload: -1})
        setNumber(number - 1)
    }


    return (
        <div>
            <button onClick={increaseSum}>+</button>
            <span>{number}</span>
            <button onClick={decreaseSum}>-</button>
        </div>
    );
}

export default Counter;