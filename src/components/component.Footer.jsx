import React from 'react';
import coffee from '/coffee.svg';

const Footer = () => {
    return (
        <footer>
            <span>made on</span>
            <img src={coffee} alt='coffee mug' />
        </footer>
    );
};

export default Footer;
