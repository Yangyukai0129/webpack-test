import React, { Component, useContext, useEffect, useReducer, useState } from 'react'
import axios from 'axios'
import './CSS/10-communication.css'

// 創建Context對象
const GlobalContext = React.createContext()

const reducer = (prevState, action) => {
    let newState = { ...prevState }

    switch (action.type) {
        case "change-filmlist":
            newState.filmlist = action.value
            return newState

        case "change-info":
            newState.info = action.value
            return newState

        default:
            return prevState
    }
}

const initialState = {
    info: "",
    filmlist: []
}

export default function App() {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get("/test.json").then(
            response => {
                // console.log(response.data.films)
                dispatch({
                     
                })
            }
        ).catch(error => console.log(error))
    }, [])

    return (
        <GlobalContext.Provider value={{
            state,
            dispatch
        }}>
            < div >
                {/* {this.state.info} */}
                {
                    state.filmlist.map(item =>
                        <FilmItem key={item.id} name={item.title} {...item}></FilmItem>)
                }

                < Filmdetail></Filmdetail >
            </div >
        </GlobalContext.Provider>
    )
}

function FilmItem() {
    let { id, title } = props
    const { dispatch } = useContext(GlobalContext)
    return (
        <div className='Filmitem'
            onClick={() => {
                // console.log(title)
                // value.changeInfo(title)
                dispatch({
                    type: "change-info",
                    value: title
                })
            }}>
            {/* {this.props.title} */}
            <h4>{id}</h4>
            <h4>{title}</h4>
        </div>)
}

function Filmdetail() {
    const { state } = useContext(GlobalContext)
    return (
        <div className="Filmdetail">
            detail-{state.info}
        </div>
    )
}