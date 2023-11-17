import React, { Component } from 'react'
import Navbar from './Navbar/index'

export default class App extends Component {
    render() {

        let obj = {
            title:"測試",
            leftshow:false
        }

        return (
            <div>
                <div>
                    <h2>首頁</h2>
                    <Navbar title='首頁' 
                    // 如果使用"false"，那會被當作字串就不會變成boolean值，如果要變成變量或要給js使用要用{false}
                    leftshow={false}></Navbar>
                </div>
                <div>
                    <h2>列表</h2>
                    <Navbar title='列表'></Navbar>
                </div>
                <div>
                    <h2>購物車</h2>
                    <Navbar title='購物車'></Navbar>
                </div>

                <Navbar title={obj.title} leftshow={obj.leftshow}></Navbar>

                <Navbar {...obj}></Navbar>
            </div>
        )
    }
}
