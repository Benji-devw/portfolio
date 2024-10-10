import { useEffect, useRef, useState, useCallback } from 'react';
import Head from 'next/head';
import { Home } from '@/components/home';
import { Nav } from '@/components/nav';
import Cards from '@/components/Cards';
import webDatas from './api/web';
import designDatas from './api/design';
import D3Datas from './api/3d';
// import LargeCards from '@/components/LargeCards';
import Footer from '@/components/footer';
import { MousePosition } from '@/types/types';
import { Intro } from '@/components/Intro';

const Index: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = useCallback(() => {
        // const position = window.pageYOffset;
        setScrollPosition(window.scrollY);
    }, []);

    const onMouseMove = useCallback((event: MouseEvent) => {
        const x = -event.clientX / 30;
        const y = -event.clientY / 30;
        setMousePosition({ x, y });
        // console.log(`Mousezz position: x=${x}, y=${y}`);
    }, []);

    useEffect(() => {
        document.addEventListener('mousemove', onMouseMove);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // console.log(scrollPosition);
    return (
        <>
            <Head>
                <title>Navarro Benjamin - Portfolio</title>
                <meta charSet="utf-8" />
                <meta name="description" content="Porfolio developpeur web, Navarro Benjamin, design, web, 3D" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/Porfolio_Logo.svg" />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
                    integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
                    crossOrigin="anonymous"
                />
            </Head>

            <Nav scrollPosition={scrollPosition} />

            <main ref={containerRef} className="container-fluid fadeIn p-0">
                <Home x={mousePosition.x} y={mousePosition.y} />
                <section
                    style={{
                        transform: `translateX(${mousePosition.x}px) translateY(${mousePosition.y}px)`,
                        // backgroundImage: "url('/stars.svg')",
                        // backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`,
                        // backgroundRepeat: 'no-repeat',
                        // backgroundSize: 'contain',
                    }}
                >
                    <article
                        id="Sticky__wrapper"
                        // style={{
                        //     transform: `translateX(${mousePosition.x}px) translateY(${mousePosition.y}px)`,
                        // }}
                    >
                        <Intro />
                    </article>

                    <article id="gallery__wrapper" className="cards__translate">
                        <Cards data={webDatas} sectionTitle="Web" section="web__wrapper" />
                        <Cards data={designDatas} sectionTitle="Design" section="design__wrapper" />
                        <Cards data={D3Datas} sectionTitle="3D" section="three__wrapper" />
                    </article>
                </section>

                {/* <LargeCards /> */}
            </main>

            <Footer />
        </>
    );
};
export default Index;
