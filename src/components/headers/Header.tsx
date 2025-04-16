'use client'
import React from 'react'

export default function Header() {
    return (
        <header className="header header-secondary">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="main-header__menu-box">
                            <nav className="navbar p-0">
                                <div className="navbar-logo">
                                    <a href="/">
                                        <img src="images/novuslogo.png" alt="Novus Logo" />
                                    </a>
                                </div>
                                <div className="navbar__menu-wrapper">
                                    <div className="navbar__menu d-none d-xl-block">
                                        <ul className="navbar__list">
                                            {/* <li className="navbar__item navbar__item--has-children nav-fade">
                                                <a href="/" aria-label="dropdown menu" className="navbar__dropdown-label dropdown-label-alter">Home</a>
                                                <ul className="navbar__sub-menu mega-menu">
                                                    <li>
                                                        <div className="mega-content-wrapper">
                                                            <img src="assets/images/home-one.png" alt="Image" />
                                                            <div className="mega-content">
                                                                <a href="index.html" className="btn--primary">Multipage</a>
                                                                <a href="index-one-page.html" className="btn--secondary">One
                                                                    Page</a>
                                                            </div>
                                                        </div>
                                                        <a href="index.html">Home One</a>
                                                    </li>
                                                    <li>
                                                        <div className="mega-content-wrapper">
                                                            <img src="assets/images/home-two.png" alt="Image" />
                                                            <div className="mega-content">
                                                                <a href="index-two.html" className="btn--primary">Multipage</a>
                                                                <a href="index-two-one-page.html" className="btn--secondary">One Page</a>
                                                            </div>
                                                        </div>
                                                        <a href="index-two.html">Home Two</a>
                                                    </li>
                                                    <li>
                                                        <div className="mega-content-wrapper">
                                                            <img src="assets/images/home-three.png" alt="Image" />
                                                            <div className="mega-content">
                                                                <a href="index-three.html" className="btn--primary">Multipage</a>
                                                                <a href="index-three-one-page.html" className="btn--secondary">One Page</a>
                                                            </div>
                                                        </div>
                                                        <a href="index-three.html">Home Three</a>
                                                    </li>
                                                </ul>
                                            </li> */}
                                            <li className="navbar__item nav-fade">
                                                <a href="/">Home</a>
                                            </li>
                                            <li className="navbar__item nav-fade">
                                                <a href="/">About Us</a>
                                            </li>
                                            <li className="navbar__item nav-fade">
                                                                <a href="/">Our Teams</a>
                                                            </li>
                                                            <li className="navbar__item nav-fade">
                                                        <a href="/">Become Volunteer</a>
                                                    </li>
                                            {/* <li className="navbar__item navbar__item--has-children nav-fade">
                                                <a href="#" aria-label="dropdown menu" className="navbar__dropdown-label dropdown-label-alter">Causes</a>
                                                <ul className="navbar__sub-menu">
                                                    <li>
                                                        <a href="our-causes.html">Our Causes</a>
                                                    </li>
                                                    <li>
                                                        <a href="cause-details.html">Cause Details</a>
                                                    </li>
                                                </ul>
                                            </li> */}
                                            {/* <li className="navbar__item navbar__item--has-children nav-fade">
                                                <a href="#" aria-label="dropdown menu" className="navbar__dropdown-label dropdown-label-alter">Pages</a>
                                                <ul className="navbar__sub-menu">
                                                    <li>
                                                        <a href="faq.html">FAQ</a>
                                                    </li>
                                                    <li>
                                                        <a href="donate-us.html">Donate Us</a>
                                                    </li>
                                                    <li>
                                                        <a href="/">Become Volunteer</a>
                                                    </li>
                                                    <li className="navbar__item navbar__item--has-children">
                                                        <a aria-label="dropdown menu" className="navbar__dropdown-label navbar__dropdown-label-sub">Events</a>
                                                        <ul className="navbar__sub-menu navbar__sub-menu__nested">
                                                            <li>
                                                                <a href="events.html">Events</a>
                                                            </li>
                                                            <li>
                                                                <a href="event-details.html">Event Details</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="navbar__item navbar__item--has-children">
                                                        <a aria-label="dropdown menu" className="navbar__dropdown-label navbar__dropdown-label-sub">Shop</a>
                                                        <ul className="navbar__sub-menu navbar__sub-menu__nested">
                                                            <li>
                                                                <a href="shop.html">Our Shop</a>
                                                            </li>
                                                            <li>
                                                                <a href="product-details.html">Product Details</a>
                                                            </li>
                                                            <li>
                                                                <a href="cart.html">View Cart</a>
                                                            </li>
                                                            <li>
                                                                <a href="checkout.html">Cehckout</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="navbar__item navbar__item--has-children">
                                                        <a aria-label="dropdown menu" className="navbar__dropdown-label navbar__dropdown-label-sub">Team</a>
                                                        <ul className="navbar__sub-menu navbar__sub-menu__nested">
                                                            <li>
                                                                <a href="our-team.html">Our Teams</a>
                                                            </li>
                                                            <li>
                                                                <a href="team-details.html">Team Details</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="coming-soon.html">Coming Soon</a>
                                                    </li>
                                                    <li>
                                                        <a href="404.html">Error</a>
                                                    </li>
                                                </ul>
                                            </li> */}
                                            {/* <li className="navbar__item navbar__item--has-children nav-fade">
                                                <a href="#" aria-label="dropdown menu" className="navbar__dropdown-label dropdown-label-alter">News</a>
                                                <ul className="navbar__sub-menu">
                                                    <li>
                                                        <a href="blog-list.html">News List View</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-grid.html">News Grid View</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-details.html">News Details</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="navbar__item nav-fade">
                                                <a href="contact-us.html">Contact Us</a>
                                            </li> */}
                                        </ul>
                                    </div>
                                    <div className="contact-btn">
                                        <div className="contact-icon">
                                            <i className="icon-support" />
                                        </div>
                                        <div className="contact-content">
                                            <p>Call Us Now</p>
                                            <a href="tel:01-793-7938">(+01)-793-7938 </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="navbar__options">
                                    <div className="navbar__mobile-options ">
                                        <div className="search-box">
                                            <button className="open-search" aria-label="search products" title="open search box">
                                                <i className="fa-solid fa-magnifying-glass" />
                                            </button>
                                        </div>
                                        <a href="/" className="btn--primary d-none d-md-flex">Donate Now <i className="fa-solid fa-arrow-right" /></a>
                                    </div>
                                    <button className="open-offcanvas-nav d-flex d-xl-none" aria-label="toggle mobile menu" title="open offcanvas menu">
                                        <span className="icon-bar top-bar" />
                                        <span className="icon-bar middle-bar" />
                                        <span className="icon-bar bottom-bar" />
                                    </button>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

