import React, { Component } from 'react'
import axios from 'axios'
import './CSS/06-communication.css'

// 調度中心
var bus = {
    list: [],
    // 訂閱
    subscribe(callback) {
        console.log(callback)
        this.list.push(callback)
    },

    // 發布
    publish(text) {
        // 遍歷所有的list，將回掉函數執行
        this.list.forEach(callback =>
            // 先檢查callback是否存在，如果是的話再執行回調函數(callback())避免出現錯誤
            callback && callback(text))
    }
}

export default class App extends Component {

    constructor() {
        super()
        this.state = {
            filmList: []
        }
        axios.get("/test.json").then(
            response => {
                console.log(response.data.films)

                this.setState({
                    filmList: response.data.films
                })
            }
        ).catch(error => console.log(error))
    }

    render() {
        return (
            < div >
                {/* {this.state.info} */}
                {
                    this.state.filmList.map(item =>
                        <FilmItem key={item.id} name={item.title} {...item}></FilmItem>)
                }

                < Filmdetail ></Filmdetail >
            </div >
        )
    }

}

class FilmItem extends Component {
    render() {
        // console.log(this.props)
        let { id, title } = this.props
        return (
            <div className='Filmitem'
                onClick={() => bus.publish(title)}>
                {/* {this.props.title} */}
                <h4>{id}</h4>
                <h4>{title}</h4>
            </div>
        )
    }
}

class Filmdetail extends Component {
    constructor() {
        super()
        this.state = {
            info: ""
        }
        bus.subscribe((info) => {
            console.log("我在filmdetail中定義", info)
            this.setState({
                info: info
            })
        })
    }

    render() {
        return (
            <div className="Filmdetail">
                {this.state.info}
            </div>
        )
    }
}