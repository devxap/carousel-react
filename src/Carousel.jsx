import React, { useState } from 'react';
import './index.css';
 
const Carousel = () => {

  const [items, setItems] = useState([
    {
      title: "River Valley",
      description:
        "Photo of stream during day time",
      url : "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Mountain Hill",
      description:
        "Silhouette of Mountain Hill With Pine Trees Under White Cloud Blue Sky",
      url : "https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Wooden House",
      description:
        "Brown Wooden House on Edge of Cliff",
      url : "https://images.pexels.com/photos/1028225/pexels-photo-1028225.jpeg",
    },
  ]);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleLeftArrowClick = () => {
    const updatedIndex = activeIndex - 1 < 0 ? items.length - 1 : activeIndex - 1;
    const leftItem = items[updatedIndex];
    setActiveIndex(updatedIndex);
  };

  const handleRightArrowClick = () => {
    const updatedIndex = activeIndex + 1 >= items.length ? 0 : activeIndex + 1;
    const rightItem = items[updatedIndex];

    setActiveIndex(updatedIndex);
  };

  const leftArrow = '<';
  const rightArrow = '>';

  return (
    <div className='carousel'>
    
      {items.map((item,index)=>(
        index===activeIndex && (
            <img className='carousel-image' key={index} src={item.url}></img> 
        )
      ))}

     <div className='btnContainer'>
      <button onClick={handleLeftArrowClick}> {leftArrow} </button>
      <button onClick={handleRightArrowClick}>{rightArrow}</button>
     </div>

    </div>
  );
};
 
 
export default Carousel;