import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
            <div>App</div>
        )
    }
}

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

// 訂閱者
bus.subscribe((value) => {
    console.log("1111", value)
})

bus.subscribe((value) => {
    console.log("2222", value)
})


// 發布者(要在訂閱者後才能進行發布，發布後再訂閱會看不到發布者的訊息)
setTimeout(() => { bus.publish("男人看了沉默") }, 0)