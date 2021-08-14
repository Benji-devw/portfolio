import React from 'react';
import { Link } from "react-scroll";

const Nav = () => {

  return (
    <>
    <div className="row nav text-center">
      <div className="col-sm-4">
        LOGO
      </div>
      <div className="col-sm-8">
          <div className="nav" id="navbar">
            <nav className="nav-content">
              <ul className="nav-items">
                <li className="nav-item">
                  <Link activeClass="active"
                    to="sectionHome"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >Home</Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active"
                    to="sectionCompetences"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >Compétences</Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active"
                    to="sectionObjectifs"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >Objectifs</Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active"
                    to="sectionPortfolio"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >Portfolio</Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active"
                    to="sectionAbout"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >À propos</Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active"
                    to="sectionContact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
      </div>
      
    </div>
    </>
  );
};

export default Nav;