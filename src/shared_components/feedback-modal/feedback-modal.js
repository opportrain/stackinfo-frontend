import './feedback-modal.css'
import Feedback from '../../assets/Feedback.svg';
import Close from '../../assets/close.svg';
import React from "react";
import Rate1 from '../../assets/rate-options/rate-1.svg';
import Rate2 from '../../assets/rate-options/rate-2.svg';
import Rate3 from '../../assets/rate-options/rate-3.svg';
import Rate4 from '../../assets/rate-options/rate-4.svg';
import Rate5 from '../../assets/rate-options/rate-5.svg';

function FeedbackModal () {

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
                                <label className="option">
                                    <input type="radio" name="q1" value="Yes"/>
                                    <label htmlFor="Yes">Yes</label>
                                </label>
                                <label className="option">
                                    <input type="radio" name="q1" value="No"/>
                                    <label htmlFor="No">No</label>
                                </label>
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
                                    <input type="radio" name="rate" value="1"/>
                                    <img src={Rate1} alt="Option 1"/>
                                    <label className="rate-txt">Needs Improvement</label>
                                </label>
                                <label>
                                    <input type="radio" name="rate" value="2"/>
                                    <img src={Rate2} alt="Option 2"/>
                                    <label className="rate-txt">Below Expectations</label>
                                </label>
                                <label>
                                    <input type="radio" name="rate" value="3"/>
                                    <img src={Rate3} alt="Option 3"/>
                                    <label className="rate-txt">Average</label>
                                </label>
                                <label>
                                    <input type="radio" name="rate" value="4"/>
                                    <img src={Rate4} alt="Option 4"/>
                                    <label className="rate-txt">Above Average</label>
                                </label>
                                <label>
                                    <input type="radio" name="rate" value="5"/>
                                    <img src={Rate5} alt="Option 5"/>
                                    <label className="rate-txt">Outstanding</label>
                                </label>
                            </div>
                        </div>
                        <div className="modal-form-third-part">
                            test
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default FeedbackModal;
