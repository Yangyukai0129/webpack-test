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
                console.log(response.data.films)

                this.setState({
                    filmList: response.data.films
                })
            }
        ).catch(error => console.log(error))
    }

    render() {
        return (
            <div>{this.state.filmList.map(item =>
                <FilmItem key={item.id}></FilmItem>)}</div>

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