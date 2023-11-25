import React, { Component } from 'react'
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default class App extends Component {

    state = {
        list: ["111", "222", "333"]
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
        new Swiper(".swiper", {
            modules: [Navigation, Pagination],
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            }
        })
    }
}
