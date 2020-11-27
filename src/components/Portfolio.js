import React from 'react';
import p2 from '../images/p22.PNG';
import p3 from '../images/p33.jpg';
import p4 from '../images/p44.jpg';
import p5 from '../images/p55.jpg';
import p6 from '../images/p66.jpg';
import p1 from '../images/p11.jpg';

const Portfolio = () => {
    const [header] = React.useState({
        mainHeader: "PORTFOLI0", subHeading: "My Portfolio",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
            "                            Alias laborum nesciunt officiis praesentium, quod veniam."
    });
    const [state] = React.useState([
        {
            id: 1,
            icon: 'FaGithub',
            heading: 'Mogo Creative Template',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
                " Commodi, corporis.",
            bg: "../images/p1.PNG"
        },
        {
            id: 2,
            icon: 'FaCamera',
            heading: 'Photography',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
                " Commodi, corporis.",
            bg: "../images/p1.PNG"
        },
        {
            id: 3,
            icon: 'FaGithub',
            heading: 'Web Design',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
                " Commodi, corporis.",
            bg: "../images/p1.PNG"
        },
        {
            id: 4,
            icon: 'FaApple',
            heading: 'App Developing',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
                " Commodi, corporis.",
            bg: "../images/p1.PNG"
        },
        {
            id: 5,
            icon: 'FaGithub',
            heading: 'Video Editing',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
                " Commodi, corporis.",
            bg: "../images/p1.PNG"
        },
        {
            id: 6,
            icon: 'FaGithub',
            heading: 'SEO Expert',
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
                " Commodi, corporis.",
            bg: "../images/p1.PNG"
        }
    ])
    return (
        <div className="services" id='portfolio'>
            <div className="container">
                <div className="services-header">
                    <div className="common">
                        <h3 className="heading">{header.mainHeader}</h3>
                        <h1 className="main-header">{header.subHeading}</h1>
                        <p className="mainContent">{header.text}</p>
                        <div className="commonBorder"></div>
                    </div>
                    <div className="row bgMain">
                        <div className="col-4">
                            <div className="portfolio-box">
                                <img className="p-img" src={p1} alt=""/>
                                <div className="sb-header padp">Mogo</div>
                                <div className="sb-pp">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Consequuntur doloribus possimus quaerat vero! Dolor, et!
                                </div>
                                <div className="port-link">
                                    <a href="https://mogo-creative-website.netlify.app"
                                       className="btn-view">Visit</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="portfolio-box">
                                <img className="p-img" src={p2} alt=""/>
                                <div className="sb-header padp">Bostfolia</div>
                                <div className="sb-pp">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Consequuntur doloribus possimus quaerat vero! Dolor, et!
                                </div>
                                <div className="port-link">
                                    <a href="https://bostfolia.netlify.app" className="btn-view">Visit</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="portfolio-box">
                                <img className="p-img" src={p3} alt=""/>
                                <div className="sb-header padp">Alexis</div>
                                <div className="sb-pp">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Consequuntur doloribus possimus quaerat vero! Dolor, et!
                                </div>
                                <div className="port-link">
                                    <a href="https://alexis-creative-website.netlify.app" className="btn-view">Visit</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="portfolio-box">
                                <img className="p-img" src={p4} alt=""/>
                                <div className="sb-header padp">VR Box</div>
                                <div className="sb-pp">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Consequuntur doloribus possimus quaerat vero! Dolor, et!
                                </div>
                                <div className="port-link">
                                    <a href="https://vr-box-commercial.netlify.app" className="btn-view">Visit</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="portfolio-box">
                            <img className="p-img" src={p5} alt=""/>
                            <div className="sb-header padp">IT CITY</div>
                            <div className="sb-pp">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Consequuntur doloribus possimus quaerat vero! Dolor, et!
                            </div>
                            <div className="port-link">
                                <a href="https://bostfolia.netlify.app" className="btn-view">Visit</a>
                            </div>
                        </div>
                    </div>
                        <div className="col-4 wow fadeInUp" data-wow-delay="0.6s">
                            <div className="portfolio-box">
                                <img className="p-img" src={p6} alt=""/>
                                <div className="sb-header padp">CHAMP UZ</div>
                                <div className="sb-pp">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Consequuntur doloribus possimus quaerat vero! Dolor, et!
                                </div>
                                <div className="port-link">
                                    <a href="https://bostfolia.netlify.app" className="btn-view">Visit</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;