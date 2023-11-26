import React, { Component } from 'react'
import Kswiper from './swiper/swiper'
import KswiperItem from './swiper/SwiperItem'
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import axios from 'axios';

export default class App extends Component {
    state = {
        list: [],
        // 輪播圖循環(Boolean不用引號)
        loop: true
    }

    render() {
        return (
            <div>
                <Kswiper>
                    {/* <div className="swiper-slide">555</div> */}
                    {/* <KswiperItem>111</KswiperItem>
                    <KswiperItem>222</KswiperItem>
                    <KswiperItem>333</KswiperItem> */}
                    {this.state.list.map(item => <KswiperItem key={item.title}>{item.title}</KswiperItem>)}
                </Kswiper>
            </div>
        )
    }

    componentDidMount() {
        axios.get("/test.json").then(
            res => {
                console.log(res.data)
                setTimeout(() => {
                    this.setState({
                        list: res.data.films
                    },
                        // react18後將setState變異步了，可以在setState傳第二個參數-回調函數，在回調函數進行初始化
                        () => {
                            // 如果使用 initSwiper()，initSwiper 函数内的 this 将不再指向组件的实例，而是指向全局对象（在浏览器中通常是 window 对象）。这会导致在 initSwiper 函数中无法正确访问组件的实例，也无法访问组件的状态、属性等。
                            // 为了确保在函数内部能够正确访问组件实例，需要使用 this.initSwiper()。这样，在函数内部的 this 将指向当前组件的实例，使得函数能够正确访问组件的属性、状态等信息。
                            this.initSwiper()

                        })
                }, 1000)
            })
    }
    initSwiper() {
        new Swiper(".swiper", {
            modules: [Navigation, Pagination],
            pagination: {
                el: '.swiper-pagination',
            },
            // 輪播圖是否循環
            loop: this.state.loop
        })
    }

}
