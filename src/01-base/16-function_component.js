import React, { Component } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 類組件 */}
        <Navbar title="導航"></Navbar>

        {/* 函數式組件 */}
        <Sidebar bg="yellow" position="right"></Sidebar>
      </div>
    )
  }
}

