import React, { Component } from 'react'

// export default class Tabbar extends Component {

//     render() {
//         // 不要直接進行修改
//         // this.state.current = this.props.parentcurrent

//         // render會調用setState，setState又會調用render，會進入無限循環
//         // this.setState({
//         //     current:this.props.parentcurrent
//         // })
//         return (
//             <div>
//                 <ul>
//                     {
//                         this.props.list.map(
//                             (item, index) =>
//                                 <li key={item.id} className={this.props.current === index ? 'active' : ''}
//                                     onClick={this.handleClick.bind(this, index)}>{item.mytext}
//                                 </li>)
//                     }
//                 </ul>
//             </div>
//         )
//     }

//     handleClick(index) {
//         console.log(index)

//         // this.setState({
//         //     current: index
//         // })

//         //通知父組件，修改父組件的狀態
//         this.props.event(index)
//     }

// }

const Tabbar = (props) => {

    // function handleClick(index) {
    //     console.log(index)

    //     // this.setState({
    //     //     current: index
    //     // })

    //     //通知父組件，修改父組件的狀態
    //     this.props.event(index)
    // }

    return (
        <div>
            <ul>
                {
                    props.list.map(
                        (item, index) =>
                            <li key={item.id} className={props.current === index ? 'active' : ''}
                                onClick={()=>props.event(index)}>{item.mytext}
                            </li>)
                }
            </ul>
        </div >
    )
}

export default Tabbar


