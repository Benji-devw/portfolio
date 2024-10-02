import Image from 'next/image';
import { useRouter } from 'next/router';

interface IHomeProps {
    x: number;
    y: number;
}

const Home: React.FC<IHomeProps> = ({ x, y }) => {
    const router = useRouter();
    return (
        <div id="home__wrapper" className="container">
            <div className="home__translate">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <h3>PORTFOLIO</h3>
                        <h1>
                            NAVARRO Benjamin <br /> Développeur web. <br /> Testeur QA.
                        </h1>
                    </div>
                </div>

                <div id="hero" className="row">
                    <div className="col-12 col-lg-4 align-item-center justify-content-center">
                        <div className="hero__content bounceIn">
                            <svg version="1.1" id="home__layer" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 400 150" xmlSpace="preserve">
                                <path className="st10" d="M4.4,29.6V6.7c0-2.2,2.7-4,6-4h59.4" />
                                <path className="st10" d="M395.6,120.6v22.7c0,2.2-2.7,4-6,4h-63.9" />
                            </svg>
                            <div className="profile__avatar">
                                <Image src={`${router.basePath}/media/profile_img.jpg`} alt="profil" width={50} height={50} priority />
                            </div>
                            <div className="hero__text">
                                <h5>
                                    <code>Recherche </code>...
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="hero__content">
                            <svg version="1.1" id="home__layer" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 400 150" xmlSpace="preserve">
                                <path className="st10" d="M4.4,29.6V6.7c0-2.2,2.7-4,6-4h59.4" />
                                <path className="st10" d="M395.6,120.6v22.7c0,2.2-2.7,4-6,4h-63.9" />
                            </svg>
                            <div className="profile__cv">
                                <Image src={`${router.basePath}/media/icons/icon_cv.svg`} alt="profil" width={50} height={50} priority />
                            </div>
                            <div className="hero__text">
                                <h5>
                                    <code>
                                        {' '}
                                        <a href={`${router.basePath}/media/Navarro_Benjamin_CV_2023.pdf`} target="_blank" rel="noopener noreferrer">
                                            Téléchargement
                                        </a>{' '}
                                    </code>
                                    CV
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4"></div>
                </div>
            </div>
        </div>
    );
};
export default Home;
