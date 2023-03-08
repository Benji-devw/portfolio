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
  const [dataLoad, setDataload] = useState<object[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>(6);
  const [onDisplay, setOnDisplay] = useState<number>(-1);

  const handleOnDisplay = (id: number) => setOnDisplay(id);
  const handleLoadMore = () => setLimit((prevLimit) => prevLimit + 6);

  const titleIcons = [
    `${router.basePath}/media/icons/icon_Design.svg`,
    `${router.basePath}/media/icons/icon_Web.svg`,
    `${router.basePath}/media/icons/icons_infographie.svg`
  ];

  useEffect(() => {
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
        <div className="cards">
          {dataLoad.slice(0, limit).map((item: any, id: number) => 
            <div 
              key={id} 
              className={`card ${onDisplay !== id && onDisplay !== -1 ? "card__blur" : ""}`}
              onClick={() => handleOnDisplay(id)} 
              onMouseLeave={() => handleOnDisplay(-1)} aria-haspopup="true"
              style={{
                zIndex: onDisplay === id ? "11" : "10",
                transform: onDisplay === id ? "scale(1.1)" : "scale(1)",
                backgroundSize: onDisplay === id ? "102% 102%" : "90% 90%"
              }}
            >
              <div className="card__image">
                {!loading ? 
                  <div className="card__loading text-center pt-2">
                    <div className="preview_one"></div>
                    <div className="preview_two"></div>
                  </div>
                  :
                  <div className={`scrolling__card`}>
                    <Image 
                      className={`${onDisplay === id && (item.link === "aqua" || item.link === "speedo") ? "scrolling__up__card" : "scrolling__down__card"}`} 
                      src={`${router.basePath}${item.url}`} 
                      alt={item.title} 
                      width={600} 
                      height={600} 
                      // layout="responsive"
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
                      <code>VISITER</code>
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