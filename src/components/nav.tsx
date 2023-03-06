import Image from "next/image"
import { Link } from 'react-scroll'

const Nav: React.FC = () => {
  return (
    <nav>
      <div className="container">
        <div className="row">

          <div className="col-2 nav-icon">
            <Image src={"/Porfolio_Logo.svg"} alt="logo" width={80} height={80} />
          </div>

          <div className="col-10">
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

        </div>
      </div>
    </nav>
  )
}
export default Nav