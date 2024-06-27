import Head from "next/head";
import Home from "@/components/home";
import Nav from "@/components/nav";
import Cards from "@/components/Cards";
import webDatas from "./api/web";
import designDatas from "./api/design";
import D3Datas from "./api/3d";
import LargeCards from "@/components/LargeCards";
import Footer from "@/components/footer";
import { MousePosition } from "@/types/types";
import { useEffect, useRef, useState } from "react";

const Index: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  function onMouseMove(event: MouseEvent) {
    const x = -event.clientX / 30;
    const y = -event.clientY / 30;
    setMousePosition({ x, y });
    // console.log(`Mouse position: x=${x}, y=${y}`);
  }
  function handleScroll() {
    const position = window.pageYOffset;
    setScrollPosition(position);
  }

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Navarro Benjamin - Portfolio</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Porfolio developpeur web, Navarro Benjamin, design, web, 3D"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Porfolio_Logo.svg" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossOrigin="anonymous"
        />
      </Head>

      <Nav />

      <main ref={containerRef} className="container-fluid fadeIn">
        <div
          className="bg bg__one"
          style={{
            transform: `translateX(${mousePosition.x / 5}px) translateY(${
              mousePosition.y / 5
            }px)`,
          }}
        ></div>
        <div
          className="bg bg__two"
          style={{
            transform: `translateX(${-mousePosition.x / 5}px) translateY(${
              -mousePosition.y / 5
            }px)`,
          }}
        ></div>

        <svg
          className="index__blob"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="1100px"
          height="1080px"
          viewBox="0 0 1920 1080"
          xmlSpace="preserve">
          <circle className="index__blob__st0" cx="960" cy="540" r="177.6" />
          <g>
            <circle
              style={{
                strokeDashoffset: `${scrollPosition / 10}%`,
                strokeDasharray: `${50 + scrollPosition / 10}%`,
              }}
              className="index__blob__st1"
              cx="960"
              cy="539.6"
              r="350"
            />
            <circle
              style={{
                strokeDashoffset: `${scrollPosition / 10}%`,
                strokeDasharray: `${70 + scrollPosition / 100}%`,
              }}
              className="index__blob__st1"
              cx="960"
              cy="539.6"
              r="400"
            />
            <circle
              style={{
                strokeDashoffset: `${scrollPosition / 10}%`,
                strokeDasharray: `${100 + scrollPosition / 200}%`,
              }}
              className="index__blob__st1"
              cx="960"
              cy="539.6"
              r="450"
            />
          </g>
        </svg>

        <Home x={mousePosition.x} y={mousePosition.y} />

        <div
          className="cards__translate"
          style={{
            transform: `translateX(${mousePosition.x}px) translateY(${mousePosition.y}px)`,
          }}
        >
          <Cards data={webDatas} sectionTitle="Web" section="web__wrapper" />
          <Cards data={designDatas} sectionTitle="Design" section="design__wrapper" />
          <Cards data={D3Datas} sectionTitle="3D" section="three__wrapper" />
        </div>

        <LargeCards />
      </main>

      <Footer />
    </>
  );
};
export default Index;
