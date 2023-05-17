import Logo from './assets/GreenLogo.png';
import './nav.css';

interface NavProp {
    companyName: string;
    isActive?: boolean;
    linkURL?: string;
    click?(): void;
}

export default function Navbar({
    companyName,
    linkURL,
    click,
    isActive,
}: NavProp) {
    const toggleClass = !isActive ? 'hamburger' : 'hamburger is-active';
    return (
        <>
            <div id="navbar">
                <div id="trademark">
                    <img src={Logo} id="logo" />
                    <h2 id="companyName">{companyName}</h2>
                </div>
                <button onClick={click} className={toggleClass}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </button>
                <ul id="navLinks">
                    <li>
                        <a href={linkURL} target='_blank'>Home</a>
                    </li>
                    <li>
                        <a href={linkURL} target='_blank'>News</a>
                    </li>
                    <li>
                        <a href={linkURL} target='_blank'>
                            Learning Resources
                        </a>
                    </li>
                </ul>
            </div>
            <div id="mobile-nav" className={isActive ? "is-active" : undefined}>
                <ul id="mobile-navLinks">
                    <li>
                        <a href={linkURL} target='_blank'>Home</a>
                    </li>
                    <li>
                        <a href={linkURL} target='_blank'>News</a>
                    </li>
                    <li>
                        <a href={linkURL} target='_blank'>
                            Learning <br></br>Resources
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}
