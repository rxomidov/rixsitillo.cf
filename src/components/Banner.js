import React from 'react';
import {FaFacebookF, FaTwitter, FaPinterest, FaInstagram, FaPlay, FaTelegram} from "react-icons/all";
import man from '../images/powerfull.PNG';

const Banner = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="header-content">
                            <div className="header-section">
                                <ul className="header-ul">
                                    <li>
                                        <a href="#"><FaFacebookF/></a>
                                    </li>
                                    <li>
                                        <a href="#"><FaTwitter/></a>
                                    </li>
                                    <li>
                                        <a href="#"><FaPinterest/></a>
                                    </li>
                                    <li>
                                        <a href="#"><FaInstagram/></a>
                                    </li>
                                    <li>
                                        <a href="#"><FaTelegram/></a>
                                    </li>
                                </ul>
                                <h1>I'm Rixsitillo Xomidov</h1>
                                <p>My name is Rixsitilllo Xomidov. I'm a web developer.</p>
                            </div>
                            <div className="header-buttons">
                                <a href="#" className="btn btn-outline">My Portfolio</a>
                                &nbsp;&nbsp;&nbsp;
                                <a href="#" className="btn btn-smart"><FaPlay className="play" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="banner-img">
                            <img src={man} alt="man"/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Banner;