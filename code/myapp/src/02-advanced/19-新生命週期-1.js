import React, { Component } from 'react'

export default class App extends Component {

    state = {
        myname: "kevin",
        myage: 100
    }

    // getDerivedStateFromProps為靜態方法所以需要有static，並且要有return跟state才不會報錯
    // 如果在return內直接改state的值會把他寫死，所以要用nexProps、nextState去調用
    // static 关键字用于定义类的静态成员，包括静态属性和静态方法。静态成员是属于类本身而不是类的实例。因此，在静态方法中，不能使用 this 关键字引用类的实例，因为静态方法是与类关联的，而不依赖于特定的实例
    static getDerivedStateFromProps(nextProps, nextState) {
        console.log("getDerivedStateFromProps", nextState)
        return {
            myname: nextState.myname.substring(0, 1).toUpperCase() + nextState.myname.substring(1)
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        myname: "xiaoming"
                    })
                }}>click</button>
                app-{this.state.myname}-{this.state.myage}
            </div>
        )
    }
}
