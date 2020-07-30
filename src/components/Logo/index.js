import React from 'react';
import LogoImg from '../../assets/img/logo.png';
import './style.css';


const Logo = () => {
    return (
        <div className="logo">
            <a href='/'>
                <img src={ LogoImg } className="logo" alt="Logo Cledimir"/>
            </a>
        </div>
    );
};

export default Logo;