import Logo from './assets/GreenLogo.png';
import './nav.css';
import menuIcon from './assets/menuIcon.png';

interface NavProp {
    companyName: string;
    linkURL?: string;
}

export default function Navbar({ companyName, linkURL }: NavProp) {
    return (
        <div id="navbar">
            <div id="trademark">
                <img src={Logo} id="logo" />
                <h2 id="companyName">{companyName}</h2>
            </div>
            <button id="menu">
                <img src={menuIcon} id="menuIcon" alt="leafIcon" />
                <p id="menuText">Menu</p>
            </button>
            <ul id="navLinks">
                <li>
                    <a href={linkURL}>Home</a>
                </li>
                <li>
                    <a href={linkURL}>News</a>
                </li>
                <li>
                    <a href={linkURL}>
                        Learning <br></br>Resources
                    </a>
                </li>
            </ul>
        </div>
    );
}
