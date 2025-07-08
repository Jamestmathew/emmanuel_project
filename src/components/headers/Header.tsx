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
                                            <li className="navbar__item nav-fade">
                                                <a href="/">Home</a>
                                            </li>
                                            <li className="navbar__item nav-fade">
                                                <a href="/about">About Us</a>
                                            </li>
                                            <li className="navbar__item nav-fade">
                                                <a href="/team">Our Teams</a>
                                            </li>
                                            <li className="navbar__item nav-fade">
                                                <a href="/volunteer">Become Volunteer</a>
                                            </li>
                                            <li className="navbar__item nav-fade">
                                                <a href="/contact">Contact Us</a>
                                            </li>

                                        </ul>
                                    </div>
                                    <div className="contact-btn">
                                        <div className="contact-icon">
                                            <i className="icon-support" />
                                        </div>
                                        <div className="contact-content">
                                            <p>Call Us Now</p>
                                            <a href="tel:+2349124940246">(+234)09124940246 </a>
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
                                        <a href="/" className="btn--primary d-none d-md-flex">Give Hope <i className="fa-solid fa-arrow-right" /></a>
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

