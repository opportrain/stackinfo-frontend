import './feedback-modal.css'
import Feedback from '../../assets/Feedback.svg';
import Close from '../../assets/close.svg';
import React, {useState} from "react";
import Rate1 from '../../assets/rate-options/rate-1.svg';
import Rate2 from '../../assets/rate-options/rate-2.svg';
import Rate3 from '../../assets/rate-options/rate-3.svg';
import Rate4 from '../../assets/rate-options/rate-4.svg';
import Rate5 from '../../assets/rate-options/rate-5.svg';
import R1 from '../../assets/rate-options/1.png';
import R2 from '../../assets/rate-options/2.png';
import R3 from '../../assets/rate-options/3.png';
import R4 from '../../assets/rate-options/4.png';
import R5 from '../../assets/rate-options/5.png';

function FeedbackModal () {
    const [formData, setFormData] = useState({
        q1: '',
        rate: '',
        text: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    return(
        <div className="modal-wrapper">
            <div className="feedback-modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="modal-title">
                            <img src={Feedback} alt="message logo"/>
                            Feedback
                        </div>
                        <button className="close-btn">
                            <img src={Close} alt="message logo"/>
                        </button>
                    </div>
                    <form>
                        <div className="modal-form-first-part">
                            <div className="question">
                                How are we doing?
                            </div>
                            <div className="sub-question">
                                Did you find this data helpful?
                            </div>
                            <div className="options">
                                <div className="option">
                                    <input className="q1-options" type="radio" id="Yes" name="q1" value="Yes"/>
                                    <label htmlFor="Yes">Yes</label>
                                </div>
                                <div className="option">
                                    <input className="q1-options" type="radio" id="No" name="q1" value="No"/>
                                    <label htmlFor="No">No</label>
                                </div>
                            </div>
                        </div>
                        <div className="modal-form-second-part">
                            <div className="rate-question">
                                What do you think of my homepage design?
                                <br/>
                                Would love to hear your thoughts!
                            </div>
                            <div className="rate-options">
                                <label>
                                    <input id="op-1" type="radio" name="rate" value="1"/>
                                    <img className='option-1' src={R1} alt="Option 1"/>
                                    <label htmlFor="op-1" className="rate-txt">Needs Improvement</label>
                                </label>
                                <label>
                                    <input id="op-2" type="radio" name="rate" value="2"/>
                                    <img className='option-2' src={R2} alt="Option 2"/>
                                    <label htmlFor="op-2" className="rate-txt">Below Expectations</label>
                                </label>
                                <label>
                                    <input id="op-3" type="radio" name="rate" value="3"/>
                                    <img className='option-3' src={R3} alt="Option 3"/>
                                    <label htmlFor="op-3" className="rate-txt">Average</label>
                                </label>
                                <label>
                                    <input id="op-4" type="radio" name="rate" value="4"/>
                                    <img className='option-4' src={R4} alt="Option 4"/>
                                    <label htmlFor="op-4" className="rate-txt">Above Average</label>
                                </label>
                                <label>
                                    <input id="op-5" type="radio" name="rate" value="5"/>
                                    <img className='option-5' src={R5} alt="Option 5"/>
                                    <label htmlFor="op-5" className="rate-txt">Outstanding</label>
                                </label>
                            </div>
                        </div>
                        <div className="modal-form-third-part">
                            <input className="text-area" onChange={handleChange} name="text" type="text" placeholder="Text"/>
                            <input className="submit-btn" type="submit" value="Submit"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default FeedbackModal;
