import React from 'react';
import logo from "../../../public/assets/logo.png"

const Logo = () => {
    return (
        <div>
            <img loading='lazy' className='pointer-events-none max-w-5xl w-12 h-12 sm:w-20 sm:h-20' src={logo} alt="Casineuve Actions" />
        </div>
    );
};

export default Logo;
