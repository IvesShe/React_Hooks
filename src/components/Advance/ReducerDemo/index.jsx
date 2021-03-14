import React from 'react'

import {
    useReducer
} from 'react'  

export default function ReducerDemo(){
    const [count,dispatch] = useReducer((state,action)=>{
        switch(action){
            case 'add':
                return state+1 
            case 'sub':
                return state-1 
            default:
                return state
        }
    },0)

    // console.log(count,dispatch);
    return(
        <div>
            <h2>我是ReducerDemo組件</h2>
            <h2>現在的分數是{count}</h2>
            <button onClick={()=>{dispatch('add')}} >Increment</button>
            <button onClick={()=>{dispatch('sub')}} >Decrement</button>
        </div>
    )
}

