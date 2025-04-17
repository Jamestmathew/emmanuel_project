import React from 'react'

export default function HeaderMobileMenu() {
  return (
    <div>
  <div className="mobile-menu mobile-menu--primary d-block d-xxl-none">
    <nav className="mobile-menu__wrapper">
      <div className="mobile-menu__header nav-fade">
        <div className="logo">
          <a href="/" aria-label="home page" title="logo">
            <img src="assets/images/logo.png" alt="Image" />
          </a>
        </div>
        <button aria-label="close mobile menu" className="close-mobile-menu">
          <i className="fa-solid fa-xmark" />
        </button>
      </div>
      <div className="mobile-menu__list" />
      <div className="mobile-menu__cta nav-fade d-block d-md-none">
        <a href="/" className="btn--primary ">Donate Now <i className="fa-solid fa-arrow-right" /></a>
      </div>
      <div className="mobile-menu__social social nav-fade">
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
    </nav>
  </div>
  <div className="mobile-menu__backdrop" />
</div>

  )
}
