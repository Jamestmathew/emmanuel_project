import React from 'react'

export default function Different() {
  return (
    <section className="difference">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-12 col-lg-10 col-xl-8">
        <div className="section__header text-center" data-aos="fade-up" data-aos-duration={1000}>
          {/* <span className="sub-title"><i className="icon-donation" />
            Give the gift of Hope to the people
          </span> */}
          <h2 className="title-animation">Charity With Difference</h2>
          <p>
              Restore dignity and hope to vulnerable individuals
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="difference__inner">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="difference__slider swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="difference__single-wrapper">
                  <div className="difference__single difference__single-first" data-background="assets/images/difference/bg-one.png">
                    <div className="difference__single-thumb">
                      <i className="icon-education" />
                    </div>
                    <div className="difference__single-content">
                      <h5><a href="/"> Education </a></h5>
                      <p>
                       We support vulnerable by providing access to quality education, learning materials, and inclusive, safe learning environments 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="difference__single-wrapper">
                  <div className="difference__single difference__single-second" data-background="assets/images/difference/bg-two.png">
                    <div className="difference__single-thumb">
                      <i className="icon-food" />
                    </div>
                    <div className="difference__single-content">
                      <h5><a href="/">Healthy Food</a></h5>
                      <p>
                      We deliver nutritious food assistance to vulnerable individuals and communities affected by conflict, disasters, and economic hardship.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="difference__single-wrapper">
                  <div className="difference__single difference__single-third " data-background="assets/images/difference/bg-three.png">
                    <div className="difference__single-thumb">
                      <i className="icon-health" />
                    </div>
                    <div className="difference__single-content">
                      <h5><a href="/">Medical Care</a></h5>
                      <p>
                      {/* Through mobile clinics and on-the-ground medical teams, we ensure vulnerable people receive essential treatments, medications, and emergency medical care */}
                      We ensure individual received eseential treatments, medications and provides emergency medical care to the needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="difference__single-wrapper">
                  <div className="difference__single difference__single-first" data-background="assets/images/difference/bg-one.png">
                    <div className="difference__single-thumb">
                      <i className="icon-education" />
                    </div>
                    <div className="difference__single-content">
                      <h5><a href="/"> Education </a></h5>
                      <p>
                        We support vulnerable by providing access to quality education, learning materials, and inclusive, safe learning environments 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="difference__single-wrapper">
                  <div className="difference__single difference__single-second" data-background="assets/images/difference/bg-two.png">
                    <div className="difference__single-thumb">
                      <i className="icon-food" />
                    </div>
                    <div className="difference__single-content">
                      <h5><a href="/">Healthy Food</a></h5>
                      <p>
                        We deliver nutritious food assistance to vulnerable individuals and communities affected by conflict, disasters, and economic hardship.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="difference__single-wrapper">
                  <div className="difference__single difference__single-third " data-background="assets/images/difference/bg-three.png">
                    <div className="difference__single-thumb">
                      <i className="icon-health" />
                    </div>
                    <div className="difference__single-content">
                      <h5><a href="/">Medical Care</a></h5>
                      <p>
                        We ensure individual received eseential treatments, medications and provides emergency medical care to the needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="slider-navigation">
      <button type="button" aria-label="prev slide" title="prev slide" className="prev-difference slider-btn">
        <i className="fa-solid fa-arrow-left" />
      </button>
      <button type="button" aria-label="next slide" title="next slide" className="next-difference slider-btn slider-btn-next">
        <i className="fa-solid fa-arrow-right" />
      </button>
    </div>
  </div>
  <div className="shape-hand" data-aos="fade-right" data-aos-duration={1000} data-aos-delay={300}>
    <img src="assets/images/difference/shape-hand.png" alt="Image" />
  </div>
</section>

  )
}
