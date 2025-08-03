import { useState } from 'react';
import logo from '../assets/logo.svg';
import Navbar from './Navbar';

export default function Header() {
    const [navOpen, setNavOpen] = useState(false);
    return (
        <div className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
            <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr_3fr_1fr]">
                <h1>
                    <a href="/" className="logo">
                        <img src={logo} alt="logo" width={40} height={40} />
                    </a>
                </h1>

                <div className='relative md:justify-self-center'>
                    <div className="md:hidden">
                        <button onClick={() => setNavOpen((prev) => !prev)} className='menu-btn'>
                            <span className="material-symbols-rounded">
                                {navOpen ? 'close' : 'menu'}
                            </span> 
                        </button>
                    </div>
                    <Navbar navOpen={navOpen} />
                </div>

                <a href="#contact" className='btn btn-secondary max-md:hidden md:justify-self-end'>Contact Me</a>
            </div>
        </div>
    )
}
