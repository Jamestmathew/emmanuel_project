'use client'

import Footer from '@/components/footers/Footer'
import MainHeader from '@/components/headers/MainHeader'
import Team from '@/components/home/Team'
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
                          {/* <span className="sub-title"><i className="icon-donation" />Start donating poor people</span> */}
                          <h2 className="title-animation">Our Team</h2>
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
          <Team />

      <Footer />
    </div>
  )
}
