import Head from 'next/head';
import Image from 'next/image';
import Home from '@/components/home';
import Nav from '@/components/nav';
import Cards from '@/components/Cards';
import webDatas from './api/web';
import designDatas from './api/design';
import D3Datas from './api/3d';
import LargeCards from '@/components/LargeCards';
import Footer from '@/components/footer';

const Index: React.FC = () => {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Porfolio, Navarro Benjamin, design, web, 3D" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Porfolio_Logo.svg" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous" />
      </Head>
      
      <Nav />

      <main className="container-fluid">
        <Home />
        <Cards data={designDatas} sectionTitle="Design" section="design__wrapper" />
        <Cards data={webDatas} sectionTitle="Web"  section="web__wrapper"/>
        <Cards data={D3Datas} sectionTitle="3D"  section="3d__wrapper"/>

        <LargeCards />
      </main>

      <Footer />
    </>
  )
}
export default Index