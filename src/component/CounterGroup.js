import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Counter from "./Counter";

function CounterGroup(props) {
    const [counterList, setCounterList] = useState([]);
    const size = useSelector(state => state.size)

    useEffect(() => {
        const counters = new Array(size).fill(Date.now());
        setCounterList(counters);
    }, [size]);

    function increaseSum() {
        props.increaseSum();
    }

    function decreaseSum() {
        props.decreaseSum();
    }

    return (
        <div>
            {counterList.map((item, index) => (
                <Counter key={item + index} increaseSum={increaseSum} decreaseSum={decreaseSum}></Counter>
            ))}
        </div>
    );
}

export default CounterGroup;