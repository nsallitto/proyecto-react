import React from 'react';
import "./element.css";

const Element = ({ src, alt }) => {
    return (
        <div className='element'>
            <img src={src} alt={alt}/>
            <div>
                <h1>titulo</h1>
                <p>probando card</p>
            </div>
        </div>
    );
};

export default Element;

