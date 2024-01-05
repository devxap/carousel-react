import React, { useState } from 'react';
import './carousel.css';

const Carousel = ({images}) => {

  const [activeIndex, setActiveIndex] = useState(0);

  const handleLeftArrowClick = () => {
    const updatedIndex = activeIndex - 1 < 0 ? images.pics.length - 1 : activeIndex - 1;
    setActiveIndex(updatedIndex);
  };

  const handleRightArrowClick = () => {
    const updatedIndex = activeIndex + 1 >= images.pics.length ? 0 : activeIndex + 1;

    setActiveIndex(updatedIndex);
  };

  const leftArrow = '<';
  const rightArrow = '>';

  return (
      <div className='carousel'>
    
    {images.pics.map((item,index)=>(
      index===activeIndex && (
          <div className='fill'>
            <img key={index} src={item} alt=""></img> 
          </div>
      )
    ))}

   <div className='btnContainer'>
    <button onClick={handleLeftArrowClick}> {leftArrow} </button>
    <button onClick={handleRightArrowClick}>{rightArrow}</button>
   </div>
   <div className='indicators'>
    {images.pics.map((item,index)=>{
      return(
        <>
        <div className={index===activeIndex ? "activeindicator" : "indicator"}></div>
        </>
      )
    })}
   </div>

  </div>
  );
};
 
 
export default Carousel;