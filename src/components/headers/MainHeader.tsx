"use client"

import React from 'react'
import TopBar from './TopBar'
import Header from './Header'
import HeaderMobileMenu from './HeaderMobileMenu'
import Search from './Search'
import Head from 'next/head';
import Script from 'next/script';

export default function MainHeader() {
    return (
        <>
            <div className="preloader">
                <i className="icon-donation" />
                <p>Novus Care</p>
            </div>

            

            <TopBar />
            <Header />
            <HeaderMobileMenu />
            <Search />
        </>
    )
}
