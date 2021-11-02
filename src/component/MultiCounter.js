import React, { useState } from "react";
import CounterSizeGenerator from "./CounterSizeGenerator";
import CounterGroup from "./CounterGroup";
import Sum from "./Sum";


function MultiCounter(){
    const [counterSize, setCounterSize] = useState(0);
    const [sum, setSum] = useState(0);

    function updateCounterSize(size){
        setCounterSize(size);
    }

    function increaseSum(){
        setSum(sum+1);
    }

    function decreaseSum(){
        setSum(sum-1);
    }

    // function store(size){
    //     setCounterSize(size);
    // }

    return(
        <div className = "counter">
            <CounterSizeGenerator updateCounterSize={updateCounterSize}></CounterSizeGenerator>
            <CounterGroup counterSize = {counterSize} increaseSum = {increaseSum} decreaseSum={decreaseSum}></CounterGroup>
            <Sum sum = {sum}></Sum>
        </div>

    );
}

export default MultiCounter;