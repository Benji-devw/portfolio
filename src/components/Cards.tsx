import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';


interface ICardProps {
  data: object[];
  sectionTitle: string;
  section: string;
}

const Cards: React.FC<ICardProps> = ({data, sectionTitle, section}) => {

  const router = useRouter();
  const [dataLoad, setDataload] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>(6);
  const [onDisplay, setOnDisplay] = useState<number>();

  const handleOnDisplay = (id: any) => {
    setOnDisplay(id)
  }

  const handleLoadMore = () => {
    setLimit((prevLimit) => prevLimit + 6);
  };

  const titleIcons = [
    `${router.basePath}/media/icons/icon_Design.svg`,
    `${router.basePath}/media/icons/icon_Web.svg`,
    `${router.basePath}/media/icons/icons_infographie.svg`
  ];

  const [pos, setPos] = useState<any>({x:0,y:0})

  function onMouseMove(event: MouseEvent) {
    const x = event.clientX;
    const y = event.clientY;
    setPos({x, y})
    console.log(`Mouse position: x=${x}, y=${y}`);
  }

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    
    setDataload(data)
    setTimeout(() => {
      setLoading(true)
    }, 1000);
  },[data])



  return (
    <div id={section} className='row card__wrapper'>

      <div className="col-12 col-lg-2 p-2 card__wrapper__left">
        <div className="text-center">
          <Image src={sectionTitle === "Design" ? titleIcons[0] : sectionTitle === "Web" ? titleIcons[1] : titleIcons[2]} alt="icon" width={80} height={80} />
          <h2>{sectionTitle}</h2>
        </div>
      </div>

      <div className="col-12 col-lg-10 p-2 card__wrapper__right">
        <div className="cards__content"
        style={{transform: `rotateX(${pos.y/80}deg) rotateY(${pos.x/80}deg) rotateZ(-2deg)`}}
        >
          {dataLoad.slice(0, limit).map((item: any, id: number) => 
            <div key={id} className={`card`} onClick={() => handleOnDisplay(id)} onMouseLeave={() => handleOnDisplay(-1)} aria-haspopup="true">
              <div className="card__image">
                {!loading ? 
                  <div className="card__loading text-center pt-2">
                    <span className="loader"></span>
                  </div>
                  :
                  <div className={`scrolling__card ${onDisplay === id ? "card__zoom_subject__active" : "card__zoom_subject__none"}`}>
                    <Image 
                      className={`${onDisplay === id && (item.link === "aqua" || item.link === "speedo") ? "scrolling__up__card" : "scrolling__down__card"}`} 
                      src={`${router.basePath}${item.url}`} 
                      alt={item.title} 
                      width={600} 
                      height={600} 
                    />
                  </div>
                }
              </div>
              {loading && 
                <div className="card__after text-center">
                  {item.title !== "#" && 
                    <div className={`card__after__title ${onDisplay === id && "card__after__title__display"}`}>
                      {item.title}
                    </div>
                  }
                  {item.link !== "#" &&
                    <Link className={`card__after__link ${onDisplay === id && item.link !== "aqua" && item.link !== "speedo" && "card__after__link__display"}`} href={item.link} target="_blank" passHref={true}>
                      <span>VISITER</span>
                    </Link>
                  }
                  <div className={`card__after__sub ${onDisplay === id && "card__after__sub__display"}`}>
                    {item.sub.map((su: any, id:number) => 
                      <Image key={id} src={`${router.basePath}${su}`} alt={"media"} width={80} height={80} />
                    )}
                  </div>
                </div>
              }
            </div>
          )}
        </div>

        <div className="row load__more">
          {limit < dataLoad.length && (
            <span onClick={handleLoadMore}>Charger plus</span>
            )}
        </div>
      </div>
    </div>
  )
}
export default Cards