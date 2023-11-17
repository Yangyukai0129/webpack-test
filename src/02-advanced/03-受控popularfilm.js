import React, { Component } from 'react'
import "./CSS/02-film.css"
import Film from "./popularfilmingcomponent2/Film"
import Ticket from "./popularfilmingcomponent2/Ticket"
import Mine from "./popularfilmingcomponent2/Mine"
import Tabbar from "./popularfilmingcomponent2/Tabbar"
import Navbar from "./popularfilmingcomponent2/Navbar"



export default class App extends Component {

    state = {
        current: 0,
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
        ]
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
                } current={this.state.current} list={this.state.list}></Tabbar>

            </div>
        )
    }


}