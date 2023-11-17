import React, { Component } from 'react'
import "./CSS/02-film.css"
import Film from "./popularfilmingcomponent/Film"
import Ticket from "./popularfilmingcomponent/Ticket"
import Mine from "./popularfilmingcomponent/Mine"

export default class App extends Component {

  state = {
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
    ],
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

        {/* {this.state.current === 0 && <Film></Film>}
        {this.state.current === 1 && <Ticket></Ticket>}
        {this.state.current === 2 && <Mine></Mine>} */}

        {this.which()}

        <ul>
          {this.state.list.map(
            (item, index) => <li key={item.id} className={this.state.current === index ? 'active' : ''} onClick={this.handleClick.bind(this, index)}>{item.mytext}</li>)}
        </ul>
      </div>
    )
  }

  handleClick(index) {
    console.log(index)

    this.setState({
      current: index
    })
  }
}
