import React, { Component } from 'react'

class Field extends Component {
    state = {
        value: ""
    }

    clear() {
        this.setState({
            value: ""
        })
    }

    // 通过调用 setState 方法，更新组件的状态。在这里，将 value 设置为传入的参数值，实现了对 Field 组件状态的更新。

    //这个方法的作用是允许你在外部通过调用 setValue 来改变 Field 组件的状态，进而影响输入框的值。
    //这样的设计可以使你更加灵活地控制输入框的值，而不仅仅受限于用户的输入或通过 onChange 事件。例如，在某些情况下，你可能需要通过代码来动态设置输入框的值，而不是依赖用户手动输入。
    setValue(value) {
        this.setState({
            value: value
        })
    }

    render() {
        return (
            <div style={{ background: "yellow" }}>
                <label>{this.props.label}</label>
                <input type={this.props.type}
                    onChange={(e) => {
                        this.setState({
                            value: e.target.value
                        })
                    }}
                    //这一行代码确保输入框的值始终与Field组件的状态中的value属性保持一致。
                    //通过将value属性设置为this.state.value，你实现了对输入框值的双向绑定，即输入框的值受到React状态的控制。
                    value={this.state.value}
                ></input>
            </div>
        )
    }
}


export default class App extends Component {
    username = React.createRef()
    password = React.createRef()

    render() {
        return (
            <div>
                <h1>登入頁</h1>
                <Field label="帳號" type="text" ref={this.username}></Field>
                <Field label="密碼" type="password" ref={this.password}></Field>
                <button onClick={() => { console.log(this.username.current.state.value, this.password.current.state.value, "發送給後端驗證") }}>確定</button>
                <button onClick={() => {
                    this.username.current.clear()
                    this.password.current.clear()
                }}
                >取消</button>
            </div>
        )
    }
}
