import React, { Component } from 'react'

export default class App extends Component {

    state = {
        count: 1
    }

    render() {
        return (
            <div>
                {this.state.count}
                <button onClick={this.handleClickadd1}>add1</button>
                <button onClick={this.handleClickadd2}>add2</button>
            </div>
        )
    }

    handleClickadd1 = () => {
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count)

        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count)

        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count)
    }

    handleClickadd2 = () => {
        setTimeout(() => {
            this.setState({
                count: this.state.count + 1
            })
            console.log(this.state.count)

            this.setState({
                count: this.state.count + 1
            })
            console.log(this.state.count)

            this.setState({
                count: this.state.count + 1
            })
            console.log(this.state.count)
        }, 0);
    }

    /* 
        react17
        setState處在同步的邏輯中，異步更新狀態，異步更新真實dom
        setState處在異步的邏輯中，同步更新狀態，同步更新真實dom
        
        react18(現在)
        在 react18 里面，如果用 createRoot 的 api，就不会有这种问题了。
        setState 是同步还是异步这个问题等 react18 普及以后就不会再有了，因为所有的 setState 都是异步批量执行了。
    */
}
