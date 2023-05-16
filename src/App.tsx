import Navbar from './Navbar';
import './App.css';
import Hero from './Hero';
import { useState } from 'react';
export default function App() {
    const [isActive, setIsActive] = useState(false);

    function toggle() {
        setIsActive((a) => !a);
    }

    return (
        <>
            <Navbar click={toggle} isActive={isActive} companyName="Green Leaf" />
            <Hero />
        </>
    );
}
