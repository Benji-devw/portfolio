interface IWebData {
    title: string;
    sub: string[];
    url: string;
    link: string;
    github?: string;
}

const webDatas: IWebData[] = [
    {
        title: 'Projet Cours',
        sub: ['/media/icons/Html.svg', '/media/icons/Css.svg', '/media/icons/Js.svg'],
        url: '/media/web/petitsPlats.jpeg',
        link: 'https://benji-devw.github.io/p7-petits-plats/',
        github: 'https://github.com/Benji-devw/p7-petits-plats'
    },
    {
        title: 'personnel',
        sub: ['/media/icons/next-js.svg', '/media/icons/Nodejs.svg', '/media/icons/mongo.png', '/media/icons/ts.svg', '/media/icons/Tailwind.svg'],
        url: '/media/web/StouflyDocPreview.jpg',
        link: 'https://stoufly-doc.vercel.app/',
        github: 'https://github.com/Benji-devw/stoufly_doc',
    },
    {
        title: 'contribution',
        sub: ['/media/icons/Html.svg', '/media/icons/Css.svg', '/media/icons/Js.svg', '/media/icons/bootstrap.svg'],
        url: '/media/web/Web_1366_6.jpg',
        link: 'aqua',
    },
    {
        title: 'contribution',
        sub: ['/media/icons/wordpress.svg', '/media/icons/php.svg', '/media/icons/Js.svg', '/media/icons/jquery-icon.svg'],
        url: '/media/web/aleph.jpg',
        link: 'https://www.aleph-ecriture.fr/',
    },
    {
        title: 'contribution',
        sub: ['/media/icons/Html.svg', '/media/icons/Css.svg', '/media/icons/Js.svg', '/media/icons/php.svg', '/media/icons/bootstrap.svg'],
        url: '/media/web/Web_1366_5.jpg',
        link: 'speedo',
    },
    {
        title: 'contribution',
        sub: ['/media/icons/wordpress.svg', '/media/icons/php.svg', '/media/icons/Js.svg', '/media/icons/jquery-icon.svg'],
        url: '/media/web/ffmi.jpg',
        link: 'https://www.ffmi.asso.fr/',
    },
    {
        title: 'personnel',
        sub: ['/media/icons/react_logo.svg', '/media/icons/Nodejs.svg', '/media/icons/mongo.png', '/media/icons/Sass.svg', '/media/icons/bootstrap.svg'],
        url: '/media/web/vallena-1.jpg',
        link: '#',
        github: 'https://github.com/Benji-devw/Vallena'
    },
    {
        title: '3D porfolio',
        sub: ['/media/icons/next-js.svg', '/media/icons/Threejs-logo.svg'],
        url: '/media/web/spacefolio.png',
        link: 'https://bn-3d.vercel.app/',
    },
    {
        title: '3D porfolio',
        sub: ['/media/icons/next-js.svg', '/media/icons/Threejs-logo.svg'],
        url: '/media/web/Folio_Preview.jpg',
        link: 'https://navarro-benjamin.vercel.app/',
        github: 'https://github.com/Benji-devw/folio-threejs'
    },
];

export default webDatas;
