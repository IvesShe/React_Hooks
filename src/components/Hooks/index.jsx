import React from 'react'
import ReactDom from 'react-dom'

// 類式組件
class Hooks extends React.Component {

    state = {count:0};

    myRef = React.createRef();

    add = ()=>{
        // setState第一種寫法(對象式的)
        //const {count} = this.state
        //this.setState({count:count+1});
        // this.setState({count:count+1},()=>{
        //     console.log(this.state.count);
        // });
        //this.setState({count:this.state.count+1});

        // setState第二種寫法
        this.setState(state => ({count:state.count+1}));
        // this.setState((state,props) => {
        //     console.log(state,props);
        //     return {count:state.count+1}
        // });
        // this.setState(state => ({count:state.count+1}),()=>{
        //     console.log(this.state.count);
        // });
    }

    unmount = ()=>{
        ReactDom.unmountComponentAtNode(document.getElementById('root'));
    }

    show = ()=>{
        alert(this.myRef.current.value);
    }

    componentDidMount(){
        this.timer = setInterval(()=>{
            this.setState(state => ({count:state.count+1}));
        },1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render() {
        return (
            <div>
                
                <h2>當前求和為 {this.state.count} </h2>
                <button onClick={this.add} >點我+1</button>
                <button onClick={this.unmount} >卸載組件</button>
                <hr/>
                <input type="text" ref={this.myRef} />
                <button onClick={this.show} >點擊提示數據</button>
            </div>
        )
    }
}

// 函數式組件
// function Hooks() {
//     console.log('@Hooks');

//     // useState傳入的初始值，React底層處理過了，只有在第一次會被調用 
//     const [count,setCount] = React.useState(0);
//     const [name,setName] = React.useState('Tom');
//     const myRef = React.useRef();
//     //console.log(count,setCount);

//     // 加的回調
//     function add(){
//         // 第一種寫法
//         // setCount(count+1);

//         // 第二種寫法
//         setCount(count => count+1);
//     }

//     // 卸載組件的回調
//     function unmount(){
//         ReactDom.unmountComponentAtNode(document.getElementById('root'));
//     }

//     // 提示輸入的回調
//     function show(){
//         alert(myRef.current.value);
//     }

//     function changeName(){
//         // 第一種寫法
//         setName('Jack');

//         // 第二種寫法
//         //setCount(count => count+1);
//     }

//     // 第二個參數傳入[]，使useEffect相當於componentDidMount()
//     // 第二個參數有監測傳入參數的意思，不填的話全部都監測，則每次更新都會監測到
//     // 寫[]代表誰也不監測
//     React.useEffect(()=>{
//         //console.log('@');
//         let timer = setInterval(()=>{
//             setCount(count=>count+1);
//         },1000);

//         // React.useEffect返回的函數相當於ReactDom.unmountComponentAtNode
//         return ()=>{
//             clearInterval(timer);
//         }
//     },[])
//     // },[count,name])

//     return (
//         <div>
//             <h2>當前求和為 {count} </h2>
//             <h2>我的名字是 {name} </h2>
//             <button onClick={add} >點我+1</button>
//             <button onClick={changeName} >點我改名</button>
//             <button onClick={unmount} >卸載組件</button>
//             <hr/>
//             <input type="text" ref={myRef} />
//             <button onClick={show} >點擊提示數據</button>
//         </div>
//     )
// }

export default Hooks
