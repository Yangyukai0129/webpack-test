import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

    constructor() {
        super()
        this.state = {
            Film: [],
            mytext: ""
        }

        axios.get("https://jsonplaceholder.typicode.com/posts").then(
            response => {
                console.log(response.data)

                this.setState({
                    Film: response.data
                })

            }).catch(
                error => console.log(error)
            )
    }

    render() {
        return (
            <div>
                <input value={this.state.mytext} onChange={(e) => {
                    this.setState({
                        mytext: e.target.value
                    })
                }}></input>
                {this.getFilmList().map((item) => 
                    <dl key={item.id}>
                        <dd>{item.title}</dd>
                    </dl>
                )}
            </div>
        )
    }

    getFilmList() {
        return this.state.Film.filter((item) => {
            return item.title.toUpperCase().includes(this.state.mytext.toUpperCase())
        })
    }
}
