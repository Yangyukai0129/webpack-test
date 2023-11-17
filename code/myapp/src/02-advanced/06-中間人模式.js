import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            filmList: []
        }
        axios.get("/test.json").then(
            response => {
                console.log(response.data)
                this.setState({
                    filmList: response.data
                })
            }
        ).catch(error => console.log(error))
    }

    render() {
        return (
            <div>{this.state.filmList.map(item =>
                <FilmItem></FilmItem>)}</div>
        )
    }

}

class FilmItem extends Component {
    render() {
        return (
            <div>
                filmitem
            </div>
        )
    }
}