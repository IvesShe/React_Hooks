import React,{useContext} from 'react'
import {ColorContext} from './Color'

export default function Show() {
    const {color} = useContext(ColorContext);
    return (
        <div style={{color:color}}>
            字體顏色為blue
        </div>
    )
}
