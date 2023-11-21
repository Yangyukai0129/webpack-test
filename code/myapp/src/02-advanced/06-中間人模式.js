import React, { Component } from 'react'
import axios from 'axios'
import './CSS/06-communication.css'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            filmList: [],
            info: []
        }

    }

    componentDidMount() {
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
            < div >
                {/* {this.state.info} */}
                {
                    this.state.filmList.map(item =>
                        <FilmItem key={item.id} name={item.title} {...item}
                            onEvent={(value) => {
                                console.log("父組件接收", value)
                                this.setState({
                                    info: value
                                })
                            }}></FilmItem>)
                }

                < Filmdetail info={this.state.info}></Filmdetail >
            </div >
        )
    }

}

class FilmItem extends Component {
    render() {
        // console.log(this.props)
        let { id, title } = this.props
        return (
            <div className='Filmitem'
                onClick={() => { this.props.onEvent(title) }}>
                {/* {this.props.title} */}
                <h4>{id}</h4>
                <h4>{title}</h4>
            </div>
        )
    }
}

class Filmdetail extends Component {
    render() {
        return (
            <div className="Filmdetail">
                {this.props.info}
            </div>
        )
    }
}