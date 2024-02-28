import React, {useState, useEffect} from 'react';
import './card.css'
import SimpleSlider from "./slider";

function Card (props) {
    const stacks=props.stacks
    const availableStacks= stacks.available_stacks
    const [selectedStack, setSelectedStack]=useState(availableStacks[0])
    const [SelectedIcons ,setIcons]=useState([])

    const changeStack = (newStack) => {
        console.log("Changing stack to:", newStack);
        setSelectedStack(newStack);
        chnageIcons();
    }
    const chnageIcons = () => {
        const stack = props.stacks[selectedStack];
        if (stack) {
            setIcons(
                stack.map((stackfield) => {
                    return (
                        <div className="img-wraper" key={stackfield.name}>
                            <img
                                className="result-item"
                                src={stackfield.icon}
                                title={stackfield.name}
                                alt={stackfield.name}
                            />
                        </div>
                    );
                })
            );
        } else {
            console.error(`Stack "${selectedStack}" is not available.`);
        }
    };

    useEffect(() => {
        chnageIcons(selectedStack);
    }, [selectedStack]);

        return (
            <div className="card">
                    <div className="head">
                            <img className="card-logo" src={props.logo} alt="card-logo"/>
                            <div className="card-description">
                        <div className="company-name">{props.company_name}</div>
                        <div className="company-slogan">{props.slogan}</div>
                </div>
        </div>
        <hr/>
        <div className="card-body">
                <SimpleSlider
                    availableStacks={availableStacks}
                    changeStack={changeStack}
                />
        </div>
        <hr/>
            <div className="card-result">
                    {SelectedIcons}
            </div>
    </div>
);
}

export default Card;
