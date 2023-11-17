import React, { Component } from 'react'

export default class Confirm extends Component {
  render() {
    return (
      <div>
        <button onClick={()=>this.props.event()}>確定</button>
      </div>
    )
  }
}
