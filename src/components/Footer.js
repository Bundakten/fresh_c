import React from 'react';
import youtube from '../img/youtube.svg';
import facebook from '../img/facebook.svg';
import linkedin from '../img/linkedin.svg';
import twitter from '../img/twitter.svg';
import instagram from '../img/Instagram.svg';

const Footer = () => {
    return (
        <div>
            <section style={{  backgroundColor: 'black', color: 'white' }}>
                <section className="container py-3">
                    <div className="row">
                        <div className="col-lg-3 mt-5 col-md-6 col-sm-12">
                            <h6>Innovation Sprints</h6>
                            <p className="mt-5">Innovation Sprints</p>
                            <p>Innovation Sprints</p>
                            <p>Innovation Sprints</p>
                            <p>Innovation Sprints</p>
                            <p>Innovation Sprints</p>
                        </div>
                        <div className="col-lg-3 mt-5 col-md-6 col-sm-12">
                            <h6>Innovation Sprints</h6>
                            <p className="mt-5">Innovation Sprints</p>
                            <p>Innovation Sprints</p>
                            <p>Innovation Sprints</p>
                            <p>Innovation Sprints</p>
                            <p>Innovation Sprints</p>
                        </div>
                        <div className="col-lg-3 mt-5 col-md-6 col-sm-12">
                            <h6>Innovation Sprints</h6>
                            <p className="mt-5">Innovation Sprints</p>
                            <p>Innovation Sprints</p>
                            <p>Innovation Sprints</p>
                            <p>Innovation Sprints</p>
                            <p>Innovation Sprints</p>
                        </div>
                        <div className="col-lg-3 mt-5 col-md-6 col-sm-12">
                            <h6>Innovation Sprints</h6>
                            <p className="mt-5">Innovation Sprints</p>
                            <p>Innovation Sprints</p>
                            <p>Innovation Sprints</p>
                            <p>Innovation Sprints</p>
                            <p>Innovation Sprints</p>
                        </div>
                    </div>
                </section>
                <hr style={{ backgroundColor: '#1C2224'}}/>
                <section className="container py-3">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-sm-12">
                            <article className="d-flex">
                                <p>Work</p>
                                <p className="mx-5">Work</p>
                                <p className="mx-3">Work</p>
                                <p className="mx-5">Work</p>
                            </article>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <img src={linkedin} className="linkedin mx-2" alt="" />
                            <img src={facebook} className="mx-3" alt="" />
                            <img src={twitter} className="twitter mx-3" alt="" />
                            <img src={youtube} className="mx-3" alt="" />
                            <img src={instagram} className="mx-3" alt="" />
                        </div>
                    </div>
                </section>
            </section>

            {/* whitebg section */}
            <section className="container py-3">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-sm-12">
                            <article className="d-flex">
                                <article className="d-flex flex-column">
                                    <p>Work</p>
                                    <p>work</p>
                                </article>
                                <article className="d-flex flex-column ml-3">
                                    <p className="mx-5">Work</p>
                                    <p className="mx-5">Work</p>
                                </article>
                                <article className="d-flex flex-column">
                                    <p className="mx-5">Work</p>
                                    <p className="mx-5">Work</p>
                                </article>
                                <article className="d-flex flex-column">
                                    <p className="mx-5">Work</p>
                                    <p className="mx-5">Work</p>
                                </article>
                            </article>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <section className="d-flex">
                                <p style={{color: 'black'}}>©2021 bundakten Digital Solutions</p>
                                <small className="">Privacy Policy</small>
                            </section>
                        </div>
                    </div>
                </section>
            {/* whitebg section ends*/}
        </div>
    )
}

export default Footer;
