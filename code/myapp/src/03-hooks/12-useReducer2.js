import React, { createContext, useContext, useReducer } from 'react'

const reducer = (prevState, action) => {

}

const initialState = {

}

const GlobalContext = React.createContext()

export default function App() {
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
    const { dispatch } = useContext(GlobalContext)
    return (
        <div style={{ background: "red" }}>
            <button onClick={() => {
                dispatch({
                    type: "change-a"
                })
            }}>改變a</button>
            <button>改變b</button>
        </div>
    )
}

function Child2() {
    const { state } = useContext(GlobalContext)
    return (
        <div style={{ background: "yellow" }}>
            Child2
        </div>
    )
}

function Child3() {
    const { state } = useContext(GlobalContext)
    return (
        <div style={{ background: "gray" }}>
            Child3
        </div>
    )
}

