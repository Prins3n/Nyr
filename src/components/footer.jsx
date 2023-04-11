import React from 'react';

import panel from './bilder/nyrpaneldone.png';

export const Footer = () => {
    return (
        <div className='relative'>
            <img src={panel} alt='panel' className="absolute w-full h-full" />
            <div className="absolute inset-0 bg-transparent"></div>
        </div>
    )
}