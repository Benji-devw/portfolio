import { createRef, useEffect, useState } from 'react';
import fr from '@/pages/api/fr.json';

export const Intro = () => {
    const rootRef = createRef<HTMLDivElement>();
    const [scrolled, setScrolled] = useState(0);
    // const [hieghtElement, setHieghtElement] = useState<number | undefined>(undefined)

    const listenToScroll = () => {
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = document.body.scrollTop || document.documentElement.scrollTop / height;
        setScrolled(scrolled);
    };

    useEffect(() => {
        // console.log(rootRef.current?.clientHeight);
        // setHieghtElement(rootRef.current?.clientHeight)
        window.addEventListener('scroll', listenToScroll);
        return () => window.removeEventListener('scroll', listenToScroll);
    }, []);

    return (
        <div className="Sticky">
            <div className="Sticky_Wrapper">
                <div ref={rootRef} className="Sticky_Container">
                    <div className="Slicky_Section">
                        <div className="sticky_Left">
                            <div className="stickyLeft_Content">
                                {scrolled < 0.35 && (
                                    <div className={`${scrolled > 0.35 ? 'blurIn' : 'blurOut'}`}>
                                        <h3>STACK</h3>
                                    </div>
                                )}
                                {scrolled > 0.35 && (
                                    <div className={`${scrolled < 0.35 ? 'blurIn' : 'blurOut'}`}>
                                        <h3>SKILLS</h3>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="sticky_Right">
                            {scrolled < 0.35 && (
                                <div className={`stickyRight_Content`}>
                                    <h3 className={`sticky_title_mobile ${scrolled > 0.35 ? 'blurIn' : 'blurOut'}`}>STACK</h3>
                                    {fr.stacks.map((stack, index) => (
                                        <p key={index} className={`${scrolled > stack.threshold ? 'show fadeInUp' : 'hide fadeOutDown'}`}>
                                            {stack.text}
                                        </p>
                                    ))}
                                </div>
                            )}

                            {scrolled > 0.35 && (
                                <div className={`stickyRight_Content`}>
                                    <h3 className={`sticky_title_mobile ${scrolled < 0.35 ? 'blurIn' : 'blurOut'}`}>SKILLS</h3>
                                    {fr.skills.map((skill, index) => (
                                        <p key={index} className={`${scrolled > skill.threshold ? 'show fadeInUp' : 'hide fadeOutDown'}`}>
                                            {skill.text}
                                        </p>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
