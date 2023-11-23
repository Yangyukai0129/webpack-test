import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

    state = {
        type: 0
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

class Filmlist extends Component {

    state = {
        Filmlist: []
    }

    componentDidMount(prevProps, prevState) {
        if (this.props.type === 1) {
            console.log("請求賣座電影上映的數據")
            axios.get("/test.json").then(
                res => {
                    this.setState({
                        Filmlist: res.data.films
                    })
                }
            )
        } else {
            console.log("請求即將上映的數據")
            axios.get("https://jsonplaceholder.typicode.com/posts").then(
                res => {
                    this.setState({
                        Filmlist: res.data
                    })
                }
            )
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.type === 1) {
            console.log("請求賣座電影上映的數據")
            axios.get("/test.json").then(
                res => {
                    this.setState({
                        Filmlist: res.data.films
                    })
                }
            )
        } else {
            console.log("請求即將上映的數據")
            axios.get("https://jsonplaceholder.typicode.com/posts").then(
                res => {
                    this.setState({
                        Filmlist: res.data
                    })
                }
            )
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.type !== nextProps.type)
            return true
        return false
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.Filmlist.map(item => <li key={item.id}>{item.title}</li>)}
                </ul>
            </div>
        )
    }
}
