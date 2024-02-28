import React from 'react';
import './footer.css'
import GitHub from "../../assets/social-icons/GitHub.svg"
import LinkedIn from "../../assets/social-icons/LinkedIn.svg"
import Telegram from "../../assets/social-icons/Telegram.svg"
import Instagram from "../../assets/social-icons/Instagram.svg"
import facebock from "../../assets/social-icons/Facebook.svg"

function Footer () {
    return (
        <div className="footer">
            <div className="title">
                <div>Stack<span className="logo-span">Info</span></div>
            </div>
            <div >
                <div><span className="footer-span">Info@stackInfo.Info</span></div>
            </div>
            <div className="social-icons-bar">
                <img className="icon" src={GitHub} alt="GitHub-logo" />
                <img className="icon" src={LinkedIn} alt="LinkedIn-logo" />
                <img className="icon" src={Telegram} alt="Telegram-logo" />
                <img className="icon" src={facebock} alt="facebock-logo" />
                <img className="icon" src={Instagram} alt="Instagram-logo" />
            </div>
            <div className="copyright">
                ©2024 StackInfo Inc
            </div>
        </div>
    );
}

export default Footer;
