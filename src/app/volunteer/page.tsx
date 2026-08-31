import Footer from '@/components/footers/Footer'
import MainHeader from '@/components/headers/MainHeader'
import Head from 'next/head'
import React from 'react'

export default function Volunteer() {
    return (
        <div className="page-wrapper">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Outfit:wght@100..900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <MainHeader />
            <section className="common-banner">
                <div className="container">
                    <div className="row">
                        <div className="common-banner__content text-center">
                            <span className="sub-title"><i className="icon-donation" />Start donating poor people</span>
                            <h2 className="title-animation">Become A Volunteer</h2>
                        </div>
                    </div>
                </div>
                <div className="banner-bg">
                    <img src="/assets/images/banner/banner-bg.png" alt="Image" />
                </div>
                <div className="shape">
                    <img src="/assets/images/shape.png" alt="Image" />
                </div>
                <div className="sprade" data-aos="zoom-in" data-aos-duration={1000}>
                    <img src="/assets/images/sprade-base.png" alt="Image" className="base-img" />
                </div>
            </section>
            <section className="volunteer">
                <div className="container">
                    <div className="row gutter-40">
                        <div className="col-12 col-xl-6">
                            <div className="volunteer__content">
                                <div className="section__content">
                                    <span className="sub-title"><i className="icon-donation" /> Become A Volunteer</span>
                                    <h2 className="title-animation">Volunteer Requirements</h2>
                                    <p>
                                        Call : 08140555425
                                    </p>
                                </div>
                                <div className="warning">
                                    <div className="line"><i className="fa-solid fa-triangle-exclamation" /></div>
                                    <p><strong>Notice:</strong> Test mode is enabled. While in test mode no
                                        live
                                        donations are processed.
                                    </p>
                                </div>
                                <div className="progress-wrapper">
                                    <div className="cause__progress progress-bar-single">
                                        <div className="cause-progress__bar">
                                            <p>Donation Collect</p>
                                            <div className="progress-bar-wrapper" data-percent="70%">
                                                <div className="progress-bar">
                                                    <div className="progress-bar-percent"><span className="percent-value" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cause__progress progress-bar-single">
                                        <div className="cause-progress__bar">
                                            <p>Successful Events</p>
                                            <div className="progress-bar-wrapper" data-percent="85%">
                                                <div className="progress-bar">
                                                    <div className="progress-bar-percent"><span className="percent-value" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-details__list">
                                    <ul>
                                        <li><i className="icon-circle-check" />Best Quality Services</li>
                                        <li><i className="icon-circle-check" />Time Saving</li>
                                        <li><i className="icon-circle-check" />Meet the Deadlines</li>
                                        <li><i className="icon-circle-check" />24/7 Customer Support</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-xl-6">
                            <div className="volunteer__form checkout__form" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={100}>
                                <div className="volunteer__form-content">
                                    <h4 className="title-animation">Fill Up The Form</h4>
                                    <p>Your email address will not be published. Required fields are marked *</p>
                                </div>
                                <form action="#" method="post" className="cta">
                                    <div className="input-group">
                                        <div className="input-single">
                                            <input type="text" name="c-name" id="cName" placeholder="First Name" required />
                                            <i className="fa-solid fa-user" />
                                        </div>
                                        <div className="input-single">
                                            <input type="text" name="c-lastname" id="clastName" placeholder="Last Name" required />
                                            <i className="fa-solid fa-user" />
                                        </div>
                                    </div>
                                    <div className="input-single">
                                        <input type="email" name="c-email" id="cEmail" placeholder="Enter Email" required />
                                        <i className="fa-solid fa-envelope" />
                                    </div>
                                    <div className="input-group">
                                        <div className="input-single">
                                            <input type="text" name="phone-number" id="phoneNumber" placeholder="Phone Number" required />
                                            <i className="fa-solid fa-phone" />
                                        </div>
                                        <div className="input-single">
                                            <input type="text" name="profession" id="profession" placeholder="Occupation" required />
                                            <i className="fa-solid fa-user-tie" />
                                        </div>
                                    </div>
                                    <div className="input-single alter-input">
                                        <textarea name="contact-message" id="contactMessage" placeholder="your message..." defaultValue={""} />
                                        <i className="fa-solid fa-comments" />
                                    </div>
                                    <div className="form-cta">
                                        <button type="submit" aria-label="submit message" title="submit message" className="btn--primary">Submit Now <i className="fa-solid fa-arrow-right" /></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
