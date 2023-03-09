import Image from "next/image"
import { Link } from 'react-scroll'
import { useRouter } from 'next/router';

const Nav: React.FC = () => {
  const router = useRouter();
  return (
    <nav>
      <div className="container">
        <div className="row">

          <div className=" col-2 nav-icon">
            <Link
              to="home__wrapper"
              spy={true}
              offset={-150}
              duration={500}
            >
              <Image src={`${router.basePath}/Porfolio_Logo.svg`} alt="logo" width={80} height={80} />
            </Link>
          </div>

          <div className=" col-10">
            <ul className="nav__links h-100 align-item-center">
              <li className="nav__item">
                <Link
                    activeClass="link__active"
                    to="web__wrapper"
                    spy={true}
    
                    offset={-100}
                    duration={500}
                  >Web</Link>
                </li>
              <li className="nav__item">
                <Link
                  activeClass="link__active"
                  to="design__wrapper"
                  spy={true}
  
                  offset={-100}
                  duration={500}
                >DESIGN</Link>
              </li>
              <li className="nav__item">
              <Link
                  activeClass="link__active"
                  to="three__wrapper"
                  spy={true}
  
                  offset={-100}
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