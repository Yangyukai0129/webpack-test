import React, { Component } from 'react'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            myState: "收藏",
            check: "false",
            myName: "kevin"
        }
    }
    render() {
        return (
            <div>
                <h1>My first state toggle-{this.state.myName}</h1>
                <button onClick={() =>
                    this.setState({
                        check: !this.state.check,
                        myName: "hello"
                    })
                }>{this.state.check ? "收藏" : "取消收藏"}</button>
            </div>
        )
    }
}
