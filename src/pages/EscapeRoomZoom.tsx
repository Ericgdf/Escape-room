import React from 'react';
import ZoomableImage from '../components/ZoomableImageProps ';

import card1 from '../assets/img/card1.png';

const EscapeRoomZoom = () => {
  return (
    <div className="main_background">
      <ZoomableImage src={card1} width={300} height={400} zoomBubbleSize={100} zoom={4} />
    </div>
  );
};

export default EscapeRoomZoom;
