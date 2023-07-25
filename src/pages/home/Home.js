import React from "react";
import myimg2 from "../../assets/images/myimg2.jpg";
import myimg from "../../assets/images/myimg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "react-router-dom";
import { faFacebook, faInstagram, faLinkedin, faSkype, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile, faHouse, faPersonThroughWindow, faServer, faUser } from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
  return (
    <>
      <div className="portfolio">
        <div className="side-bar">
          <div>
            <div className="my-img"><img src={myimg2} alt="" /></div>
            <h1 className="name">Amine Dakhamme</h1>
          </div>
          <div className="reseau">
            <a href="https://twitter.com/" target="blank"><FontAwesomeIcon icon={faTwitter} className="icone-reseau" /></a>
            <a href="https://www.facebook.com/profile.php?id=100011073520913" target="blank"><FontAwesomeIcon icon={faFacebook} className="icone-reseau" /></a>
            <a href="https://www.instagram.com/amine_dakhamme_/" target="blank"><FontAwesomeIcon icon={faInstagram} className="icone-reseau" /></a>
            <a href="https://www.linkedin.com/" target="blank"><FontAwesomeIcon icon={faLinkedin} className="icone-reseau" /></a>
            <a href="https://www.skype.com/en/" target="blank"><FontAwesomeIcon icon={faSkype} className="icone-reseau" /></a>
          </div>
          <div>
            <a href="#home" className="info"><FontAwesomeIcon icon={faHouse} className="icone-info" /> <h3>Home</h3></a>
            <a href="#about" className="info"><FontAwesomeIcon icon={faUser} className="icone-info" /> <h3>About</h3></a>
            <a href="" className="info"><FontAwesomeIcon icon={faFile} className="icone-info" /> <h3>Resume</h3></a>
            <a href="" className="info"><FontAwesomeIcon icon={faPersonThroughWindow} className="icone-info" /> <h3>Portfolio</h3></a>
            <a href="" className="info"><FontAwesomeIcon icon={faServer} className="icone-info" /> <h3>Service</h3></a>
            <a href="" className="info"><FontAwesomeIcon icon={faEnvelope} className="icone-info" /> <h3>Contact</h3></a>
          </div>
        </div>
        <section className="all-pages" id="home">
          <div className="myname"><h1>Amine Dakhamme</h1>
            <p className="mine">&nbsp; &nbsp; &nbsp; &nbsp; I'm a <span>DEVELOPER</span></p></div>


        </section>
        <section className="section-about">
          <div className="title" id="about">  <h1>About</h1></div>
          <div className="my-para"><p>je m'appel Amine Dakhamme je suis entrain de maitriser les language suivant html , css , javascript et react Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid tempore unde maxime fuga, dolorum placeat.</p></div>
          <div className="my-information">
            <div className="img-info"><img src={myimg} alt="" /></div>

            <div className="age-etc">
              <div className="devloper">
                <h1>Web Developer.</h1>
              </div>
              <div className="two-birthay">
                <div className="birthay">
                  <h5><b>Birthday:</b>  23 junary 2003</h5>
                  <h5><b>Website: </b>www.example.com</h5>
                  <h5><b>Phone:</b> +212 644156337</h5>
                  <h5><b>City:</b> CasaBlanca, Morocco</h5>
                </div>
                <div className="birthay">
                  <h5><b>Age:</b> 20</h5>
                  <h5><b>Degree:</b> Master</h5>
                  <h5><b>PhEmailone:</b>dakhamme474@gmail.com</h5>
                  <h5><b>Freelance:</b>Available</h5>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
};
