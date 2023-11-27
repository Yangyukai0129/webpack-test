import React, { Component, useEffect, useState } from 'react'
import axios from 'axios'

export default class App extends Component {

    state = {
        type: 1
    }

    render() {
        return (
            <div>
                <ul>
                    <li onClick={() => {
                        this.setState({
                            type: 1
                        })
                    }}>賣座電影</li>
                    <li onClick={() => {
                        this.setState({
                            type: 2
                        })
                    }}>即將上映</li>
                </ul>
                <Filmlist type={this.state.type}></Filmlist>
            </div>
        )
    }
}

function Filmlist(props) {

    const [list, setlist] = useState([])

    console.log("請求賣座電影上映的數據")
    useEffect(() => {
        if (props.type === 1) {
            axios.get("/test.json").then(
                res => {
                    setlist(res.data.films)
                }
            )
        } else {
            console.log("請求即將上映的數據")
            axios.get("https://jsonplaceholder.typicode.com/posts").then(
                res => {
                    setlist(res.data)
                }
            )
        }
    }, [props.type])

    return (
        <ul>
            {list.map(item => <li key={item.id}>{item.title}</li>)}
        </ul>
    )
}

