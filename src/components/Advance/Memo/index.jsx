import React,{useState,useMemo} from 'react'



export default function Memo() {

    const [person01,setPerson01] = useState('Person01 Ready')
    const [person02,setPerson02] = useState('Person02 Ready')

    return (
        <div>
            <h2>我是Memo組件</h2>
            <button onClick={()=>{setPerson01(new Date().getTime())}} >Person01</button>
            <button onClick={()=>{setPerson02(new Date().getTime()+', person02 gogo')}} >Person02</button>

            {/* 注意這邊傳入的name及children */}
            <ChildComponent name={person01}>{person02}</ChildComponent>
        </div>
    )
}

function ChildComponent({name,children}) {

    function changePerson01(){
        console.log('person01 go');
        return name+', person01 go'
    }

    // 當person01發生變化時，才會呼叫
    const actionPerson01 = useMemo(()=>changePerson01(name),[name])

    return (
        <div>
            {/* 透過函數產生第一行 */}
            <div>{actionPerson01}</div>
            {/* 直接將children秀出 */}
            <div>{children}</div>
        </div>
    )
}