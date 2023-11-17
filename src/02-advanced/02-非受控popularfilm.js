import React, { Component } from 'react'
import "./CSS/02-film.css"
import Film from "./popularfilmingcomponent/Film"
import Ticket from "./popularfilmingcomponent/Ticket"
import Mine from "./popularfilmingcomponent/Mine"
import Tabbar from "./popularfilmingcomponent/Tabbar"
import Navbar from "./popularfilmingcomponent/Navbar"

// Tabbar有state(狀態)，所以目前只會在第一次的時候紅字會在正確的位置
// 所以讓每個子組件有自己的狀態會有這個狀況
// 如果React組件的數據渲染是否被調用者傳遞的props完全控制，可以完全控制的話為受控組件，不可以的話為非受控組件


export default class App extends Component {

    state = {
        current: 0
    }

    which() {
        switch (this.state.current) {
            case 0:
                return <Film></Film>
            case 1:
                return <Ticket></Ticket>
            case 2:
                return <Mine></Mine>
            default:
                return null
        }
    }

    render() {
        return (
            <div>
                <Navbar event={() => {
                    console.log("navbar-center", "告訴tabbar去切換到Mine組件")

                    this.setState({
                        current: 2
                    })
                }}></Navbar>
                {/* {this.state.current === 0 && <Film></Film>}
        {this.state.current === 1 && <Ticket></Ticket>}
        {this.state.current === 2 && <Mine></Mine>} */}

                {this.which()}
                <Tabbar event={(index) => {
                    console.log("通知父組件", index)
                    this.setState({
                        current: index
                    })
                }
                } defaultValue={this.state.current}></Tabbar>

            </div>
        )
    }


}