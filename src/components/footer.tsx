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
            <ul className="footer__links h-100 align-items-center justify-content-center">
              <li className="footer__item">
              <Link
                  to="web__wrapper"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >Web</Link>
                </li>
              <li className="footer__item">
                <Link
                  to="design__wrapper"
                  spy={true}
                  offset={-100}
                  duration={500}
                >DESIGN</Link>
              </li>
              <li className="footer__item">
              <Link
                  to="three__wrapper"
                  spy={true}
                  offset={-100}
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
              <p>{new Date().getFullYear()} - Navarro Benjamin Portfolio </p>
            </div>

          </div>
         
        </div>
      </div>
    </footer>
  )
}
export default Footer