import React, { Component } from 'react'
import Confirm from './18-1-受控組件(Confirm)'
import Cancel from './18-1-受控組件(Cancel)'

export default class App extends Component {

    state = {
        mytext: "kevin"
    }

    render() {
        return (
            <div>
                <input type='text' value={this.state.mytext}
                    onChange={(e) => {
                        console.log(e.target.value)
                        this.setState({
                            mytext: e.target.value
                        })
                    }}
                ></input>
                <Confirm event={() => console.log(this.state.mytext)}></Confirm>
                <Cancel event={()=>this.setState({
                    mytext:""
                })}></Cancel>
            </div>
        )
    }
}
