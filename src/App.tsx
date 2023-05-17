import Navbar from './Navbar';
import './App.css';
import Hero from './Hero';
import Footer from './Footer';
import { useState } from 'react';

export default function App() {
    const [isActive, setIsActive] = useState(false);

    function toggle() {
        setIsActive((a) => !a);
    }

    return (
        <>
            <Navbar
                click={toggle}
                isActive={isActive}
                companyName="Green Leaf"
                linkURL="https://www.figma.com/file/tnvRRnPtETl7Gx4d6N7Emu/Untitled?type=design&node-id=53%3A172&t=tZDKf4NpQr98HQiB-1"
            />
            <Hero />
            <Footer hide={isActive} />
        </>
    );
}
