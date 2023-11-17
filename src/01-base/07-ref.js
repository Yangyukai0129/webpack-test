import React, { Component } from 'react'

export default class App extends Component {
    myref = React.createRef();
    render() {
        return (
            <div>
                <input ref={this.myref}></input>

                <button onClick={() => {

                    console.log("click", this.myref.current.value)
                }}>add1</button>

                <button onClick={this.handleClick2.bind(this)}>add2</button>
            </div>
        )
    }
    handleClick2() {
        console.log("click2", this.myref.current.value)
    }

}