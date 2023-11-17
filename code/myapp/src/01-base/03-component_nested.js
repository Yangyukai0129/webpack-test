// rcc
import React, { Component } from 'react'

//一般子組件會統一都寫為類的寫法或函數的寫法
class Navbar extends Component {
    render() {
        return (
            <div>Navrbar
                <Child></Child>
            </div>
        )
    }
}

//如果還要多加一個組件上去，要放在父組件上
// e.g. child是Navbar的子組件所以要寫在Navbar上，而不是寫在App上
class Child extends Component {
    render() {
        return <div>child</div>
    }
}

function Swiper() {
    return (
        <div>Swiper</div>
    )
}

const Tabbar = () => <div>Tabbar</div>

export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <Swiper></Swiper>
                <Tabbar></Tabbar>
            </div>
        )
    }
}
