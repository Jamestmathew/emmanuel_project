import Footer from '@/components/footers/Footer'
import MainHeader from '@/components/headers/MainHeader'
import Head from 'next/head'
import React from 'react'

export default function Contact() {
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
          <h2 className="title-animation">Contact Us</h2>
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
  <section className="contact-main volunteer">
    <div className="container">
      <div className="row gutter-40">
        <div className="col-12 col-xl-6">
          <div className="contact__content">
            <div className="section__content" data-aos="fade-up" data-aos-duration={1000}>
              <span className="sub-title"><i className="icon-donation" /> Get In Touch</span>
              <h2 className="title-animation">Contact Us</h2>
              <p>
                Conatct us to learn more about our programmes and help events
              </p>
            </div>
            <div className="contact-main__inner cta">
              <div className="contact-main__single">
                <div className="thumb">
                  <i className="fa-solid fa-location-dot" />
                </div>
                <div className="content">
                  <h6>Location</h6>
                  <p>
                  {/* <a href="https://maps.app.goo.gl/Gr9pTNqz5FRNrjQw8" target="_blank"> */}
                    <a href="/" target="_blank">
                      Apete, Ibadan, Oyo state, Nigeria.
                    </a>
                  </p>
                </div>
              </div>
              <div className="contact-main__single">
                <div className="thumb">
                  <i className="fa-solid fa-phone" />
                </div>
                <div className="content">
                  <h6>Phone</h6>
                  <p><a href="tel:2348140555425"> 08140555425 </a></p>
                  <p><a href="tel:2348140555425">08140555425</a></p>
                </div>
              </div>
              <div className="contact-main__single">
                <div className="thumb">
                  <i className="fa-solid fa-envelope" />
                </div>
                <div className="content">
                  <h6>Email</h6>
                  <p><a href="mailto:support@novuscarefoundation.org">support@novuscarefoundation.org</a></p>
                  <p><a href="mailto:support@novuscarefoundation.org">support@novuscarefoundation.org</a></p>
                </div>
              </div>
              <div className="contact-main__single">
                <div className="thumb">
                  <i className="fa-solid fa-share-nodes" />
                </div>
                <div className="content">
                  <h6>Social</h6>
                  <div className="social">
                    <a href="https://www.facebook.com/" target="_blank" aria-label="share us on facebook" title="facebook">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                    <a href="https://vimeo.com/" target="_blank" aria-label="share us on vimeo" title="vimeo">
                      <i className="fa-brands fa-vimeo-v" />
                    </a>
                    <a href="https://x.com/" target="_blank" aria-label="share us on twitter" title="twitter">
                      <i className="fa-brands fa-twitter" />
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank" aria-label="share us on linkedin" title="linkedin">
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-main__thumb cta">
              <img src="assets/images/contact-thumb.png" alt="Image" />
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-6">
          <div className="contact__form volunteer__form checkout__form" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={100}>
            <div className="volunteer__form-content">
              <h4 className="title-animation">Fill Up The Form</h4>
              <p>Your email address will not be published. Required fields are marked *</p>
            </div>
            <form action="#" method="post" className="cta">
              <div className="input-single">
                <input type="text" name="full-name" id="fullName" placeholder="Enter Name" required />
                <i className="fa-solid fa-user" />
              </div>
              <div className="input-single">
                <input type="email" name="c-email" id="cEmail" placeholder="Enter Email" required />
                <i className="fa-solid fa-envelope" />
              </div>
              <div className="input-single">
                <input type="text" name="phone-number" id="phoneNumber" placeholder="Phone Number" required />
                <i className="fa-solid fa-phone" />
              </div>
              <div className="input-single alter-input">
                <textarea name="contact-message" id="contactMessage" placeholder="Your Message..." defaultValue={""} />
                <i className="fa-solid fa-comments" />
              </div>
              <div className="form-cta">
                <button type="submit" aria-label="submit message" title="submit message" className="btn--primary">Get A Quote <i className="fa-solid fa-arrow-right" /></button>
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
