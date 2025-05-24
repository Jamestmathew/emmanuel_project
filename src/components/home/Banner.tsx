import React from 'react'

export default function Banner() {
  return (
    <section className="banner-two">
  <div className="banner-two__slider swiper">
    <div className="swiper-wrapper">
      <div className="swiper-slide">
        <div className="banner-two__slider-single">
          <div className="banner-two__slider-bg" data-background="assets/images/banner/banner-two-bg.png">
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-9 col-lg-7 col-xxl-6">
                <div className="banner-two__slider-content">
                  <span className="sub-title"><i className="icon-donation" />Give the gift of Hope
                    people</span>
                  <h1>Giving help <br />
                    To Those <span className="bottom-line">peoples</span>
                    Who Need It.
                  </h1>
                  <div className="banner__content-cta cta">
                    <a href="/" aria-label="about us" title="about us" className="btn--tertiary">Discover More <i className="fa-solid fa-arrow-right" /></a>
                    <a href="/" aria-label="contact us" title="contact us" className="btn--primary">Donate !<i className="fa-solid fa-arrow-right" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-slide">
        <div className="banner-two__slider-single">
          <div className="banner-two__slider-bg" data-background="assets/images/banner/banner-one-bg.png">
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-9  col-lg-7 col-xxl-6">
                <div className="banner-two__slider-content">
                  <span className="sub-title"><i className="icon-donation" />Give the gift of Hope
                    people</span>
                  <h1>Giving help <br />
                    To Those <span className="bottom-line">peoples</span>
                    Who Need It.
                  </h1>
                  <div className="banner__content-cta cta">
                    <a href="/" aria-label="about us" title="about us" className="btn--tertiary">Discover More <i className="fa-solid fa-arrow-right" /></a>
                    <a href="/" aria-label="contact us" title="contact us" className="btn--primary">Donate ! <i className="fa-solid fa-arrow-right" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-slide">
        <div className="banner-two__slider-single">
          <div className="banner-two__slider-bg" data-background="assets/images/banner/banner-two-bg.png">
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-9 col-lg-7 col-xxl-6">
                <div className="banner-two__slider-content">
                  <span className="sub-title"><i className="icon-donation" />Give the gift of Hope
                    people</span>
                  <h1>Giving help <br />
                    To Those <span className="bottom-line">peoples</span>
                    Who Need It.
                  </h1>
                  <div className="banner__content-cta cta">
                    <a href="/" aria-label="about us" title="about us" className="btn--tertiary">Discover More <i className="fa-solid fa-arrow-right" /></a>
                    <a href="/" aria-label="contact us" title="contact us" className="btn--primary">Donate ! <i className="fa-solid fa-arrow-right" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-slide">
        <div className="banner-two__slider-single">
          <div className="banner-two__slider-bg" data-background="assets/images/banner/banner-three-bg-bg.png">
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-9 col-lg-7 col-xxl-6">
                <div className="banner-two__slider-content">
                  <span className="sub-title"><i className="icon-donation" />Give the gift of Hope
                    people</span>
                  <h1>Giving help <br />
                    To Those <span className="bottom-line">peoples</span>
                    Who Need It.
                  </h1>
                  <div className="banner__content-cta cta">
                    <a href="/" aria-label="about us" title="about us" className="btn--tertiary">Discover More <i className="fa-solid fa-arrow-right" /></a>
                    <a href="/" aria-label="contact us" title="contact us" className="btn--primary">Donnate !<i className="fa-solid fa-arrow-right" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="slider-navigation d-none d-md-flex">
    <button type="button" aria-label="prev slide" title="prev slide" className="prev-banner slider-btn">
      <i className="fa-solid fa-arrow-left" />
    </button>
    <button type="button" aria-label="next slide" title="next slide" className="next-banner slider-btn slider-btn-next">
      <i className="fa-solid fa-arrow-right" />
    </button>
  </div>
  <div className="shape">
    <img src="assets/images/shape.png" alt="Image" />
  </div>
  <div className="shape-left" data-aos="fade-right" data-aos-duration={1000} data-aos-delay={300}>
    <img src="assets/images/banner/banner-two-shape.png" alt="Image" />
  </div>
  <div className="sprade-shape">
    <img src="assets/images/sprade-base.png" alt="Image" className="base-img" data-aos="zoom-in" data-aos-duration={1000} />
  </div>
  <div className="unity">
    <img src="assets/images/unity.png" alt="Image" />
  </div>
</section>
  )
}
