interface IWebData {
    id: number;
    title: string;
    sub: string[];
    url: string;
    link: string;
}

const webDatas: IWebData[] = [
    {
        id: 1,
        title: 'personnel',
        sub: ['/media/icons/next-js.svg', '/media/icons/Nodejs.svg', '/media/icons/mongo.png', '/media/icons/ts.svg', '/media/icons/Tailwind.svg'],
        url: '/media/web/StouflyDocPreview.jpg',
        link: 'https://stoufly-doc.vercel.app/',
    },
    {
        id: 2,
        title: 'contribution',
        sub: ['/media/icons/Html.svg', '/media/icons/Css.svg', '/media/icons/Js.svg', '/media/icons/bootstrap.svg'],
        url: '/media/web/Web_1366_6.jpg',
        link: 'aqua',
    },
    {
        id: 3,
        title: 'contribution',
        sub: ['/media/icons/wordpress.svg', '/media/icons/php.svg', '/media/icons/Js.svg', '/media/icons/jquery-icon.svg'],
        url: '/media/web/aleph.jpg',
        link: 'https://www.aleph-ecriture.fr/',
    },
    {
        id: 4,
        title: 'contribution',
        sub: ['/media/icons/Html.svg', '/media/icons/Css.svg', '/media/icons/Js.svg', '/media/icons/php.svg', '/media/icons/bootstrap.svg'],
        url: '/media/web/Web_1366_5.jpg',
        link: 'speedo',
    },
    {
        id: 5,
        title: 'contribution',
        sub: ['/media/icons/wordpress.svg', '/media/icons/php.svg', '/media/icons/Js.svg', '/media/icons/jquery-icon.svg'],
        url: '/media/web/ffmi.jpg',
        link: 'https://www.ffmi.asso.fr/',
    },
    {
        id: 6,
        title: 'personnel',
        sub: ['/media/icons/react_logo.svg', '/media/icons/Nodejs.svg', '/media/icons/mongo.png', '/media/icons/Sass.svg', '/media/icons/bootstrap.svg'],
        url: '/media/web/vallena-1.jpg',
        link: 'https://github.com/Benji-devw/Vallena',
    },
    {
        id: 7,
        title: '3D porfolio',
        sub: ['/media/icons/next-js.svg', '/media/icons/Threejs-logo.svg'],
        url: '/media/web/spacefolio.png',
        link: 'https://bn-3d.vercel.app/',
    },
    {
        id: 8,
        title: '3D porfolio',
        sub: ['/media/icons/next-js.svg', '/media/icons/Threejs-logo.svg'],
        url: '/media/web/Folio_Preview.jpg',
        link: 'https://navarro-benjamin.vercel.app/',
    },
];

export default webDatas;
