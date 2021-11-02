import React, { useState } from "react";
import { useDispatch } from "react-redux";

function CounterSizeGenerator(){
    const[size, setSize] = useState(0);
    const dispatch = useDispatch();

    function handleChangeSize(event){
        setSize(parseInt(event.target.value));
    }

    // function generateCounter(){
    //     props.updateCounterSize(size);
    // }

    return(
        <div>
            <span>Size</span>
                <input min = "0" type = "number" value={size} onChange={handleChangeSize}/>
            <button onClick={()=> dispatch({type: 'updateCounterSize', payload: size})}>Generate</button>
        </div>
    );
}

export default CounterSizeGenerator