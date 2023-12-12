import React from 'react';
import Slider from 'react-slick';
import './slider.css'; // Adjust the import based on your file name
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block' }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block' }}
            onClick={onClick}
        />
    );
}
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
            <Slider {...settings}>
                <div className='slider-element'>
                    language
                </div>
                <div className='slider-element'>
                    frameworks
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
