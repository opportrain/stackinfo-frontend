import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css';
import rightArrow from '../../assets/card/card-body/right_arrow.svg';
import leftArrow from '../../assets/card/card-body/left_arrow.svg';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', background: `url(${rightArrow}) no-repeat center center`, backgroundSize: 'contain' }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', background: `url(${leftArrow}) no-repeat center center`, backgroundSize: 'contain' }}
            onClick={onClick}
        />
    );
}
const colors = ['rgba(204, 212, 255, 0.35)', 'rgba(162,210,255,0.35)', 'rgba(255,200,221,0.35)'];

function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div className="simple-slider">
            <Slider {...settings} className='slid'>
                <div className='slider-element'>
                    Languages
                </div>
                <div className='slider-element'>
                    Frameworks
                </div>
                <div className='slider-element'>
                    Frameworks
                </div>
                <div className='slider-element'>
                    Frameworks
                </div>
                <div className='slider-element'>
                    {/* Content for slide 3 */}
                </div>
                {/* Add more slides as needed */}
            </Slider>
            {/* Add any additional content or customization as needed */}
        </div>
    );
}

export default SimpleSlider;
