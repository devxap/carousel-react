import React from 'react';
import Carousel from './Carousel';
import './index.css';

const PersonTitle ="CAROUSEL";
const Person = () => {
    return (
        <div className='PersonContainer'>
            <div><Carousel/></div>
            <div className='PersonDetails'>
                <div className='PersonTitle'>{PersonTitle}</div>
            </div>
        </div>
    );
}
  
export default Person;