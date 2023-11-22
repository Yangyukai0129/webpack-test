import React, { Component } from 'react'

export default class App extends Component {

    state = {
        list: ['00', '11', '22', '33', '44', '55', '66', '77', '88', '99'],
        current: 0
    }
    render() {

        return (
            <div>
                <input type='number' onChange={(event) => this.setState({
                    // 原本是字串，要轉成數字才可以正常比對
                    current: Number(event.target.value)
                })}></input>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {this.state.list.map((item, index) =>
                        <BOX key={item} current={this.state.current} index={index}></BOX>
                    )}
                </div>
            </div>
        )
    }
}

class BOX extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        // 只更新舊的box跟新的box(e.g.現在有10個box，如果沒有這段的話會更新10次，有這段的話只會更新2次)
        if (this.props.current === this.props.index || nextProps.current === nextProps.index)
            return true
        return false
    }

    render() {
        console.log('render')
        return (
            <div style={{
                width: '100px', height: '100px',
                border: this.props.current === this.props.index ? '5px solid red' : '1px solid gray',
                margin: '5px'
            }}></div>
        )
    }
}