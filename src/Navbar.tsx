import Logo from './assets/GreenLogo.png';

interface NavProp {
    companyName:string;
    linkURL?: string;
}

export default function Navbar({ companyName, linkURL }:NavProp) {
    return (
        <div id="navbar">
            <img src={Logo} />
            <h2>{companyName}</h2>
            <ul id='navLinks'>
                <li><a href={linkURL}>Home</a></li>
                <li><a href={linkURL}>News</a></li>
                <li><a href={linkURL}>Learning <br></br>Resources</a></li>
            </ul>
        </div>
    );
}
