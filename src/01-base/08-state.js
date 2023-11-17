import React, { Component } from 'react'

export default class App extends Component {
    state = {
        myState: "收藏",
        check: "false"
    }
    render() {
        return (
            <div>
                <h1>My first state toggle</h1>

                <button onClick={() => {
                    this.setState({ check: !this.state.check })
                    if (this.state.check) {
                        console.log("取消收藏的邏輯")
                    }
                    else {
                        console.log("收藏的邏輯")
                    }
                }
                }>{this.state.check ? "收藏" : "取消收藏"}</button>
            </div>
        )
    }
}
