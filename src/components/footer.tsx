import Image from "next/image"
import { useRouter } from "next/router";
import { Contact } from "./Contact";
import { Link } from 'react-scroll'


const Footer: React.FC = () => {
  const router = useRouter();
  return (
    <footer className="container-fluid">
      <div className="container footer__wrapper">

        <div className="row">

          <div className="row footer__content">

            <div className="col-12 p-2 col-lg-8 footer__left">
            <ul className="nav__links h-100 align-items-center">
              <li className="nav__item">
                <Link
                  activeClass="link__active"
                  to="design__wrapper"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >DESIGN</Link>
                </li>
              <li className="nav__item">
              <Link
                  activeClass="link__active"
                  to="web__wrapper"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >Web</Link>
              </li>
              <li className="nav__item">
              <Link
                  activeClass="link__active"
                  to="3d__wrapper"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >3D</Link>
              </li>
            </ul>
            </div>
            <div className="col-12 p-2 col-lg-4 grid gap-3 footer__right">
              <div className="contact__form">
                <Contact />
              </div>
              <div className="footer__Link">
                <a href="https://github.com/Benji-devw" target="_blank" rel="noreferrer">
                  <Image 
                    src={`${router.basePath}/media/Github_Icon.svg`} 
                    alt={'git_img'} priority height={30} width={30}
                  />
                </a>
              </div>
              <div className="footer__Link">
                <a href="https://www.linkedin.com/in/benjamin-navarro-586713220/" target="_blank" rel="noreferrer">
                  <Image 
                    src={`${router.basePath}/media/in_Icon.svg`} 
                    alt={'git_img'} priority height={30} width={30}
                  />
                </a>
              </div>
            </div>
            <div className="col-12 text-center footer__bottom">
              <p>© Navarro Benjamin Portfolio - {new Date().getFullYear()}</p>
            </div>

          </div>
         
        </div>
      </div>


        {/* <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fillOpacity="1" d="M0,160L1440,32L1440,320L0,320Z"></path>
        </svg> */}
        <svg className='footer__blob' version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 1920 1080" xmlSpace="preserve">
        <g id="Layer_1">
        <path className="st0" d="M576.5,787.1l-289-138.7c-25.7-12.3-56.1-10-79.6,6.1L-56.7,835.4c-23.6,16.1-36.7,43.6-34.5,72l24.4,319.6
          c2.2,28.4,19.4,53.6,45.1,65.9l289,138.7c25.7,12.3,56.1,10,79.6-6.1l264.6-180.9c23.6-16.1,36.7-43.6,34.5-72L621.5,853
          C619.4,824.5,602.2,799.4,576.5,787.1z"/>
        </g>
      </svg>
    
    </footer>
  )
}
export default Footer