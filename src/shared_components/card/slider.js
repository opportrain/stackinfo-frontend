import {React,useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css';
import rightArrow from '../../assets/card/card-body/right_arrow.svg';
import leftArrow from '../../assets/card/card-body/left_arrow.svg';



function SimpleSlider(props) {
    // const colors = ["rgba(204, 212, 255, 0.35)", "rgba(162,210,255,0.35)", "rgba(255,200,221,0.35)"];
    const colors = ['purple','red', 'blue', 'pink','grean'];
    const availableStacks = props.availableStacks;
    console.log("Available Stacks:", availableStacks);

    const elements = availableStacks.map((item, index) => {
        const colorIndex = index % colors.length;
        const colorClass = colors[colorIndex];

        return (
            <div className={`slider-element ${colorClass}`} key={item}>
                {item}
            </div>
        );
    });


    const [selectedStackIndex, setSelectedStackIndex] = useState(0);

    const changeStack = (direction) => {
        const stackSize = availableStacks.length;
        let newIndex;

        if (direction === 'next') {
            newIndex = (selectedStackIndex + 1) % stackSize;
        } else if (direction === 'prev') {
            newIndex = (selectedStackIndex - 1 + stackSize) % stackSize;
        }

        setSelectedStackIndex(newIndex);

        const newStack = availableStacks[newIndex];
        props.changeStack(newStack);
    };

    function SampleNextArrow(props) {
        const { className, style, onClick, currentStack } = props;
        const handleNextClick = () => {
            if (onClick) {
                onClick();
                changeStack('next');
                // props.changeStack(currentStack);
            }
        };
        return (
            <div
                className={className}
                style={{ ...style, display: 'block', background: `url(${rightArrow}) no-repeat center center`, backgroundSize: 'contain' }}
                onClick={handleNextClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick, currentStack } = props;
        const handlePrevClick = () => {
            if (onClick) {
                onClick();
                changeStack('prev');
                // props.changeStack(currentStack);
            }
        };
        return (
            <div
                className={className}
                style={{ ...style, display: 'block', background: `url(${leftArrow}) no-repeat center center`, backgroundSize: 'contain' }}
                onClick={handlePrevClick}
            />
        );
    }

    // const [selectedStack, setSelectedStack] = useState(null);
    //
    // const changeStack = (newStack) => {
    //     setSelectedStack(newStack); // Set the selected stack in the state
    //     props.changeStack(newStack); // Pass the selected stack to the parent component
    // };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow changeStack={changeStack}  />,
        prevArrow: <SamplePrevArrow changeStack={changeStack}  />
    };

    return (
        <div className="simple-slider">
            <Slider {...settings} className='slid'>
                {elements}

            </Slider>
            {/* Add any additional content or customization as needed */}
        </div>
    );
}

export default SimpleSlider;
