import React, { Component } from 'react'
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default class App extends Component {

    state = {
        list: [],
        swiper: ""
    }
    render() {
        return (
            <div>
                <div className="swiper" style={{ height: "100px", background: "yellow" }}>
                    {/* <!-- Additional required wrapper --> */}
                    <div className="swiper-wrapper">
                        {/* <!-- Slides --> */}
                        {this.state.list.map(item =>
                            <div className="swiper-slide" key={item}>{item}</div>
                        )}
                    </div>
                    {/* <!-- If we need pagination --> */}
                    <div class="swiper-pagination"></div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                list: ["111", "222", "333"]
            },
                // react18後將setState變異步了，可以在setState傳第二個參數-回調函數，在回調函數進行初始化
                () => {
                    // 如果使用 initSwiper()，initSwiper 函数内的 this 将不再指向组件的实例，而是指向全局对象（在浏览器中通常是 window 对象）。这会导致在 initSwiper 函数中无法正确访问组件的实例，也无法访问组件的状态、属性等。
                    // 为了确保在函数内部能够正确访问组件实例，需要使用 this.initSwiper()。这样，在函数内部的 this 将指向当前组件的实例，使得函数能够正确访问组件的属性、状态等信息。
                    this.initSwiper()

                })
        }, 1000)
    }
    initSwiper() {
        new Swiper(".swiper", {
            modules: [Navigation, Pagination],
            pagination: {
                el: '.swiper-pagination',
            }
        })
    }

}
