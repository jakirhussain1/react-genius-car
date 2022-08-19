import React from 'react';

const Footer = () => {
    const data = new Date();
    const year = data.getFullYear();
    return (
        <div>
            <p className='text-center bg-secondary h-50 p-5 text-info mt-5'>Copyright @ {year}</p>
        </div>
    );
};

export default Footer;