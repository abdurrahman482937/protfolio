import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react'

export default function Navbar({ navOpen }) {
    const lastActiveLink = useRef();
    const activeBox = useRef();

    const initActiveBox = () => {
        console.log(lastActiveLink.current);
    }

    useEffect(initActiveBox, []);

    const navItems = [
        {
            label: 'Home',
            link: '#home',
            className: 'nav-link active',
            ref: lastActiveLink
        },
        {
            label: 'About',
            link: '#about',
            className: 'nav-link'
        },
        {
            label: 'Work',
            link: '#work',
            className: 'nav-link'
        },
        {
            label: 'Reviews',
            link: '#reviews',
            className: 'nav-link'
        },
        {
            label: 'Contact',
            link: '#contact',
            className: 'nav-link md:hidden'
        }
    ];

    return (
        <nav className={"navbar " + (navOpen ? 'active' : '')}>
            {
                navItems.map(({ label, link, className, ref }, index) => (
                    <a
                        key={index}
                        href={link}
                        className={className}
                        ref={ref}
                        onClick={null}
                    >
                        {label}
                    </a>
                ))
            }
            <div className="active-box" ref={activeBox}></div>
        </nav>
    )
}

Navbar.propTypes = {
    navOpen: PropTypes.bool.isRequired
};
