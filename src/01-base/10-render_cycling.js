import React, { Component } from 'react'

export default class App extends Component {
    state = {
        list: [
            {
                id: 1,
                text: "abc"
            },
            {
                id: 2,
                text: "def"
            },
            {
                id: 3,
                text: "ghi"
            }
        ]
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.list.map(item=>
                        <li key={item.id}>{item.text}-{item.id}</li>
                    )}
                </ul>
            </div>
        )
    }
}
