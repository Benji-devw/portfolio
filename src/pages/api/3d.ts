interface I3DData {
  id: number;
  title: string;
  sub: string[];
  url: string;
  link: string;
}

const D3Datas: I3DData[] = [
  {
    id: 1,
    title: "#",
    sub: ["/media/icons/maya.svg"],
    url: "/media/3D/Tasse.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "#",
    sub: ["/media/icons/maya.svg"],
    url: "/media/3D/test.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "#",
    sub: ["/media/icons/blender-3d.svg"],
    url: "/media/3D/bg_scene.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "#",
    sub: ["/media/icons/maya.svg"],
    url: "/media/3D/ship.jpg",
    link: "#",
  },
];

export default D3Datas;