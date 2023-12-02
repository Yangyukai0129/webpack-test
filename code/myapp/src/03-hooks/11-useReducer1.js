import React, { useReducer } from 'react'
// 處理函數
const reducer = (prevState, action) => {
    console.log("reducer", prevState, action)

    // 因為不能直接進行修改state所以新增一個值來進行更新，為了方便追蹤先前狀態所以寫成{...prevState}
    let newState = { ...prevState }

    switch (action.type) {
        case "minus":
            newState.count--
            return newState

        case "add":
            newState.count++
            return newState

        default:
            return prevState

    }
}
// 外部的對象
const initialState = {
    count: 0,
    // list: []
}

export default function App() {

    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <button onClick={() => {
                dispatch({
                    type: "minus"
                })
            }}>-</button>
            {state.count}
            <button onClick={() => {
                dispatch({
                    type: "add"
                })
            }}>+</button>
        </div>
    )
}
