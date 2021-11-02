import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import "./Counter.css";

function Counter(){
    // const [number, setNumber] = useState(0);
    const [number] = useState(0);
    const dispatch = useDispatch();
    
// function increase(){
//     setNumber(number+1);
//     props.increaseSum();
// }
// function decrease(){
//     setNumber(number-1);
//     props.decreaseSum();
// }
return(
<div>
    <button onClick={() => dispatch({type: 'updateSum', payload: number})}>+</button>
    <span>{number}</span>
    <button onClick={() => dispatch({type: 'updateSum', payload: number})}>-</button>
</div>
    );
}

export default Counter;