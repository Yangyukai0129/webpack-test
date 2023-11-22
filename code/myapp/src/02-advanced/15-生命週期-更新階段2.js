import React, { Component } from 'react'

export default class App extends Component {
    state = {
        myname: "kevin"
    }

    render() {
        console.log("render")
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        myname: "小明"
                    })
                }}>click</button>
                {this.state.myname}
            </div>
        )
    }

    // scu 性能優化函數
    shouldComponentUpdate(nextProps, nextState) {
        // return true 應該更新
        // return false 阻止更新
        // this.state 老的狀態
        // nextState 新的狀態

        // 只要老的狀態跟新的狀態有不一樣的地方就進行更新(要轉換成字串才能去判斷)
        if (JSON.stringify(this.state) !== JSON.stringify(nextState)) {
            return true
        }
        return false
    }

    UNSAFE_componentWillUpdate() {
        console.log("UNSAFE_componentWillMount")
    }

    componentDidUpdate() {
        console.log("componentDidMount")
    }
}
