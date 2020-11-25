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
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Architecto error fugit impedit labore minus natus nostrum qui,
                                quia veniam voluptas? Assumenda eaque mollitia nisi sint.
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