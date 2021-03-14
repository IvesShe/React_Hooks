import React from 'react'
import Buttons from './Buttons'
import {Color} from './Color'
import Show from './Show'

export default function ShowArea() {
    return (
        <div>
            <h2>我是ShowArea組件</h2>
            <Color>
                <Show />
                <Buttons />
            </Color>
        </div>
    )
}
