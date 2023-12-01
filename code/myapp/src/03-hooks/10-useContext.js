import React, { Component, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import './CSS/10-communication.css'

// 創建Context對象
const GlobalContext = React.createContext()

export default function App() {
    const [filmlist, setfilmlist] = useState([])
    const [info, setinfo] = useState("")
    useEffect(() => {
        axios.get("/test.json").then(
            response => {
                console.log(response.data.films)

                setfilmlist(response.data.films)
            }
        ).catch(error => console.log(error))
    }, [])

    return (
        <GlobalContext.Provider value={{
            // call跟sms是測試的可以不用管
            call: "打電話",
            sms: "簡訊",
            info: info,
            changeInfo: (value) => {
                setinfo(value)
            }
        }}>
            < div >
                {/* {this.state.info} */}
                {
                    filmlist.map(item =>
                        <FilmItem key={item.id} name={item.title} {...item}></FilmItem>)
                }

                < Filmdetail></Filmdetail >
            </div >
        </GlobalContext.Provider>
    )
}

function FilmItem(props) {
    let { id, title } = props
    const value = useContext(GlobalContext)
    return (
        <div className='Filmitem'
            onClick={() => {
                // console.log(title)
                value.changeInfo(title)
            }}>
            {/* {this.props.title} */}
            <h4>{id}</h4>
            <h4>{title}</h4>
        </div>)
}

function Filmdetail() {
    const value = useContext(GlobalContext)
    return (
        <div className="Filmdetail">
            detail-{value.info}
        </div>
    )
}