import React, { Component } from 'react'

class Field extends Component {
    render() {
        return (
            <div style={{ background: "yellow" }}>
                <label>{this.props.label}</label>
                <input type={this.props.type}
                    onChange={(e) => { this.props.onChange(e.target.value) }}
                    value={this.props.value}
                ></input>
            </div>
        )
    }
}


export default class App extends Component {

    state = {
        //需要先在頁面上輸入locakStorage.setItem("username","隨便輸入")，這樣才抓的到值
        username: localStorage.getItem("username"),

        //如果password沒有用localStorage，取消的時候就沒辦法把資料從欄位清空
        password: localStorage.getItem("password")
    }

    render() {
        return (
            <div>
                <h1>登入頁</h1>
                <Field label="帳號" type="text" onChange={(value) =>
                    this.setState({
                        username: value
                    })
                } value={this.state.username}></Field>
                <Field label="密碼" type="password" onChange={(value) =>
                    this.setState({
                        password: value
                    })
                } value={this.state.password}></Field>
                <button onClick={() => { console.log(this.state.username, this.state.password, "發送給後端驗證") }}>確定</button>
                <button onClick={() =>
                    this.setState({
                        username: "",
                        password: ""
                    })
                }>取消</button>
            </div>
        )
    }
}
