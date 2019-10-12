import React from "react";

import "./App.css";
import logo from "./swifter_black.png";
import image from "./mobile.png";
import video from "./video2.mp4";
import video2 from "./video2.gif";
import monetize from "./video.png";

import Form from "./Form";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: true
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick = e => {
    e.preventDefault();
    this.setState({
      menu: !this.state.menu
    });
  };

  render() {
    return (
      // <div className="container">
      <div className="main">
        <nav className="header">
          <div className="logo">
            <img src={logo} alt="Logo" width="110" height="45" />
          </div>

          {/* <div className="hamburger">
          <div className="line line1"></div>
          <div className="line line2"></div>
          <div className="line line3"></div>
        </div> */}

          {this.state.menu ? (
            <button
              onClick={this.onClick}
              className="hamburger hamburger--spring"
              type="button"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          ) : (
            <button
              onClick={this.onClick}
              className="hamburger hamburger--spring is-active"
              type="button"
            >
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
          )}

          <div className="navigation">
            <a href="#">Home</a>
            <a href="#advertise">Advertisers</a>
            <a href="#monetization">Publishers</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
        <div className="container-home">
          <div className="image-text">
            <p className="first-text">
              Grow your mobile business at every stage of the cycle
            </p>
            <p className="second-text">
              Whether you need to acquire high-quality users, boost engagement
              and retention, or maximize ad revenue, Swifter has you covered.
            </p>
            <button className="primary-btn">Discover more</button>

            {/* <a href="#monetization">
            <button type="button" className="primary-btn">
              Developer
            </button>
          </a>

          <a href="#advertise">
            <button className="primary-btn"> Advertiser</button>
          </a> */}
          </div>
          <div></div>
          <img
            src={image}
            className="responsive-home"
            alt="image"
            width="675"
            height="450"
          />
        </div>
        <div className="strip-blue" id="advertise">
          <h1 className="title-advertisers">Brand Advertisers</h1>
          <div className="container">
            <p className="text-white">
              Preferential access to the data-driven audiences you want to
              reach, across in-app, mobile web, and desktop.
            </p>
          </div>
          <img
            src={video2}
            className="responsive-home"
            alt="image"
            width="675"
            height="450"
          />
          <div className="cards">
            <div className="card">
              <h3>Quality inventory at scale</h3>

              <p>
                Global user base lets you scale across non-gaming, gaming,
                social apps, and more. Over 500M monthly unique users for mobile
                in-app alone.
              </p>
            </div>
            <div className="card">
              <h3>VPAID Mobile </h3>
              <p>
                Directly track viewability, completion and click-through rates
                to see how individual ads are performing and devise improved
                ways of engaging with mobile audiences.
              </p>
            </div>
            <div className="card">
              <h3> Keeping it clean</h3>
              <p>
                Constant and consistent application of new technologies to
                ensure a transparent trading environment. Certified third-party
                ad quality partners: Pixalate, WhiteOps.
              </p>
            </div>
          </div>
        </div>
        <div className="strip-white">
          <div className="container">
            {/* <img
          src={battle}
          className="responsive"
          alt="image"
          width="225"
          height="400" */}

            <div>
              <h1
                className="title-advertisers"
                style={{
                  paddingLeft: "0px",
                  color: "#00abcd",
                  textAlign: "left"
                }}
              >
                User Aquisition
              </h1>
              <h1 className="title-ua">
                Start your managed or programmatic campaign.
              </h1>

              <ul className="text">
                <li className="description">
                  Tap into a database of 2 billion mobile profiles to identify
                  the most valuable players for your game
                </li>
                <li className="description">
                  Reach mobile app users programmatically in 165+ countries,
                  across 65,000 apps
                </li>
                <li className="description">
                  Increase in-app purchases through
                </li>
                <li className="description">
                  CPA optimization Optimize for mobile gamers, not just installs
                </li>
              </ul>
            </div>
          </div>

          {/* <div className="footer">
        <p>This website is using cookies, please agree</p>
        <button onClick="">I agree</button>
      </div> */}
        </div>
        <div className="strip-green" id="monetization">
          <h1 className="title-advertisers">Monetization</h1>
          {/* <p className="text-white">
            We help you monetize your audience with global demand from the world’s
            largest mobile advertisers. Maximize your yield through brand safe
            content and dedicated service.
            {/* Swifter provides publishers monetization opportunities with a suite
              of cross-platform ad formats that range from video (in-stream and
              interactive in-stream video), to rich media and native units. All
              our ad formats adhere to the latest VAST, VPAID or MRAID standards. */}{" "}
          {/* </p> */}
          <div className="boxes">
            <div className="box">
              <h1 className="subline"> Global Demand</h1>
              <p className="subline-text">
                We help you monetize your audience with global demand from the
                world’s largest mobile advertisers. Maximize your yield through
                brand safe content and dedicated service.
              </p>
            </div>
            <div className="box">
              <h1 className="subline"> Engaging Ad Formats</h1>
              <p className="subline-text ">
                Excite users with ad formats that enhance your app experience.
                <br></br>
                Power your full screen, vertical, and in-feed placements with
                the highest quality ads
              </p>
            </div>
            <div className="box">
              <h1 className="subline"> Transparent Reporting</h1>
              <p className="subline-text">
                Reporting on all advertiser campaigns running across publishers’
                websites: campaign & viewability reports, audience insights and
                inventory quality analysis.
              </p>
            </div>

            <div className="box">
              <h1 className="subline">
                {" "}
                Programmatic Integration <br></br>
              </h1>
              <p className="subline-text">
                We provide automated solutions for you to maximize your revenue
                potential, while preserving the viewer experience.
              </p>
            </div>
          </div>
        </div>

        <Form />
        <footer className="footer">
          <p>© Copyright 2019 Global Promoting Services Ltd</p>
        </footer>
      </div>
    );
  }
}