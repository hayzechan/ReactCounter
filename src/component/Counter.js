import React, {useState} from 'react';
import "./Counter.css";

function Counter(props){
    const [number, setNumber] = useState(0);
    
function increase(){
    setNumber(number+1);
    props.increaseSum();
}
function decrease(){
    setNumber(number-1);
    props.decreaseSum();
}
return(
<div className="counter">
    <button onClick={increase}>+</button>
    <span>{number}</span>
    <button onClick={decrease}>-</button>
</div>
    );
}

export default Counter;