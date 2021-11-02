import React, { useState } from "react";
import { useDispatch } from "react-redux";

const CounterSizeGenerator = (props) =>{
    const [size, setSize] = useState(0);
    const dispatch = useDispatch();

    function handleChangeSize(event) {
        setSize(parseInt(event.target.value));
    }

    const updateCounter = ()=>{
        dispatch({type: 'updateCounterSize', payload: size})
        dispatch({type: 'restSum'})
    }

    // function generateCounter(){
    //     props.updateCounterSize(size);
    // }

    return (
        <div>
            <span>Size</span>
            <input min="0" type="number" value={size} onChange={handleChangeSize} />
            <button onClick={updateCounter}>Generate</button>
        </div>
    );
    }

export default CounterSizeGenerator