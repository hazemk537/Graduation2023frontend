import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import "../styles/MainLandingpage.css";
import LogoLightSvg from "../images/logo-light.svg";
import LogoDarkSvg from "../images/logo-dark.svg";
import Feature_3Dark from "../images/feature-03-dark.svg";
import Feature_3Light from "../images/feature-03-light.svg";
import Feature_2Dark from "../images/feature-02-dark.svg";
import Feature_2Light from "../images/feature-02-light.svg";
import Feature_1Dark from "../images/feature-01-dark.svg";
import Feature_1Light from "../images/feature-01-light.svg";
import Feature_illustration_light from "../images/features-illustration-light.svg";
import Feature_illustration_dark from "../images/features-illustration-dark.svg";
import Feature_Box_lightt from "../images/features-box-light.svg";
import Feature_Box_Dark from "../images/features-box-dark.svg";
import FeatureTopLight from "../images/features-illustration-top-light.svg";
import FeatureTopDark from "../images/features-illustration-top-dark.svg";
import HeaderIllustrationLight from "../images/header-illustration-light.svg";
import HeaderIllustrationDark from "../images/header-illustration-dark.svg";
import HeroIllustLight from "../images/hero-media-illustration-light.svg";
import HeroIllustDark from "../images/hero-media-illustration-dark.svg";
import HeroMediaLight from "../images/hero-media-light.svg";
import HeroMediaDark from "../images/hero-media-dark.svg";
import Nav_Bar from "../components/Nav_Bar";
import Carousel from "../components/Carousel_1";



function MainLandingPage({handleLoginClick,handleCreateAccountClick}) {

  const [darkTheme, setDarkTheme] = useState(0);
  const [loaded, setLoading] = useState(0);
  useEffect(() => {
    setLoading(1);

  },[ ]);
  return (
  <>
    <Nav_Bar onLoginClick={handleLoginClick} onClickCreateAccount={handleCreateAccountClick} />

    <div
      className={`landingpage-page is-boxed  has-animations ${loaded ? "is-loaded" : ""} ${
        darkTheme ? "lights-off " : ""
      }`}
    >
      <div className={`site-header body-wrap boxed-container`}>
        <header className="">
          <div className="container">
            <div className="site-header-inner">
              <div className="brand header-brand">
                <h1 className="m-0">
                  <a href="#">
                    <img className="" src={LogoLightSvg} alt="Logo" />
                    <img
                      className="header-logo-image asset-dark"
                      src={LogoDarkSvg}
                      alt="Logo"
                    />
                  </a>
                </h1>
              </div>
            </div>
          </div>
        </header>

        <main>
          <section className="hero">
            <div className="container">
              <div className="hero-inner">
                <div className="hero-copy">
                  <h1 className="hero-title mt-0">
                    Welcome to Focus News
                  </h1>
                  <p className="hero-paragraph">
                  </p>
                  <div className="hero-cta">
                 
                    <div className="lights-toggle">
                      <input
                        onClick={(event) =>
                          setDarkTheme((old) => (old ? 0 : 1))
                        }
                        id="lights-toggle"
                        type="checkbox"
                        name="lights-toggle"
                        className="switch"
                        checked={darkTheme ? "" : "checked"}
                      />
                      <label htmlFor="lights-toggle" className="text-xs">
                        <span>
                          Turn me{" "}
                          <span className="label-text">
                            {darkTheme ? "light" : "dark"}
                          </span>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="hero-media">
                  <div className={`header-illustration `}>
                    <img
                      className="header-illustration-image asset-light"
                      src={HeaderIllustrationLight}
                      alt="Header illustration"
                    />
                    <img
                      className="header-illustration-image asset-dark"
                      src={HeaderIllustrationDark}
                      alt="Header illustration"
                    />
                  </div>
                  <div className="hero-media-illustration">
                    <img
                      className="hero-media-illustration-image asset-light"
                      src={HeroIllustLight}
                      alt="Hero media illustration"
                    />
                    <img
                      className="hero-media-illustration-image asset-dark"
                      src={HeroIllustDark}
                      alt="Hero media illustration"
                    />
                  </div>
                  <div className="hero-media-container">
                    <img
                      className="hero-media-image asset-light"
                      src={HeroMediaLight}
                      alt="Hero media"
                    />
                    <img
                      className="hero-media-image asset-dark"
                      src={HeroMediaDark}
                      alt="Hero media"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="features section">
          <Carousel/>
          </section>

          <section className="cta section">
            <div className="container-sm">
              <div className="cta-inner section-inner">
                <div className="cta-header text-center">
                  <h2 className="section-title mt-0">Get it and Switch</h2>
                  <p className="section-paragraph">
                    Lorem ipsum is common placeholder text used to demonstrate
                    the graphic elements of a document or visual presentation.
                  </p>
                  <div className="cta-cta">
                    <a className="button button-primary" href="#">
                      Buy it now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="site-footer has-top-divider">
          <div className="container">
            <div className="site-footer-inner">
              <div className="brand footer-brand">
                <a href="#">
                  <img className="asset-light" src={LogoLightSvg} alt="Logo" />
                  <img className="asset-dark" src={LogoDarkSvg} alt="Logo" />
                </a>
              </div>
              <ul className="footer-links list-reset">
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">FAQ's</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
              </ul>
              <ul className="footer-social-links list-reset">
                <li>
                  <a href="#">
                    <span className="screen-reader-text">Facebook</span>
                    <svg
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"
                        fill="#FFF"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="screen-reader-text">Twitter</span>
                    <svg
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"
                        fill="#FFF"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="screen-reader-text">Google</span>
                    <svg
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z"
                        fill="#FFF"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
              <div className="footer-copyright">
                &copy; 2023 Focus APP, all rights reserved
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  
  </>
  );
}

export default MainLandingPage;

