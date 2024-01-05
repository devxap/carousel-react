import React from 'react'
import Carousel from './Carousel';
import { imageData } from './data';

function App() {
  return (
       <Carousel images={imageData} />
  );
}

export default App;
