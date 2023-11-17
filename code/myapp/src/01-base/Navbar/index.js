import React, { Component } from 'react'
import propTypes from 'prop-types'
console.log(propTypes)

export default class Navbar extends Component {

  state = {
    // 只能內部自己使用，外部沒辦法改變
  }

  //類屬性 (做驗證用的)
  static propTypes = {
    title: propTypes.string,
    leftshow: propTypes.bool
  }

  //默認值
  static defaultProps = {
    leftshow: true
  }

  //屬性是父組件傳來的， this.props
  render() {
    console.log(this.props)
    let { title, leftshow } = this.props
    return (
      <div>
        {leftshow && <button>返回</button>}
        navbar-{title}
      </div>
    )
  }


}



class Test {
  a = 100 //對象屬性
  static a = 1 //類屬性
}

let obj = new Test();
console.log(obj.a, Test.a)


