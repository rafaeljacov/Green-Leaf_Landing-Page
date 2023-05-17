import './footer.css';
import leafIcon from './assets/favicon.png';
import ghIcon from './assets/github.svg';
import fbLogo from './assets/facebook.svg';
import ytLogo from './assets/youtube.svg';

interface FooterProp {
    hide?: boolean;
}
export default function Footer({ hide }: FooterProp) {
    return (
        <div id="footer" className={hide ? 'hide' : undefined}>
            <img className="leaf-icon" src={leafIcon} alt="Leaf Icon" />
            <div className="icons">
                <a
                    target="_blank"
                    href="https://github.com/rafaeljacov/Green-Leaf_Landing-Page"
                >
                    <img src={ghIcon} alt="github icon" />
                </a>
                <a
                    target="_blank"
                    href="https://www.facebook.com/GianFransAraneta?mibextid=ZbWKwL"
                >
                    <img src={fbLogo} alt="facebook icon" />
                </a>
                <a
                    target="_blank"
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                >
                    <img src={ytLogo} alt="youtube icon" />
                </a>
            </div>
            <ul className="footer-links">
                <li>Info</li>
                <li>Support</li>
                <li>Mission</li>
                <br />
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
            </ul>
            <p className="copyright">&copy; 2023 Green Leaf</p>
        </div>
    );
}
