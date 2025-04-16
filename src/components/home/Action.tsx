import React from 'react'

export default function Action() {
  return (
    <section className="cta-section">
  <div className="container-fluid">
    <div className="row gutter-40">
      <div className="col-12 col-xxl-4">
        <div className="cta-section__first cta-section__single">
          <div className="cta-section__group" data-aos="fade-up" data-aos-duration={1000}>
            <div className="thumb">
              <i className="icon-spread-love" />
            </div>
            <div className="content">
              <span>We give child a gift of a education</span>
              <h3 className="title-animation">Become a volunteer?</h3>
            </div>
            <div className="cta-s">
              <a href="/" aria-label="become a volunteer" title="become a volunteer" className="btn--tertiary">Contact Now</a>
            </div>
          </div>
          <div className="cta-img">
            <img src="assets/images/cta/one.png" alt="Image" />
          </div>
        </div>
      </div>
      <div className="col-12 col-xxl-4">
        <div className="cta-section__center cta-section__single">
          <div className="video-btn-wrapper">
          {/* <a href="https://www.youtube.com/watch?v=RvreULjnzFo" target="_blank" title="video Player" className="open-video-popup"> */}
            <a href="/" target="_blank" title="video Player" className="open-video-popup">
              <i className="icon-play" />
            </a>
          </div>
          <div className="cta-img">
            <img src="assets/images/cta/two.png" alt="Image" className="parallax-image" />
          </div>
        </div>
      </div>
      <div className="col-12 col-xxl-4">
        <div className="cta-section__last cta-section__single">
          <div className="cta-section__group" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={300}>
            <div className="thumb">
              <i className="icon-spread-love" />
            </div>
            <div className="content">
              <span>We give child a gift of a education</span>
              <h3 className="title-animation">Make donation to us?</h3>
            </div>
            <div className="cta-s">
              <a href="/" aria-label="make a donation" title="make a donation" className="btn--primary">Donate Now</a>
            </div>
          </div>
          <div className="cta-img">
            <img src="assets/images/cta/three.png" alt="Image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}
