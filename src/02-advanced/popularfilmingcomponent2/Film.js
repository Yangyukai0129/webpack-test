import React, { Component } from 'react'
import axios from 'axios'

export default class Film extends Component {

    constructor() {
        super()
        this.state = {
            cinemaList: [],
            backupList: [],
            
        }
        //axios第三方的library，專門用於請求數據
        //axios.get("url").then(res=>{}).catch(err=>{console.log(err)})

        axios.get("https://jsonplaceholder.typicode.com/posts").then(
            res => {

                console.log(res.data)

                this.setState({
                    cinemaList: res.data,
                    backupList: res.data
                })

                console.log(this.state.cinemaList)

            }).catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <input onInput={this.handleClick.bind(this)}></input>
                {this.state.cinemaList.map(item => <dl key={item.id}><dd>{item.title}</dd></dl>)}
                {console.log(this.state.cinemaList)}
            </div>
        )
    }

    
    handleClick(e) {
        console.log("click", e.target.value)

        let newlist = this.state.cinemaList.filter(item => {
            return item.title.toUpperCase().includes(e.target.value.toUpperCase())
        })

        console.log(newlist)


    }

}

// filer
// let a = ['abc','bcd','cda']
// let arr = a.filter(item=>item.includes('a'))
// console.log(arr)