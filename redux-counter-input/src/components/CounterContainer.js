import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    incrementCount,
    decrementCount,
    decrementCont,
    incrementcont,
} from "../actions/Action";


const CounterContainer = () => {
    const [numData, setNumData] = useState(0)
    const count = useSelector((state) => state.count.counter);
    console.log(count,'cn')
    const dispatch = useDispatch();

    const incrementbyamount = () => {
        let counter=numData
        dispatch(incrementCount(counter));

    };
    const decrementbyamount = () => {
        let counter=numData
        dispatch(decrementCount(counter));

    };

    const increment = () => {
        dispatch(incrementcont());
        
    };

    const decrement = () => {
        dispatch(decrementCont());
        
    };



    const type = (e) => {
        setNumData(e.target.value);
    };

    return (
        <>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <p>value: {count}</p>
            <input onChange={type} type="text" value={numData} />
            <button onClick={incrementbyamount}>Increment By Amount</button>
            <button onClick={decrementbyamount}>Decrement By Amount</button>
         
        </>
    );
};

export default CounterContainer;
