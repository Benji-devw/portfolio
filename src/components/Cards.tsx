import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { ICardProps, CardItem } from '@/types/types';
import { Button } from '@/components/button/button';

const Cards: React.FC<ICardProps> = ({ data, sectionTitle, section }) => {
    const router = useRouter();
    // const test = React.createRef<HTMLDivElement>();
    const [dataLoad, setDataload] = useState<CardItem[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [limit, setLimit] = useState<number>(6);
    const [onDisplay, setOnDisplay] = useState<number>(-1);

    const handleOnDisplay = (id: number) => setOnDisplay(id);
    const handleLoadMore = () => setLimit((prevLimit) => prevLimit + 6);

    // const titleIcons = [`${router.basePath}/media/icons/icon_Design.svg`, `${router.basePath}/media/icons/icon_Web.svg`, `${router.basePath}/media/icons/icons_infographie.svg`];

    const cardsRef = useRef<HTMLDivElement>(null);
    const [cardPosition, setCardPosition] = useState({ x: 0, y: 0, width: 0, height: 0, id: 0 });
    const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>, id: number) => {
        if (cardsRef.current) {
            const cardRect = event.currentTarget.getBoundingClientRect();
            const containerRect = cardsRef.current.getBoundingClientRect();
            const position = {
                id: id,
                x: cardRect.left - containerRect.left + cardsRef.current.scrollLeft,
                y: cardRect.top - containerRect.top + cardsRef.current.scrollTop,
                width: cardRect.width,
                height: cardRect.height,
            };
            setCardPosition(position);
            // console.log(`Hovered card ID: ${id}`);
        }
    };

    useEffect(() => {
        setDataload(data);
        setTimeout(() => {
            setLoading(true);
        }, 1000);
    }, [data]);

    return (
        <div id={section} className="row card__wrapper">
            <div className="w-full p-2 card__wrapper__right">
                <div className="flex justify-center card__wrapper__right__title">
                    <h3 className={`${onDisplay !== -1 ? 'card__blur' : ''}`}> {sectionTitle}</h3>
                </div>
                <div
                    className="card__focus"
                    style={{
                        transform: `translate(${cardPosition.x}px, ${cardPosition.y}px) scale(${onDisplay === cardPosition.id ? '1.5' : '1'})`,
                        width: `${cardPosition.width}px`,
                        height: `${cardPosition.height}px`,
                    }}
                ></div>
                <div ref={cardsRef} className="cards">
                    {dataLoad.slice(0, limit).map((item: CardItem, id: number) => (
                        <div
                            key={id}
                            className={`card ${onDisplay !== id && onDisplay !== -1 ? 'card__blur' : ''}`}
                            onClick={() => handleOnDisplay(id)}
                            onMouseEnter={(event) => handleMouseEnter(event, id)}
                            onMouseLeave={() => handleOnDisplay(-1)}
                            aria-haspopup="true"
                            style={{
                                zIndex: onDisplay === id ? '11' : '10',
                                transform: onDisplay === id ? 'scale(1.5)' : 'scale(1)',
                            }}
                        >
                            <div className="card__image">
                                {!loading ? (
                                    <div className="card__loading text-center pt-2">
                                        <div className="preview_one"></div>
                                        <div className="preview_two"></div>
                                    </div>
                                ) : (
                                    <div className={`scrolling__card`}>
                                        <Image
                                            className={`${onDisplay === id && (item.link === 'aqua' || item.link === 'speedo') ? 'scrolling__up__card' : 'scrolling__down__card'}`}
                                            src={`${router.basePath}${item.url}`}
                                            alt={item.title}
                                            width={800}
                                            height={800}
                                            quality={100}
                                            // layout="responsive"
                                        />
                                    </div>
                                )}
                            </div>
                            {loading && (
                                <div className="card__after text-center">
                                    {item.title !== '#' && (
                                        <div className={`card__after__title card__left__title ${onDisplay === id && 'card__after__title__display'}`}>
                                            <p>{item.title}</p>
                                            {item.github && (
                                                <Link href={item.github} target="_blank" passHref={true}>
                                                    <Image key={id} src={'/media/Github_Icon.svg'} alt={'git'} width={16} height={16} style={{ marginLeft: `5px` }} />
                                                </Link>
                                            )}
                                        </div>
                                    )}
                                    {item.link !== '#' && (
                                        <Link
                                            className={`card__after__link ${onDisplay === id && item.link !== 'aqua' && item.link !== 'speedo' && 'card__after__link__display'}`}
                                            href={item.link}
                                            target="_blank"
                                            passHref={true}
                                        >
                                            <code>VISITER</code>
                                        </Link>
                                    )}
                                    <div className={`card__after__sub ${onDisplay === id && 'card__after__sub__display'}`}>
                                        {item.sub.map((su: string, id: number) => (
                                            <Image
                                                key={id}
                                                src={`${router.basePath}${su}`}
                                                alt={'media'}
                                                width={80}
                                                height={80}
                                                // style={{transform: `scale(.9)`}}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <Button onDisplay={onDisplay}>{limit < dataLoad.length && <span onClick={handleLoadMore}>Charger plus</span>}</Button>
            </div>
        </div>
    );
};
export default Cards;
