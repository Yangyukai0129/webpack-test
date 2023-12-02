import React, { createContext, useContext, useReducer } from 'react'

const reducer = (prevState, action) => {
    // 因為不能直接進行修改state所以新增一個值來進行更新，為了方便追蹤先前狀態所以寫成{...prevState}
    let newState = { ...prevState }

    switch (action.type) {
        case "change-a":
            newState.a = action.value
            return newState

        case "change-b":
            newState.b = action.value
            return newState

        default:
            return prevState
    }
}

const initialState = {
    a: "111",
    b: "111"
}

const GlobalContext = React.createContext()

export default function App() {
    // 如果寫在子組件，每個useReducer都是新的就沒辦法進行通信，所以要寫在父組件上
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <GlobalContext.Provider value={{
            // state:state的簡寫
            state,
            dispatch
        }}>
            <div>
                <Child1></Child1>
                <Child2></Child2>
                <Child3></Child3>
            </div>
        </GlobalContext.Provider>
    )
}

function Child1() {
    // 使用解構賦值(destructure)的方式增加了代碼的可讀性
    // e.g.
    // const person = { name: 'John', age: 30, city: 'New York' };

    // // 使用對象解構賦值
    // const { name, age } = person;

    // console.log(name); // 'John'
    // console.log(age);  // 30
    // 這裡，我們創建了一個包含 name、age 和 city 屬性的對象 person。通過 { name, age } = person，我們將 person 對象的 name 和 age 屬性的值提取到 name 和 age 變量中。

    // 類似地，陣列解構賦值允許你從陣列中提取值：


    // const numbers = [1, 2, 3, 4, 5];

    // // 使用陣列解構賦值
    // const [first, second] = numbers;

    // console.log(first);  // 1
    // console.log(second); // 2
    // 在React中，解構賦值通常用於從狀態（state）對象或上下文（context）中提取所需的值，以便在組件中使用。
    const { dispatch } = useContext(GlobalContext)
    return (
        <div style={{ background: "red" }}>
            <button onClick={() => {
                dispatch({
                    type: "change-a",
                    value: "222"
                })
            }}>改變a</button>
            <button onClick={() => {
                dispatch({
                    type: "change-b",
                    value: "333"
                })
            }}>改變b</button>
        </div>
    )
}

// 如果不用解構賦值的話的寫法(state)
function Child2() {
    const context = useContext(GlobalContext)
    return (
        <div style={{ background: "yellow" }}>
            Child2-{context.state.a}
        </div>
    )
}

function Child3() {
    const { state } = useContext(GlobalContext)
    return (
        <div style={{ background: "gray" }}>
            Child3-{state.b}
        </div>
    )
}

