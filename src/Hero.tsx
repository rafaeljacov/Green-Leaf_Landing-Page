import './Hero.css';
import arrowRight from './assets/arrow-right.svg';
import arrowRightHover from './assets/arrow-right-hover.svg';
import { useState, useEffect } from 'react';
import content from './content';

export default function Hero() {
    const [buttonHover, setButtonHover] = useState(false);
    const [heroContent, setHeroContent] = useState(content[0]);
    const buttonArrowSrc = (): string => {
        if (window.innerWidth < 768) {
            return arrowRight;
        } else {
            return buttonHover ? arrowRightHover : arrowRight;
        }
    };

    useEffect(() => {
        let i = 1;
        setInterval(() => {
            if (i === content.length) {
                i = 0;
            }
            setHeroContent(content[i]);
            i++;
        }, 9000);
    }, []);

    function hover() {
        setButtonHover((h) => !h);
    }

    function hoverOut() {
        setButtonHover((h) => !h);
    }

    function buttonClick() {
        open(
            'https://www.figma.com/file/tnvRRnPtETl7Gx4d6N7Emu/Untitled?type=design&node-id=53%3A172&t=tZDKf4NpQr98HQiB-1'
        );
    }

    return (
        <div id="Hero">
            <div id="content">
                <h1>
                    Welcome to <span id="green">Green </span>
                    <span id="leaf">Leaf,</span>
                </h1>
                <p>{heroContent}</p>
            </div>
            <button
                onClick={buttonClick}
                onMouseOver={hover}
                onMouseOut={hoverOut}
                className={buttonHover ? 'hovered' : undefined}
            >
                <span>Volunteer</span>{' '}
                <img src={buttonArrowSrc()} alt="arrow-right" />
            </button>
        </div>
    );
}
