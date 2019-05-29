import React from 'react';
import Tilt from 'react-tilt';
import sherlock from './sherlock.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0 center'>
            <Tilt className="Tilt" options={{ max : 50 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3 grow"> <img style={{paddingTop: '5px'}} src={sherlock} alt="logo"/> </div>
            </Tilt>
            
        </div>
    );
}

export default Logo;