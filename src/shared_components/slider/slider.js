import {React, useState, useEffect, useRef} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css';
import rightArrow from '../../assets/card/right_arrow.svg';
import leftArrow from '../../assets/card/left_arrow.svg';

const stacksMap = {
    'dba': 'DBA',
    'devops': 'DevOps',
    'data_analytics': 'Data Analytics',
}

const colorsMap = {

}

function SimpleSlider(props) {
    const [selectedStackIndex, setSelectedStackIndex] = useState(0);
    const [isScrollable, setIsScrollable] = useState(false);
    const [techToStackIndexMapping, setTechToStackIndexMapping] = useState({});
    const sliderRef = useRef(null);
    const searchTimeoutRef = useRef(null);

    const checkScrollability = () => {
        const selectedStackName = props.stacks.available_stacks[selectedStackIndex];
        const stackItems = props.stacks[selectedStackName] || [];
        const totalStacksWidth = stackItems.length * 59;
        const containerWidth = parseInt(props.width, 10) - 64;
        setIsScrollable(containerWidth < totalStacksWidth);
    };
    // useEffect(() => {
    //     if (Object.keys(techToStackIndexMapping).length > 0 && props.searchInput) {
    //         const techName = props.searchInput.toLowerCase(); // Convert search input to lowercase
    //         const stackIndex = techToStackIndexMapping[techName];
    //
    //         if (stackIndex !== undefined) {
    //             setSelectedStackIndex(stackIndex);
    //         }
    //     }
    // }, [props.stacks, props.searchInput, techToStackIndexMapping]);

    useEffect(() => {
        const mapping = {};
        props.stacks.available_stacks.forEach((stackName, index) => {
            props.stacks[stackName].forEach(tech => {
                mapping[tech.name.toLowerCase()] = index;
            });
        });
        setTechToStackIndexMapping(mapping);
    }, [props.stacks]);

    useEffect(() => {
        if (Object.keys(techToStackIndexMapping).length > 0 && props.searchInput) {
            const normalizedSearchInput = props.searchInput.toLowerCase();

            clearTimeout(searchTimeoutRef.current);
            searchTimeoutRef.current = setTimeout(() => {
                const matchingTechName = Object.keys(techToStackIndexMapping).find(techName =>
                    techName.toLowerCase().includes(normalizedSearchInput)
                );
                if (matchingTechName !== undefined) {
                    const stackIndex = techToStackIndexMapping[matchingTechName];
                    setSelectedStackIndex(stackIndex);
                    if (sliderRef.current) {
                        sliderRef.current.slickGoTo(stackIndex);
                    }
                }
            }, 300); //,debouncing
        }
    }, [props.stacks, props.searchInput, techToStackIndexMapping]);


    useEffect(() => {
        checkScrollability();
        window.addEventListener('resize', checkScrollability);
        return () => window.removeEventListener('resize', checkScrollability);
    }, [props.width, selectedStackIndex, props.stacks]);

    const availableStacks = props.stacks.available_stacks;
    const elements = availableStacks.map((item) => {
        const itemNew=item;
        if (stacksMap[item]) {
            item = stacksMap[item]
        } else {
            item = item.charAt(0).toUpperCase() + item.slice(1)
        }
        return (<div className={`slider-element ${itemNew}`} key={item}>
            {item}
        </div>);
    });



    const changeStack = (direction) => {
        const stackSize = availableStacks.length;
        let newIndex;

        if (direction === 'next') {
            newIndex = (selectedStackIndex + 1) % stackSize;
        } else if (direction === 'prev') {
            newIndex = (selectedStackIndex - 1 + stackSize) % stackSize;
        }

        setSelectedStackIndex(newIndex);
    };

    function SampleNextArrow(props) {
        const {className, style, onClick, currentStack} = props;
        const handleNextClick = () => {
            if (onClick) {
                onClick();
                changeStack('next');
                // props.changeStack(currentStack);
            }
        };
        return (<div
            className={className}
            style={{
                ...style,
                display: 'block',
                background: `url(${rightArrow}) no-repeat center center`,
                backgroundSize: 'contain'
            }}
            onClick={handleNextClick}
        />);
    }

    function SamplePrevArrow(props) {
        const {className, style, onClick, currentStack} = props;
        const handlePrevClick = () => {
            if (onClick) {
                onClick();
                changeStack('prev');
                // props.changeStack(currentStack);
            }
        };
        return (<div
            className={className}
            style={{
                ...style,
                display: 'block',
                background: `url(${leftArrow}) no-repeat center center`,
                backgroundSize: 'contain'
            }}
            onClick={handlePrevClick}
        />);
    }

    function getSelectedStackData() {
        const selectedStackName = availableStacks[selectedStackIndex];
        let items = [];
        props.stacks[selectedStackName].forEach((stackField) => {
            items.push(<div className="img-wrapper" key={stackField.name}>
                <img
                    className="result-item"
                    src={stackField.icon}
                    title={stackField.name}
                    alt={stackField.name}
                />
            </div>)
        })
        return items
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow changeStack={changeStack}/>,
        prevArrow: <SamplePrevArrow changeStack={changeStack}/>,
        afterChange: currentIndex => {
            setSelectedStackIndex(currentIndex);
            checkScrollability();
        },
        initialSlide: selectedStackIndex
    };


    return (<>
        <div className="simple-slider">
            <Slider ref={sliderRef} {...settings} className='slid'>
                {elements}
            </Slider>
        </div>
        <hr/>
        <div className={`card-result-wrapper ${isScrollable ? 'is-scrollable' : ''}`}>
            <div className="card-result">
                {getSelectedStackData()}
            </div>
        </div>
    </>);
}

export default SimpleSlider;
