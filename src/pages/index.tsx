import Head from 'next/head';
import Home from '@/components/home';
import Nav from '@/components/nav';
import Cards from '@/components/Cards';
import webDatas from './api/web';
import designDatas from './api/design';
import D3Datas from './api/3d';
import LargeCards from '@/components/LargeCards';
import Footer from '@/components/footer';
import { useEffect, useState } from 'react';

const Index: React.FC = () => {
  const [pos, setPos] = useState<any>({x:0,y:0})

  function onMouseMove(event: MouseEvent) {
      const x = -event.clientX / 30;
      const y = -event.clientY / 30;
      setPos({x, y})
      console.log(`Mouse position: x=${x}, y=${y}`);
    }
  

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
  },[])

  return (
    <>
      <Head>
        <title>Navarro Benjamin - Portfolio</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Porfolio developpeur web, Navarro Benjamin, design, web, 3D" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Porfolio_Logo.svg" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous" />
      </Head>
      
      <Nav />

      <main className="container-fluid fadeIn">
        <div className="bg bg__one" style={{transform: `translateX(${pos.x/5}px) translateY(${pos.y/5}px)`}}></div>
        <div className="bg bg__two" style={{transform: `translateX(${-pos.x/5}px) translateY(${-pos.y/5}px)`}}></div>
        
        <Home x={pos.x} y={pos.y}/>

        <div className="cards__translate"
          style={{transform: `translateX(${pos.x}px) translateY(${pos.y}px)`}}
        >
          <Cards data={webDatas} sectionTitle="Web"  section="web__wrapper"/>
          <Cards data={designDatas} sectionTitle="Design" section="design__wrapper" />
          <Cards data={D3Datas} sectionTitle="3D"  section="three__wrapper"/>
        </div>

        <LargeCards />

      
      </main>

      <Footer />
    </>
  )
}
export default Index