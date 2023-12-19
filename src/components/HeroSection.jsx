import React from "react";
import Node from "../assets/img/node.png";
import php from "../assets/img/php.png";
import react from "../assets/img/react.png";
import vuejs from "../assets/img/vuejs.png";
import javaimg from "../assets/img/javaimg.png";
import angukar from "../assets/img/angukar.png";
import first from "../assets/img/first.png";
import second from "../assets/img/second.png";
import third from "../assets/img/third.png";
import last from "../assets/img/last.png";
import { Link } from "react-router-dom";
import hv from "../assets/video/hv.mp4";

const Herosection = () => {
  return (
    <div style={{ backgroundColor: "#DDDDDD" }}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row g-2">
            <div className="col-sm-12 col-lg-6 col-md-6">{
            <video width="550" loop autoPlay muted className="main-video">
            <source src={hv} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
}     
            </div>
            <div className="col-sm-12 col-lg-6 col-md-6 Hero-text" >
              <br></br>
              <h1>
                Social Media Marketing Company in Pakistan</h1>
              <br></br>
              <p>
                Power up your brand with top social media marketing agency in Pakistan
              </p>
              <button type="submit" className="btn navbar-btn">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
      <br></br>
      <br></br>
      {/* Officially Supported Languages Section */}
      <section className="supported-languages-section">
        <div className="container">
          <h1>Officially Supported Languages</h1>
          <div className="row language-logo">
            <div className="col-md-2 mb-3">
              <img
                src={Node}
                alt="Language 1"
                className="languages"
                style={{ paddingBottom: "2rem" }}
              />
            </div>
            <div className="col-md-2 mb-2">
              <img src={php} alt="Language 2" className="languages" />
            </div>
            <div className="col-md-2">
              <img src={react} alt="Language 3" className="languages" />
            </div>
            <div className="col-md-2">
              <img
                src={vuejs}
                alt="Language 4"
                className="languages"
                style={{ marginBottom: "2px" }}
              />
            </div>
            <div className="col-md-2 mb-2">
              <img src={javaimg} alt="Language 5" className="languages" />
            </div>
            <div className="col-md-2 mt-3">
              <img src={angukar} alt="Language 6" className="languages" />
            </div>
          </div>
        </div>
      </section>


      <section>
      <div className="container">
          <div class="my-text">
            <p>Developers, teams, and Startups of all sizes use ExpertLink to deploy, manage, and scale skills.</p>
          </div>
            <div className="row language-logo" style={{ paddingBottom: "2rem", paddingLeft:"2rem", paddingRight: "2rem", textAlign: "center"}}>
            <div className="col-md-2 mb-3 d-flex align-items-center">
              <img  src={first} alt="Language 1" className="languages"
              />
            </div>
            <div className="col-md-2 mb-3 d-flex align-items-center">
              <img src={second} alt="Language 2" className="languages" />
            </div>
            <div className="col-md-2 mb-3 d-flex align-items-center">
              <img src={third} alt="Language 3" className="languages" />
            </div>
            <div className="col-md-2 mb-3 d-flex align-items-center">
              <img src={last} alt="Language 4" className="languages" style={{ marginBottom: "2px" }}
              />
            </div>
          </div> 
          <div className="two-text"> 
          <p><b>Dive into a world of endless possibilities with our featured skill categories! From cutting-edge tech to timeless crafts, our diverse array of expertise awaits your exploration. Whether you're into coding, culinary arts, or mindfulness practices, our curated categories make it easy to find and connect with like-minded individuals ready to swap skills and expand horizons. Join the community and embark on a journey of collaborative learning in the categories that spark your passion.</b></p> 
          </div>
          </div>
        </section>
        <div className="container">
  <div className="row g-2">
    <div className="col-md-12">
      <a href="/Signup">
        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </a>
      <p style={{ textAlign: "center", marginTop: "10px" }}>
        <br>
        </br>
        Have a Question? Feel Free to{" "}
        <Link
          to="/Contact"
          style={{ color: "#6a3f3e", textDecoration: "underline" }}
        >
          Contact Us
        </Link>
      </p>
    </div>
  </div>
</div>
    </div>
  );
};
export default Herosection;
