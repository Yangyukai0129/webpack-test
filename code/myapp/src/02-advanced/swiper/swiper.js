import React, { Component } from 'react'
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default class Kswiper extends Component {

    render() {
        return (
            <div>
                <div className="swiper" style={{ height: "100px", background: "yellow" }}>
                    {/* <!-- Additional required wrapper --> */}
                    <div className="swiper-wrapper">
                        {this.props.children}
                    </div>
                    {/* <!-- If we need pagination --> */}
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }
}
