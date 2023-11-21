import React, { Component } from 'react'

export default class App extends Component {
    state = {
        myname: "kevin"
    }

    UNSAFE_componentWillMount() {
        console.log("第一次will mount", this.state.myname, document.getElementById("myname"))

        // 第一次完成DOM前的最後一次修改狀態
        this.setState({
            myname: "KEvin"
        })

        // 可以用來初始化數據
        // 不安全，應該要改用componentDidMount或constructor，加上UNSAFE_可以讓錯誤訊息停止但還是不推薦WillMount
    }

    componentDidMount() {
        console.log("第一次 did mount", document.getElementById("myname"))
        // 數據請求axios
        // 訂閱函數調用
        // setInterval
        // 基於創建完的DOM進行初始化... e.g. betterscroll
    }

    render() {
        console.log("render")

        // 如果this.setState拿到這裡來執行，因為setState會重新渲染一次，渲染完後又遇到setState又在進行渲染，會變成死循環，所以不能放在這裡執行
        return (
            <div id="myname">{this.state.myname}</div>
        )
    }
}
