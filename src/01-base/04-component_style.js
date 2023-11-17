import React, { Component } from 'react'
import './CSS/01-index.css' //導入css模塊, webpack支持


export default class App extends Component {
    render() {
        //  變量寫法，如果kevin沒有引號會被當變量
        const myname = "kevin"
        //  對象寫法
        const obj = {
            //如果yellow沒有引號會被當變量
            background: "yellow",
            fontSize: "32px"
        }
        return (
            < div >
                {10 + 20} - {myname}
                <br></br>
                {10 > 20 ? 'aaa' : 'bbb'}
                <div style={obj} >1234</div>
                {/* 變量裡面包一個對象 */}
                <div style={{ background: "red" }} >1234</div>
                <div className='active'>123</div>
            </div >
        )
    }
}
