import Image from 'next/image';
import { useRouter } from 'next/router';
import fr from '@/pages/api/fr.json';
import React from 'react';
import { MousePosition } from '@/types/types';

export const Home: React.FC<MousePosition> = ({ x, y }) => {
    const router = useRouter();
    const text = fr.home;
    return (
        <div id="home__wrapper" className="flex flex-col align-middle justify-center items-center">
            <div id="home__bg">
                <Image className="home__bg__img" src={`${router.basePath}/Logos.png`} alt="profil" width={0} height={0} sizes="100vw" priority />
            </div>

            <div className="home__titles__wrapper">
                <h2 id="home__title__portfolio">
                    {text.title}
                </h2>
                <h1 id="home__title__name">
                    {text.myname}
                </h1>
            </div>

            <div id="home__subtitles__wrapper" className=" text-center">
                <h2 
                    className="sub__title__portfolio"
                    // style={{backgroundImage: `linear-gradient(${x}deg, #d53369 0%, #c67502 100%)`}}
                >{text.subTitle}</h2>
                <p className="sub__title__name">
                    {text.description.split('.').map((sentence, index) => (
                        <React.Fragment key={index}>
                            {sentence.trim()}
                            {index < text.description.split('.').length - 1 && <br />}
                        </React.Fragment>
                    ))}
                </p>
            </div>

            {/* <div className="intro__wrapper">
                <div className="intro__content">
                    <h1 className="intro__title">
                        Hello, I'm <span className="intro__title__name">Kai</span>
                    </h1>
                    <h2 className="intro__subtitle">
                        I'm a <span className="intro__subtitle__highlight">Frontend Developer</span>
                    </h2>
                </div>
            </div> */}

            {/* <div id="hero" className="row">
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
                </div> */}
        </div>
    );
};
