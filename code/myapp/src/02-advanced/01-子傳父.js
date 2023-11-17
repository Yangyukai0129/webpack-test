import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <div style={{ background: "red" }}>
                <button onClick={() => {
                    console.log("子通知父，讓父的isShow取反", this.props.event)

                    this.props.event() //調用父組件回來的回調函數callback
                }}>click</button>
                <span>navbar</span>
            </div>
        )
    }
}

class Sidebar extends Component {
    render() {
        return (
            <div style={{ background: "yellow", width: "200px" }}>
                <ul>
                    <li>11111</li>
                    <li>11111</li>
                    <li>11111</li>
                    <li>11111</li>
                    <li>11111</li>
                </ul>
            </div>
        )
    }
}

export default class App extends Component {

    state = {
        isShow: false
    }

    handleEvent = () => {
        this.setState({
            isShow: !this.state.isShow
        })
        console.log("父組件定義的event事件")
    }

    render() {
        return (
            <div>
                <Navbar event={this.handleEvent}></Navbar>

                {/* 如果按鈕直接在父組件上的寫法 */}
                {/* <button onClick={() => this.setState({
                    isShow: !this.state.isShow
                })}>click</button> */}
                {this.state.isShow && <Sidebar></Sidebar>}
            </div >
        )
    }
}

/*
父傳子：屬性
子傳父：回調函數 callback(雖然也是屬性，但因為一般帶回去的是字串、boolean或轉換完狀態的值。現在是想讓子組件可以進行回調函數所以統一稱為回調函數)
*/
