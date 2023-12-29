import React, { Component } from 'react'
import axios from 'axios'
import './CSS/06-communication.css'

// 創建Context對象
const GlobalContext = React.createContext()

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            filmList: [],
            info: ""
        }
        axios.get("/test.json").then(
            response => {
                // console.log(response.data.films)

                this.setState({
                    filmList: response.data.films
                })
            }
        ).catch(error => console.log(error))
    }

    render() {
        return (
            <GlobalContext.Provider value={{
                // call跟sms是測試的可以不用管
                call: "打電話",
                sms: "簡訊",
                info: this.state.info,
                changeInfo: (value) => {
                    this.setState({
                        info: value
                    })
                }
            }}>
                < div >
                    {/* {this.state.info} */}
                    {
                        this.state.filmList.map(item =>
                            <FilmItem key={item.id} name={item.title} {...item}></FilmItem>)
                    }

                    < Filmdetail></Filmdetail >
                </div >
            </GlobalContext.Provider>
        )
    }

}

class FilmItem extends Component {
    render() {
        // console.log(this.props)
        let { id, title } = this.props
        return (
            <GlobalContext.Consumer>
                {
                    (value) => {
                        // console.log(value)
                        return (<div className='Filmitem'
                            onClick={() => {
                                // console.log(title)
                                value.changeInfo(title)
                            }}>
                            {/* {this.props.title} */}
                            <h4>{id}</h4>
                            <h4>{title}</h4>
                        </div>)
                    }
                }
            </GlobalContext.Consumer>
        )
    }
}

class Filmdetail extends Component {
    render() {
        return (
            <GlobalContext.Consumer>
                {
                    (value) =>
                        <div className="Filmdetail">
                            detail-{value.info}
                        </div>
                }
            </GlobalContext.Consumer>
        )
    }
}