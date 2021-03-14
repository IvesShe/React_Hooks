import React from 'react'

import {
    useState,
    useEffect,
    createContext,
    useContext,
    useReducer
} from 'react'  

import {BrowserRouter as Router ,Route,Link} from 'react-router-dom'



// 創建Context
const CountContext = createContext();

function Counter(){
    // 使用Context
    let count = useContext(CountContext);
    return (<h2>{count}</h2>)
}

function Index(){
    useEffect(()=>{
        console.log(`userEffect => Index `);

        return ()=>{
            console.log(`userEffect => Index Exit`)
        }
    },[])
    return <h2>ives.com</h2>
}

function List(){
    useEffect(()=>{
        console.log(`userEffect => List `);
    })
    return <h2>List Page</h2>
}

export default function Advance() {

    // 數組解構
    const [count,setCount] = useState(0);
    // const [age,setAge] = useState(18);
    // const [sex,setSex] = useState('男');
    // const [work,setWork] = useState('前端程序員');

    useEffect(()=>{
        console.log(`userEffect => You clicked ${count} times `);

        return ()=>{
            console.log('=====================');
        }
    },[count])

    return (
        <div>
            <h2>我是Advance組件</h2>
            <p>You Clicked {count} times </p>
            <button onClick={()=>{setCount(count+1)}} >Click me</button>

            {/* 傳入Context */}
            <CountContext.Provider value={count}>
                <Counter/>
            </CountContext.Provider>
            {/* <p>ives今年∶ {age} 歲  </p>
            <p>性別∶ {sex} </p>
            <p>工作是∶ {work} </p> */}

            <Router>
                <ul>
                    <li><Link to="/">首頁</Link></li>
                    <li><Link to="/list/">列表</Link></li>
                </ul>
                <Route path="/" exact component={Index} />
                <Route path="/list" component={List} />

            </Router>

        </div>
    )
}
