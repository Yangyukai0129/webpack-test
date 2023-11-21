import React, { Component } from 'react'
import axios from 'axios'
import Betterscroll from 'better-scroll'

export default class App extends Component {

    state = {
        myname: "kevin",
        list: []
    }

    componentDidMount() {
        axios.get("./test.json").then(
            res => {
                this.setState({
                    list: res.data.films
                })

            }

        )

    }

    render() {
        console.log("render")
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        myname: "鐵鎚"
                    })
                }}>click</button>
                <span id="myname">{this.state.myname}</span>

                <div id="wrapper" style={{
                    height: "100px",
                    backgroundColor: "yellow",
                    overflow: "hidden"
                }}>
                    <ul>
                        {this.state.list.map(item =>
                            <li key={item.id}>{item.title}</li>)}
                    </ul>
                </div>
            </div>
        )
    }

    UNSAFE_componentWillUpdate() {
        console.log("componentWillUpdate", document.getElementById("myname").innerHTML)

        console.log(this.state.list)
    }

    componentDidUpdate(preProps, preState) {
        console.log("componentDidUpdate", document.getElementById("myname").innerHTML)

        //更新後想要獲取DOM節點 更新

        // console.log(preState.list)

        // 確保了這個操作只在 list 由空到非空的變化時執，行避免重複做Betterscroll
        // if (preState.list.length === 0) {
        //     new Betterscroll("#wrapper")
        // }
    }
}
