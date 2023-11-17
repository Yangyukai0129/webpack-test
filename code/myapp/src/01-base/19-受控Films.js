import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
    //constructor 是一个特殊的方法，用于在创建组件实例时进行一些初始化工作，所以像state要寫成this.state才可以在其他地方進行使用
    constructor() {
        //super() 的目的是调用父类的构造函数，以确保在子类中正确设置实例属性和状态。在 React 组件中，这通常是为了确保 this 在整个组件中指向正确的实例，以便能够正确地使用 React 提供的功能和方法。
        super()
        this.state = {
            cinemaList: [],
            mytext: ""
        }
        //axios第三方的library，專門用於請求數據
        //axios.get("url").then(res=>{}).catch(err=>{console.log(err)})

        axios.get("https://jsonplaceholder.typicode.com/posts").then(
            res => {

                console.log(res.data)

                this.setState({
                    cinemaList: res.data
                })

                console.log(this.state.cinemaList)

            }).catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <input value={this.state.mytext} onChange={(e) => {
                    this.setState({
                        mytext: e.target.value
                    })
                }}></input>
                {this.getcinemaList().map(item => <dl key={item.id}><dd>{item.title}</dd></dl>)}
                {console.log(this.state.cinemaList)}
            </div>
        )
    }

    getcinemaList() {
        //第一個return是為了返回數據過濾的值
        return this.state.cinemaList.filter(item => {
            //第二個return是為了返回過濾後的結果作為方法的返回值
            return item.title.toUpperCase().includes(this.state.mytext.toUpperCase())

        })
    }
}
