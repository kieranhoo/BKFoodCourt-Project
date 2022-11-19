import React from "react";
import './Footer.css';
import Logo from "./Logo";
export default function Footer() {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <div className="footer-logo_icon"><Logo/></div>
            </div>
            <div className="footer-line"/>
            <div className="footer-text_container">
                <div className="footer-text-conpany">
                    Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </div>
                <div className="footer-text-product">
                    Đồ Ăn, đồ uống
                </div>
                <div className="footer-text-link">
                    example.com
                </div>
                <div className="footer-text-contact">
                    fb.com/iduchungho
                </div>
            </div>
        </div>
    );
}