import React, { Component } from 'react'
import "./CSS/01-index.css" //導入css模塊, webpack支持

export default class App extends Component {
    myref = React.createRef();

    state = {
        list: [
            {
                id: 1,
                mytext: "哈囉"
            },
            {
                id: 2,
                mytext: "你好"
            }
        ]
    }

    render() {
        return (
            <div>
                <input ref={this.myref}></input>

                <button onClick={this.handleClick.bind(this)}>add</button>

                <ul>
                    {this.state.list.map(
                        (item, index) =>
                            <li key={item.id}>

                                {/* {item.mytext}-index({index}) */}
                                {/* 富文本展示 */}
                                <span dangerouslySetInnerHTML={
                                    { __html: item.mytext }}></span>

                                {/* 刪除 */}
                                {/* <button onClick={this.delclick.bind(this,index)}>del</button> */}
                                <button onClick={() => this.delclick(index)}>del</button>
                            </li>
                    )}
                </ul>

                {/* {this.state.list.length === 0 ? <div>暫無代辦事項</div> : null} */}
                {/* {this.state.list.length === 0 && <div>暫無代辦事項</div>} */}
                <div className={this.state.list.length === 0 ? '' : 'hidden'}>暫無代辦事項</div>

            </div>
        )
    }

    handleClick = () => {
        console.log("click", this.myref.current.value)

        //不要直接修改狀態，可能會造成不可預期的問題
        // this.setState.list.push(this.myref.current.value)

        // let newlist = [...this.state.list]
        //slice是分割，但如果沒有說要分割誰可以當作複製陣列內的內容到新的陣列上
        let newlist = this.state.list.slice()
        newlist.push({
            id: Math.random() * 1000,
            mytext: this.myref.current.value
        }
        )

        this.setState(
            { list: newlist }
        )

        //清空輸入框
        this.myref.current.value = ""

    }

    delclick = (index) => {
        console.log('del-click', index)

        //不要直接修改狀態，可能會造成不可預期的問題
        //concat是合併，但如果沒有說要分割誰可以當作複製陣列內的內容到新的陣列上
        let newlist = this.state.list.concat()
        newlist.splice(index, 1)
        this.setState(
            { list: newlist }
        )
    }
}
