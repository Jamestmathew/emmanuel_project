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
                            <span className="sub-title"><i className="icon-donation" />Give the gift of Hope </span>
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
                                <span className="sub-title"><i className="icon-donation" />
                                    Give the gift of Hope
                                </span>
                                <h2 className="title-animation">Learn more about
                                    <span>Novus </span> vita care Foundation
                                </h2>
                                <p>
                                    At Novus Vita Care Foundation, we are committed to restoring dignity and hope to vulnerable individuals and communities around the world. <br /> 
                                    Our mission is clear: to care, empower, and uplift. <br />
            
                                    We support those who are often forgotten — the homeless, widows, orphans, unemployed, neglected, and abused.  <br />

                                    By providing life’s essentials — like food, clothing, and safe shelter — we offer comfort and security when it's needed most. We also go further, offering skill-based training and empowerment programmes that help people rebuild their lives and become self-sufficient. <br />
                                    Our foundation is built on compassion, equity, and service. We don’t just offer short-term relief — we focus on long-term transformation. From helping someone find their next meal to giving them a roof over their head and the skills to thrive, we work to ensure that no one is left behind.
                                    Each of our programmes is tailored to the unique needs of the communities we serve. We work hand-in-hand with local partners, volunteers, and supporters to create lasting change. Together, we're building a global network of care that reaches the most marginalized and gives them the tools to rewrite their own stories.
                                    Join us in turning pain into purpose, and struggle into strength —From Vulnerability to Victory." one person, one home, one future at a time.
                                </p>
                                <div className="help__content-icon-group">
                                    <div className="help__content-icon">
                                        <div className="thumb">
                                            <i className="icon-make-donation" />
                                        </div>
                                        <div className="content">
                                            <h6>Our Mission</h6>
                                            <p>To restore dignity and hope to vulnerable individuals—widows, widowers, orphans, the unemployed, and abuse survivors—through compassionate support, educational sponsorships, economic empowerment, and the provision of safe, nurturing spaces.</p>
                                        </div>
                                    </div>
                                    <div className="help__content-icon">
                                        <div className="thumb">
                                            <i className="icon-support-heart" />
                                        </div>
                                        <div className="content">
                                            <h6>Our Vision</h6>
                                            <p>
                                                A world where every vulnerable soul finds refuge, every child has access to education, and every individual is empowered to rebuild a life of purpose, dignity, and hope.<br /> 
                                                Restoring Hope. Rebuilding Lives.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="help__content-list">
                                    <ul>
                                        <li><i className="fa-solid fa-circle-check" /> From Vulnerability to Victory.
                                        </li>
                                        <li><i className="fa-solid fa-circle-check" /> Hope Lives Here.
                                        </li>
                                        <li><i className="fa-solid fa-circle-check" /> Empowering the Forgotten. Uplifting the Future.
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
