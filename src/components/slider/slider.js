import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const photo = [
    {
        name: 'photo 1',
        url: 'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wJTIwd2FsbHBhcGVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        name: 'photo 2',
        url: 'https://images.unsplash.com/photo-1611202335804-ebc2d6718f53?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwd2FsbHBhcGVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        name: 'photo 3',
        url: 'https://images.unsplash.com/photo-1605784401368-5af1d9d6c4dc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGxhcHRvcCUyMHdhbGxwYXBlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
]

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className='mt-4 text-white font-bold '>
                <h2 className='mb-4'>WHAT CAN I DO?</h2>
                <Slider {...settings}>
                    <div className=''>
                        <img src='slider11.png' />
                    </div>
                    <div>
                        <img src='slider2.png' />
                    </div>
                    <div>
                        <img src='slider3.png' />
                    </div>
                </Slider>
            </div>
        );
    }
}