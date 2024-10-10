import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Image from 'next/image';
import { useRouter } from 'next/router';
import fr from '@/pages/api/fr.json';
import { XYProps } from '@/types/types';

export const Nav: React.FC<XYProps> = ({ scrollPosition }) => {
    console.log(scrollPosition);

    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav>
            <div className="container p-1">
                <div className="flex items-center justify-between menu">
                    <div className="flex-none w-12 nav-icon h-12 flex items-center justify-center rounded-full overflow-hidden">
                        <div className="w-full h-full relative profile__img">
                            <Image
                                src={`${router.basePath}/media/profile_img.jpg`}
                                alt="profil"
                                fill
                                priority
                            />
                        </div>
                    </div>

                    <div className={`flex items-center justify-between ${!isMenuOpen ? 'nav__large' : 'nav__media'}`}>
                        <div className="flex-1">
                            <ul className={`flex flex-row justify-end items-center h-full nav__links text-center ${isMenuOpen ? 'open' : ''}`}>
                                <li className="nav__item mx-4">
                                    <Link onClick={toggleMenu} activeClass="link__active" to="web__wrapper" spy={true} offset={20} duration={500}>
                                        {fr.header.nav.web}
                                    </Link>
                                </li>
                                <li className="nav__item mx-4">
                                    <Link onClick={toggleMenu} activeClass="link__active" to="design__wrapper" spy={true} offset={20} duration={500}>
                                        {fr.header.nav.design}
                                    </Link>
                                </li>
                                <li className="nav__item mx-4">
                                    <Link onClick={toggleMenu} activeClass="link__active" to="three__wrapper" spy={true} offset={20} duration={500}>
                                        {fr.header.nav.infographie}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <hr />
                        <div className="flex-none">
                            <div className="flex flex-row gap-2 justify-end items-center h-full">
                                <div className="mx-1 flex items-center justify-center rounded-full overflow-hidden">
                                    <a href="https://gitlab.com/Benji-devw" target="_blank" className="w-full h-full relative rs__link">
                                        <Image src={`/gitlab.svg`} alt="GitLab" width={0} height={0} fill priority />
                                    </a>
                                </div>
                                <div className="w-8 h-8 mx-1 flex items-center justify-center rounded-full overflow-hidden">
                                    <a href="https://github.com/Benji-devw/" target="_blank" className="w-full h-full relative rs__link">
                                        <Image src={`/github.svg`} alt="GitHub" fill priority />
                                    </a>
                                </div>
                                <div className="w-8 h-8 mx-1 flex items-center justify-center rounded-full overflow-hidden">
                                    <div className="w-full h-full relative rs__link">
                                        <Image src={`/in.svg`} alt="LinkedIn" fill priority />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className={`toogle__nav__media`} onClick={toggleMenu}>
                        ☰
                    </button>
                </div>

                {/* {isMenuOpen && (
                    <div className="flex items-center justify-between text-center nav__media">
                        <div className="flex-1">
                            <ul className="flex flex-col items-center justify-center h-full">
                                <li className="nav__item mx-4">
                                    <Link activeClass="link__active" to="web__wrapper" spy={true} offset={-100} duration={500}>
                                        {fr.header.nav.web}
                                    </Link>
                                </li>
                                <li className="nav__item mx-4">
                                    <Link activeClass="link__active" to="design__wrapper" spy={true} offset={-100} duration={500}>
                                        {fr.header.nav.design}
                                    </Link>
                                </li>
                                <li className="nav__item mx-4">
                                    <Link activeClass="link__active" to="three__wrapper" spy={true} offset={-100} duration={500}>
                                        {fr.header.nav.infographie}
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="flex-none w-36">
                                <div className="flex flex-row justify-end items-center h-full">
                                    <div className="w-8 h-8 mx-1 flex items-center justify-center rounded-full overflow-hidden">
                                        <a href="https://gitlab.com/Benji-devw" target="_blank" className="w-full h-full relative nav__links">
                                            <Image src={`/gitlab.svg`} alt="GitLab" width={0} height={0} fill priority />
                                        </a>
                                    </div>
                                    <div className="w-8 h-8 mx-1 flex items-center justify-center rounded-full overflow-hidden">
                                        <div className="w-full h-full relative nav__links">
                                            <Image src={`/github.svg`} alt="GitHub" fill priority />
                                        </div>
                                    </div>
                                    <div className="w-8 h-8 mx-1 flex items-center justify-center rounded-full overflow-hidden">
                                        <div className="w-full h-full relative nav__links">
                                            <Image src={`/in.svg`} alt="LinkedIn" fill priority />
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                )} */}
            </div>
        </nav>
    );
};
