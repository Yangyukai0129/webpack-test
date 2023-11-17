import React, { Component } from 'react'

export default class Cancel extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.event}>取消</button>
            </div>
        )
    }
}
