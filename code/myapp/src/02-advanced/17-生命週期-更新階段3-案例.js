import React, { Component } from 'react'

export default class App extends Component {

    state = {
        type: '1'
    }

    render() {
        return (
            <div>
                <ul>
                    <li onClick={() => {
                        this.setState({
                            type: '1'
                        })
                    }}>賣座電影</li>
                    <li onClick={() => {
                        this.setState({
                            type: '2'
                        })
                    }}>即將上映</li>
                </ul>
                <Filmlist type={this.state.type}></Filmlist>
            </div>
        )
    }
}

class Filmlist extends Component {

    componentDidMount(prevProps, prevState) {
        console.log(this.props.type)
        if (this.props.type === 1) {
            console.log("請求賣座電影上映的數據")
        } else {
            console.log("請求即將上映的數據")
        }
    }

    render() {
        return (
            <div>
                電影-{this.props.type}
            </div>
        )
    }
}
