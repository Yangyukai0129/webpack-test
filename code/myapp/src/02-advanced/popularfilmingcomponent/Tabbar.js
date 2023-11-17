import React, { Component } from 'react'

export default class Tabbar extends Component {
    state = {
        list: [
            {
                id: 1,
                mytext: "影片"
            },
            {
                id: 2,
                mytext: "票券"
            },
            {
                id: 3,
                mytext: "我的"
            }
        ],
        current: this.props.defaultValue
    }

    render() {
        // 不要直接進行修改
        // this.state.current = this.props.parentcurrent

        // render會調用setState，setState又會調用render，會進入無限循環
        // this.setState({
        //     current:this.props.parentcurrent
        // })
        return (
            <div>
                <ul>
                    {
                        this.state.list.map(
                            (item, index) =>
                                <li key={item.id} className={this.state.current === index ? 'active' : ''}
                                    onClick={this.handleClick.bind(this, index)}>{item.mytext}
                                </li>)
                    }
                </ul>
            </div>
        )
    }

    handleClick(index) {
        console.log(index)

        this.setState({
            current: index
        })

        //通知父組件，修改父組件的狀態
        this.props.event(index)
    }

}
