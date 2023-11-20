import React, { Component } from 'react'

class Child extends Component {
    render() {
        return (
            <div>
                child

                {/* 插槽，如果是vue的話有專有名詞叫slot */}
                {/* 如果沒有[]的話會把所以值都顯示一次，有[]的話會看是要顯示哪一個 */}
                {this.props.children[0]}
                {this.props.children[1]}
                {this.props.children[2]}
            </div>
        )
    }
}

class Swiper extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default class App extends Component {
    render() {
        return (
            <div>
                <Child>
                    {/* children */}
                    <div>111</div>
                    <div>222</div>
                    <div>333</div>
                </Child>

                <Swiper>
                    <div>111</div>
                    <div>222</div>
                    <div>333</div>
                </Swiper>
                <Swiper>
                    <div><img></img>111</div>
                    <div><img></img>222</div>
                    <div><img></img>333</div>
                </Swiper>
                <Swiper>
                    {/* <img></img>
                    <img></img>
                    <img></img> */}
                </Swiper>
            </div>
        )
    }
}

/*
1.為了覆用
2.一定程度減少父子通信(用插槽的方式可以更靈活地進行覆用，e.g. Navbar要更改圖片的話不用用屬性去判斷直接用插槽的方式去判斷)
*/
