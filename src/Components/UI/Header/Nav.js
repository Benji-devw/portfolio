import React from 'react'
import { Link } from "react-scroll";


const Nav = () => {

  const theme = localStorage.getItem('theme');
  const [backG, setBackG] = React.useState("#222222)")
  const [headerOpen, setHeaderOpen] = React.useState(false)
  const [collapse, setCollapse] = React.useState("40px")
  
  React.useEffect(() => {
    if (theme !== 'light') {
      setBackG("#222222")
    } else { setBackG("#F5F5F5")}
  }, [theme])
  

  return (
    <div className="header"  style={{height: collapse, backgroundColor: backG, transitionDuration: ".5s" }}>
    <div className="header-wrapper">
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">

        <div className="navbar-brand">
          <span>P</span>
          <span>O</span>
          <span>R</span>
          <span>T</span>
          <span>F</span>
          <span>O</span>
          <span>L</span>
          <span>I</span>
          <span>O</span>
        </div>


        <div className="navbar-toggler"
        onClick={() => {
          setCollapse(collapse === '40px' ? '180px' : '40px')
          setHeaderOpen(headerOpen ? false : true)
        }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512"
            >
            <g
              fill={theme === "light" ? "#222222" : "#F5F5F5"} 
              stroke='#000000'
              strokeMiterlimit="10"
              >
              <path className="st0" d="M255-1C113.6-1-1,113.6-1,255s114.6,256,256,256s256-114.6,256-256S396.4-1,255-1z M255,491.4
                C124.4,491.4,18.6,385.6,18.6,255S124.4,18.6,255,18.6S491.4,124.4,491.4,255S385.6,491.4,255,491.4z"/>
              <path className="st0" d="M361.7,148.3H148.3c-11.8,0-21.3,9.6-21.3,21.3s9.6,21.3,21.3,21.3h213.3c11.8,0,21.3-9.6,21.3-21.3
                C383,157.9,373.4,148.3,361.7,148.3z"/>
              <path className="st0" d="M361.7,233.7H148.3c-11.8,0-21.3,9.6-21.3,21.3c0,11.8,9.6,21.3,21.3,21.3h213.3c11.8,0,21.3-9.6,21.3-21.3
                S373.4,233.7,361.7,233.7z"/>
              <path className="st0" d="M361.7,319H148.3c-11.8,0-21.3,9.6-21.3,21.3s9.6,21.3,21.3,21.3h213.3c11.8,0,21.3-9.6,21.3-21.3
                C383,328.6,373.4,319,361.7,319z"/>
            </g>
          </svg>
        </div>

        
        <div className="collapse navbar-collapse" style={{display: headerOpen ? 'block' : 'none', color: theme === 'light' ? '#222222' : '#F5F5F5' }}>
          <div className="navbar-nav mx-auto">
          <ul className={headerOpen ? 'nav-collapse slideInDown' : 'nav-items'}>
            <li className='nav-item'>
            <Link activeClass="active" onClick={() => {
                setHeaderOpen(false)
                setCollapse('40px')
                }}
                  to="sectionHome"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={0}
                >Home</Link>
              </li>
              <li className="nav-item">
              <Link activeClass="active" onClick={() => {
                setHeaderOpen(false)
                setCollapse('40px')
                }}
                  to="sectionCompetences"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={0}
                >Compétences</Link>
              </li>
              <li className="nav-item">
              <Link activeClass="active" onClick={() => {
                setHeaderOpen(false)
                setCollapse('40px')
                }}
                  to="sectionObjectifs"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={0}
                >Objectifs</Link>
              </li>
              <li className="nav-item">
              <Link activeClass="active" onClick={() => {
                setHeaderOpen(false)
                setCollapse('40px')
                }}
                  to="sectionPortfolio"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={0}
                >Portfolio</Link>
              </li>
              <li className="nav-item">
              <Link activeClass="active" onClick={() => {
                setHeaderOpen(false)
                setCollapse('40px')
                }}
                  to="sectionAbout"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={0}
                >À propos</Link>
              </li>
              <li className="nav-item">
                <Link activeClass="active"
                  to="sectionContact"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={0}
                >Contact</Link>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </nav>


    </div>
    </div>
  );
};

export default Nav;