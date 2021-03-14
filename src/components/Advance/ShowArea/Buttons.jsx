import React,{useContext} from 'react'
import {ColorContext,UPDATE_COLOR} from './Color'

export default function Buttons() {

    const {dispatch} = useContext(ColorContext)

    return (
        <div>
            <button onClick={()=>{dispatch({type:UPDATE_COLOR,color:'red'})}} >紅色</button>
            <button onClick={()=>{dispatch({type:UPDATE_COLOR,color:'yellow'})}}>黃色</button>
        </div>
    )
}
