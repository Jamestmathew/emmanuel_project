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
                
                <Script src="assets/js/jquery-3.7.1.min.js"  />  
   
      <Script src="assets/js/bootstrap.bundle.min.js" strategy="afterInteractive"  />  
 
      <Script src="assets/js/jquery.nice-select.min.js" strategy="afterInteractive" />  

      <Script src="assets/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />  

      <Script src="assets/js/swiper-bundle.min.js" strategy="afterInteractive" />  
 
      <Script src="assets/js/viewport.jquery.js" strategy="afterInteractive" />  

      <Script src="assets/js/odometer.min.js" strategy="afterInteractive" />  

      <Script src="assets/js/vanilla-tilt.min.js" strategy="afterInteractive" />  

      <Script src="assets/js/aos.js" strategy="afterInteractive" />  


      <Script src="assets/js/SplitText.min.js" strategy="afterInteractive" />  
  
      <Script src="assets/js/ScrollToPlugin.min.js" strategy="afterInteractive" />  

      <Script src="assets/js/ScrollTrigger.min.js" strategy="afterInteractive" />  

      <Script src="assets/js/gsap.min.js" strategy="afterInteractive" />  

      <Script src="assets/js/custom.js" strategy="afterInteractive" />  
      {/* <Script src="/custom.js" strategy="afterInteractive" />  */}

                <TopBar />
                <Header />
                <HeaderMobileMenu />
                <Search />
          
        </>
    )
}
