import Footer from '@/components/footers/Footer'
import MainHeader from '@/components/headers/MainHeader'
import Head from 'next/head'
import React from 'react'

export default function page() {
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
                            <span className="sub-title"><i className="icon-donation" />Start donating Vulnerable  people</span>
                            <h2 className="title-animation">About Us</h2>
                        </div>
                    </div>
                </div>
                <div className="banner-bg">
                    <img src="assets/images/banner/banner-bg.png" alt="Image" />
                </div>
                <div className="shape">
                    <img src="assets/images/shape.png" alt="Image" />
                </div>
                <div className="sprade" data-aos="zoom-in" data-aos-duration={1000}>
                    <img src="assets/images/sprade-base.png" alt="Image" className="base-img" />
                </div>
            </section>
            <section className="help">
                <div className="container">
                    <div className="row align-items-center gutter-40">
                        <div className="col-12 col-lg-5 col-xxl-6 d-none d-lg-block">
                            <div className="help__thumb">
                                <div className="help__thumb-inner">
                                    <div className="thumb-top thumb">
                                        <img src="assets/images/help/thumb-top.png" alt="Image" />
                                    </div>
                                    <div className="thumb-lg thumb" data-aos="fade-left" data-aos-duration={1000}>
                                        <img src="assets/images/help/thumb-lg.png" alt="Image" />
                                        <div className="video-btn-wrapper">
                                            {/* <a href="https://www.youtube.com/watch?v=RvreULjnzFo" target="_blank" title="video Player" className="open-video-popup"> */}
                                            <a href="/" target="_blank" title="video Player" className="open-video-popup">
                                                <i className="icon-play" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="thumb thumb-bottom">
                                        <img src="assets/images/help/thumb-bottom.png" alt="Image" />
                                    </div>
                                    <div className="line">
                                        <img src="assets/images/help/line.png" alt="Image" />
                                    </div>
                                    <div className="grid-line">
                                        <img src="assets/images/help/grid.png" alt="Image" className="base-img" />
                                    </div>
                                    <div className="vertical-text">
                                        <h5>We Give <span>Donations</span> to Vulnerable  People </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-7 col-xxl-6">
                            <div className="help__content">
                                <span className="sub-title"><i className="icon-donation" />Start donating Vulnerable 
                                    people</span>
                                <h2 className="title-animation">Learn more about
                                    <span>Novus </span> vita care Foundation
                                </h2>
                                <p>we are dedicated to restoring dignity and hope to vulnerable individuals and communities across Nigeria. Our mission is simple yet powerful: to care, empower, and uplift. Through the provision of essential needs such as food, clothing, and skill-based training, we strive to create a society where no one is left behind.

                                    Founded on the principles of compassion, equity, and service, Novus Vita Care foundation reaches out to the most marginalised — including the homeless, widows, orphans, and the unemployed — offering not just immediate relief, but long-term support through empowerment initiatives. We believe that true change begins when people are not only helped but equipped with the tools to transform their own lives.

                                    Our programmes are community-driven and people-centred, tailored to meet the specific needs of those we serve. By collaborating with local partners, volunteers, and supporters, we are building a network of care that restores hope and paves the way for a more inclusive and resilient Nigeria.

                                    Join us in making a difference — one life, one meal, and one opportunity at a time.
                                </p>
                                <div className="help__content-icon-group">
                                    <div className="help__content-icon">
                                        <div className="thumb">
                                            <i className="icon-make-donation" />
                                        </div>
                                        <div className="content">
                                            <h6>Our Mission</h6>
                                            <p>our mission is to nourish bodies, clothe hearts and inspire minds. We provide nutritious meals, essential clothing and vocational training to Nigeria’s most vulnerable—ensuring that every beneficiary not only survives but is empowered to thrive with dignity and hope.</p>
                                        </div>
                                    </div>
                                    <div className="help__content-icon">
                                        <div className="thumb">
                                            <i className="icon-support-heart" />
                                        </div>
                                        <div className="content">
                                            <h6>Our Vision</h6>
                                            <p>We envision a Nigeria where no one is left behind: a country in which every individual enjoys reliable access to food, clothing and life‑changing skills, unlocking their full potential and building stronger, more resilient communities for generations to come.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="help__content-list">
                                    <ul>
                                        <li><i className="fa-solid fa-circle-check" /> Helped fund 3,265 Project powerful
                                            corporate Vulnerable .
                                        </li>
                                        <li><i className="fa-solid fa-circle-check" /> We give child a gift of a education
                                        </li>
                                        <li><i className="fa-solid fa-circle-check" /> We help companies develop powerful
                                            corporate social Responsibility,
                                        </li>
                                    </ul>
                                </div>
                                <div className="help__content-cta cta">
                                    <a href="/" aria-label="more about us" title="about us" className="btn--primary">More About Us</a>
                                    <div className="contact-btn">
                                        <div className="contact-icon">
                                            <i className="icon-phone" />
                                        </div>
                                        <div className="contact-content">
                                            <p>Phone</p>
                                            <a href="tel:2348142431209">(+234) 08142431209</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hand">
                    <img src="assets/images/help/hand.png" alt="Image" />
                </div>
                <div className="parasuit">
                    <img src="assets/images/parasuit.png" alt="Image" />
                </div>
                <div className="spade">
                    <img src="assets/images/help/spade.png" alt="Image" />
                </div>
            </section>


            <Footer />
        </div>
    )
}
