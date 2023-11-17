//跟react狀態有直接聯繫(受控)

import React, { Component } from 'react'

export default class App extends Component {
    
    state={
        username:"kevin"
    }

    render() {
        return (
            <div>
                <h1>登入頁</h1>
                <input type="text" value={this.state.username}
                onChange={(e)=>{
                    console.log("onChange",e.target.value)

                    this.setState({
                        username:e.target.value
                    })
                }}></input>
                <button onClick={() => {
                    console.log(this.state.username)
                }}>登入</button>
                <button onClick={() => {
                    this.setState({
                        username:""
                    })
                }}>重置</button>


                {/* 如果要分享給別人的話，因為沒有用setState所以不會rerender，所以別人不會有最新的內容 */}
            </div>
        )
    }
}