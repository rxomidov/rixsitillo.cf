import React from 'react';
import {FaFacebookF, FaTwitter, FaPinterest, FaInstagram, FaTelegram} from "react-icons/all";
import logo from '../images/shirt_00000.png'

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <div className="container">
                <div className="contact-section">
                    <div className="cs-logo">
                        <img src={logo} alt="logo"/>
                        <div className="row justifyCenter">
                            <div className="col-6">
                                jjjjjjjjjjj
                            </div>
                            <div className="contact-circles">
                                <ul><FaFacebookF/></ul>
                                <ul><FaTwitter/></ul>
                                <ul><FaPinterest/></ul>
                                <ul><FaTelegram/></ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Contact;