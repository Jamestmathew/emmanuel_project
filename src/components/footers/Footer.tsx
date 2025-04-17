import React from 'react'

export default function Footer() {
  return (
    <>
  <footer className="footer-two">
    <div className="container">
      <div className="row align-items-center gutter-30">
        <div className="col-12 col-lg-7 col-xxl-6">
          <div className="footer-two__newsletter-content">
            <h3 className="title-animation">
              Subscribe to Our Newsletter
            </h3>
            <p>Regular inspections and feedback mechanisms</p>
          </div>
        </div>
        <div className="col-12 col-lg-5 col-xxl-5 offset-xxl-1">
          <div className="footer-two__newsletter-form">
            <form action="#" method="post">
              <input type="email" required name="subscribe-email" id="subscribeEmail" placeholder="Enter Email" />
              <button type="submit" aria-label="subscribe to our newsletter" title="subscribe to our newsletter" className="btn--primary"> <i className="fa-solid fa-paper-plane" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <hr className="divider" />
        </div>
      </div>
      <div className="row gutter-60">
        <div className="col-12 col-md-6 col-xl-3">
          <div className="footer-two__widget" data-aos="fade-up" data-aos-duration={1000}>
            <div className="footer-two__widget-logo">
              <a href="index.html">
                <img src="images/novuslogo.png" alt="Image" />
              </a>
            </div>
            <div className="footer-two__widget-content">
              <p>Our secure online donation platform allows you to make contributions quickly and
                safely. Choose from various.
              </p>
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
        <div className="col-12 col-md-6 col-xl-2 offset-xl-1">
          <div className="footer-two__widget" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={200}>
            <div className="footer-two__widget-intro">
              <h5>Quick Links</h5>
              <div className="line">
                <span className="large-line" />
                <span className="small-line" />
                <span className="small-line" />
              </div>
            </div>
            <div className="footer-two__widget-content">
              <ul>
                <li><a href="/"><i className="fa-solid fa-arrow-right" />About Us</a>
                </li>
                <li><a href="/"><i className="fa-solid fa-arrow-right" />Our
                    News</a>
                </li>
                <li><a href="/"><i className="fa-solid fa-arrow-right" />Our
                    Campaign</a>
                </li>
                <li><a href="/"><i className="fa-solid fa-arrow-right" />FAQ</a></li>
                <li><a href="/"><i className="fa-solid fa-arrow-right" />Get A
                    Quote</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <div className="footer-two__widget footer-two__widget--alternate" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={400}>
            <div className="footer-two__widget-intro">
              <h5>Our Services</h5>
              <div className="line">
                <span className="large-line" />
                <span className="small-line" />
                <span className="small-line" />
              </div>
            </div>
            <div className="footer-two__widget-content">
              <ul>
                <li><a href="/"><i className="fa-solid fa-arrow-right" />Our Causes</a>
                </li>
                <li><a href="/"><i className="fa-solid fa-arrow-right" />Education
                    Support</a>
                </li>
                <li><a href="/"><i className="fa-solid fa-arrow-right" />Our
                    Campaign</a>
                </li>
                <li><a href="/"><i className="fa-solid fa-arrow-right" />Food
                    Support</a>
                </li>
                <li><a href="/"><i className="fa-solid fa-arrow-right" />Health
                    Support</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <div className="footer-two__widget footer-two__widget--alternate" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={600}>
            <div className="footer-two__widget-intro">
              <h5>Get In Touch</h5>
              <div className="line">
                <span className="large-line" />
                <span className="small-line" />
                <span className="small-line" />
              </div>
            </div>
            <div className="footer-two__widget-content footer-two__widget-content--contact">
              <ul>
                <li><a href="https://maps.app.goo.gl/Gr9pTNqz5FRNrjQw8" target="_blank"><i className="fa-solid fa-location-dot" />
                45, Apete, Sango Ibadan</a>
                </li>
                <li><a href="tel:2305-587-3407"><i className="fa-solid fa-phone" />
                  +234 40555425
                </a>
                </li>
                <li><a href="mailto:support@novuscarefoundation.org"><i className="fa-regular fa-envelope" />support@novuscarefoundation.org</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-two__copyright">
      <div className="container">
        <div className="row align-items-center gutter-12">
          <div className="col-12 col-lg-6">
            <div className="footer-two__copyright-inner text-center text-lg-start">
              <p>Copyright © <span id="copyrightYear" /> <a href="/">Novus Vita care Foundation</a>.
                All rights
                reserved.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="footer__bottom-left">
              <ul className="footer__bottom-list justify-content-center justify-content-lg-end">
                <li><a href="/">Terms &amp; Conditions</a></li>
                <li><a href="/">Privacy Policy</a></li>
                <li><a href="/">Cookie Settings</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="sprade" data-aos="zoom-in" data-aos-duration={1000}>
      <img src="assets/images/sprade.png" alt="Image" className="base-img" />
    </div>
    <div className="sprade-light" data-aos="zoom-in" data-aos-duration={1000}>
      <img src="assets/images/sprade-light.png" alt="Image" />
    </div>
  </footer>
  <div className="mouseCursor cursor-outer" />
  <div className="mouseCursor cursor-inner" />
  <button className="progress-wrap" aria-label="scroll indicator" title="back to top">
    <span />
    <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
    </svg>
  </button>

    </>
  )
}
