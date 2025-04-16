import React from 'react'

export default function Blog() {
  return (
    <section className="blog">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-12 col-md-8 col-xl-7">
        <div className="section__header text-center" data-aos="fade-up" data-aos-duration={1000}>
          <span className="sub-title"><i className="icon-donation" />Start donating poor
            people</span>
          <h2 className="title-animation">Our Latest <span>News</span> &amp;
            Articles
          </h2>
        </div>
      </div>
    </div>
    <div className="row gutter-40">
      <div className="col-12 col-lg-6 col-xl-4">
        <div className="blog__single-wrapper" data-aos="fade-up" data-aos-duration={1000}>
          <div className="blog__single van-tilt">
            <div className="blog__single-thumb">
              <a href="/">
                <img src="assets/images/blog/one.png" alt="Image" />
              </a>
              <div className="tag">
                <a href="/"><i className="fa-solid fa-tags" />Health</a>
              </div>
            </div>
            <div className="blog__single-inner">
              <div className="blog__single-meta">
                <p><i className="icon-user" />Robert Fox</p>
                <p><i className="icon-message" />Comments (03)</p>
              </div>
              <div className="blog__single-content">
                <h5><a href="/">IT Service Case Studies Accelerate
                    Business Fly Success Tech</a>
                </h5>
              </div>
              <div className="blog__single-cta">
                <a href="/" aria-label="blog details" title="blog details">Read
                  More<i className="fa-solid fa-circle-arrow-right" /></a>
              </div>
            </div>
            <img src="assets/images/blog/spade.png" alt="Image" className="spade-two" />
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-6 col-xl-4">
        <div className="blog__single-wrapper" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={300}>
          <div className="blog__single van-tilt">
            <div className="blog__single-thumb">
              <a href="/">
                <img src="assets/images/blog/two.png" alt="Image" />
              </a>
              <div className="tag">
                <a href="/"><i className="fa-solid fa-tags" />Education</a>
              </div>
            </div>
            <div className="blog__single-inner">
              <div className="blog__single-meta">
                <p><i className="icon-user" />Robert Fox</p>
                <p><i className="icon-message" />Comments (08)</p>
              </div>
              <div className="blog__single-content">
                <h5><a href="/">IT Service Case Studies Accelerate
                    Business Fly Success Tech</a>
                </h5>
              </div>
              <div className="blog__single-cta">
                <a href="/" aria-label="blog details" title="blog details">Read
                  More<i className="fa-solid fa-circle-arrow-right" /></a>
              </div>
            </div>
            <img src="assets/images/blog/spade.png" alt="Image" className="spade-two" />
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-6 col-xl-4">
        <div className="blog__single-wrapper" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={600}>
          <div className="blog__single van-tilt">
            <div className="blog__single-thumb">
              <a href="/">
                <img src="assets/images/blog/three.png" alt="Image" />
              </a>
              <div className="tag">
                <a href="/"><i className="fa-solid fa-tags" />Food</a>
              </div>
            </div>
            <div className="blog__single-inner">
              <div className="blog__single-meta">
                <p><i className="icon-user" />Robert Fox</p>
                <p><i className="icon-message" />Comments (13)</p>
              </div>
              <div className="blog__single-content">
                <h5><a href="/">IT Service Case Studies Accelerate
                    Business Fly Success Tech</a>
                </h5>
              </div>
              <div className="blog__single-cta">
                <a href="/" aria-label="blog details" title="blog details">Read
                  More<i className="fa-solid fa-circle-arrow-right" /></a>
              </div>
            </div>
            <img src="assets/images/blog/spade.png" alt="Image" className="spade-two" />
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <div className="section__cta cta text-center">
          <a href="/" aria-label="our blog" title="our blog" className="btn--primary">View
            All <i className="fa-solid fa-arrow-right" /></a>
        </div>
      </div>
    </div>
  </div>
  <div className="blog-bg">
    <img src="assets/images/blog/blog-bg.png" alt="Image" />
  </div>
  <div className="spade">
    <img src="assets/images/blog/spade-base.png" alt="Image" className="base-img" />
  </div>
</section>

  )
}
