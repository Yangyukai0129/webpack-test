import React, { Component, useEffect } from 'react'

export default class App extends Component {

    state = {
        isCreated: true
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        isCreated: !this.state.isCreated
                    })
                }}>click</button>
                {/* {this.state.isCreated ? <Child></Child> : ""} */}
                {this.state.isCreated && <Child></Child>}
            </div>
        )
    }
}

function Child() {
    // useEffect 和 useLayoutEffect 都是 React 中的 Hook，它们用于处理副作用（side effects），但有一些关键的区别：

    // 触发时机：

    // useEffect 在浏览器渲染完成之后触发，不会阻塞浏览器渲染。
    // useLayoutEffect 在浏览器布局和绘制之后、在浏览器完成 paint 阶段之前触发。因此，它会在浏览器完成布局但尚未完成渲染时同步执行。
    // 对性能的影响：

    // useEffect 对性能的影响较小，因为它是异步执行的，不会阻塞浏览器渲染。
    // useLayoutEffect 在同步阶段执行，可能会导致布局抖动（layout thrashing）和性能问题，特别是在处理大量 DOM 元素时。
    // 建议的使用场景：

    // 一般情况下，如果你的副作用不需要同步执行，使用 useEffect 即可。
    // 如果你的副作用需要同步执行，或者需要在 DOM 更新之前进行操作，可以考虑使用 useLayoutEffect。
    // 返回值：

    // useEffect 的回调函数可以返回一个清理函数，用于清理副作用。
    // useLayoutEffect 的回调函数也可以返回一个清理函数，用于清理副作用。返回的清理函数会在浏览器渲染之前执行，因此能够同步地清理副作用。
    useEffect(() => {
        window.onresize = () => {
            console.log("onresize")
        }

        var timer = setInterval(() => {
            console.log("111")
        }, 1000)

        return () => {
            console.log("組件銷毀")
            window.onresize = null
            clearInterval(timer)
        }
    }, [])
}