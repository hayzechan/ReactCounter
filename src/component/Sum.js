import React from "react";
import { useSelector } from "react-redux";

// function store(sum){
    
// }

function Sum(){
const sum = useSelector(state => state.sum);
    return(
        <div>
            <span>
                Sum: {sum}
            </span>
        </div>
    )
}

export default Sum;