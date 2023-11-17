import React, { Component } from 'react'
import "./CSS/01-index.css"

export default class App extends Component {

    state = {
        mytext: "",
        list: [
            {
                id: 1,
                mytext: "c8 c8 ",
                isChecked: "false"
            }
        ]
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.mytext}
                    onChange={(e) => {
                        this.setState({
                            mytext: e.target.value
                        })
                    }}></input>

                <button onClick={() => this.handleClick()}>Add</button>

                <ul>
                    {this.state.list.map(
                        (item, index) =>
                            <li key={item.id}>
                                <input type="checkbox" checked={this.state.isChecked}
                                    onChange={() => this.handleClickindex(index)}></input>
                                <span dangerouslySetInnerHTML={
                                    { __html: item.mytext }}
                                    style={{ textDecoration: text.isChecked ? "line-through" : "" }}
                                ></span>

                                <button onClick={() => this.delClick(index)}>del</button>
                            </li>
                    )}
                </ul>

                <div className={this.state.list.length === 0 ? "" : "hidden"}>暫無代辦事項</div>
            </div >
        )
    }

    handleClick() {
        let newlist = [...list]
        newlist.push({
            id: Math.random() * 1000,
            mytext: this.state.mytext
        })

        this.setState({
            list: newlist,
            mytext: ""
        })
    }

    handleClickindex = (index) => {
        let newlist = [...list]
        newlist[index].isChecked = !newlist[index].isChecked

        this.setState({
            list: newlist
        })
    }

    delClick = (index) => {
        let newlist = [...list]
        newlist.splice(index, 1)
        this.setState({
            list: newlist
        })
    }
}
