import React, { Component } from 'react'

export default class App extends Component {
    a = 100
    render() {
        return (
            <div>
                <input></input>
                <button onClick={() => {
                    console.log("click1"/*如果邏輯過多，不推薦*/, this.a/*指向class App所以this.a找的到東西*/)
                }}>add1</button>
                <button onClick={this.handleClick2.bind(this)
                /*因為寫this.handleClick2()會自動執行而不是點了才執行所以不需要加()。 
                  handleClick2()函數裡的this要跟onClick上的this一樣指向class App，所以bind直接輸入(this)讓他跟onClick都指向class App*/}>
                    add2</button>  {/*解決方法:this.handleClick2.bind(this) */}
                    {/* 比較不推薦，因為需要bind去調整 */}
                <button onClick={this.handleClick3}>add3</button>
                <button onClick={() => {
                    this.handleClick4()    //因為是使用箭頭函式，所以調用的函示是一般函示還是箭頭函式都是指向class App
                }}>add4</button>
            </div>
        )
    }
    handleClick2() {
        console.log("click2", this.a)
    }

    handleClick3 = () => console.log("click3", this.a) //箭頭函式所以會跟onClick的this一樣都是指向class App

    // handleClick4 = () => console.log("click4", this.a)
    handleClick4() {
        console.log("click4", this.a)
    }
}

/*
    call,改變this，自動執行函數
    apply,改變this，自動執行函數
    bind,改變this，不會自動執行函數，需手動家括號執行函數
*/

// handleClick2的範例，所以在handleClick2寫this.a會指向button而不是App，所以結果為undefined
// let obtn = document.getElementById("btn");
// obtn.addEventListener("click",function(){
//     console.log(this) //指向obtn
// })