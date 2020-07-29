import React from 'react';
import { useSelector } from 'react-redux';

export default function Counter(){
        const counter = useSelector(state => state.counter);
        return(
            <div>
                <h1>Counter</h1>
                <h4>{counter}</h4>
            </div>
        )
}
