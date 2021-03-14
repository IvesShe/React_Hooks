import React,{useRef,useState,useEffect} from 'react'

export default function Ref() {

    const inputE1 = useRef(null)

    const onButtonClick = ()=>{
        inputE1.current.value = "Hello,ives";
        console.log(inputE1);
    }

    const [text,setText] = useState('ives')
    const textRef = useRef();

    useEffect(()=>{
        textRef.current = text;
        console.log('textRef.current:',textRef.current);
    })

    return (
        <div>
            <h2>我是Ref組件</h2>
            <input ref={inputE1} type="text"/>
            <button onClick={onButtonClick} >在input上展示文字</button>
            <br/>
            <br/>
            <input value={text} onChange={(e)=>{setText(e.target.value)}} />
        </div>
    )
}
