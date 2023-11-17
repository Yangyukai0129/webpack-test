//跟react狀態沒有直接聯繫(非受控)

import React, { Component } from 'react'

export default class App extends Component {
    myusername = React.createRef()
    render() {
        return (
            <div>
                <h1>登入頁</h1>
                {/* 使用ref來從DOM節點獲取數據，就是非受控 */}
                <input type="text" ref={this.myusername} defaultValue="hello"></input>
                <button onClick={() => {
                    console.log(this.myusername.current.value)
                }}>登入</button>
                <button onClick={() => {
                    this.myusername.current.value = ""
                }}>重置</button>


                {/* 如果要分享給別人的話，因為沒有用setState所以不會rerender，所以別人不會有最新的內容 */}
            </div>
        )
    }
}
