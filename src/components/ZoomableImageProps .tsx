import React, { useState } from 'react';
import './ZoomableImage.css'; // Fichier CSS pour les styles personnalisés du composant

interface ZoomableImageProps {
  src: string;
  width: number;
  height: number;
  zoomBubbleSize?: number;
  zoom: number;
  filter: string;
}

const ZoomableImage: React.FC<ZoomableImageProps> = ({
  src,
  width,
  height,
  zoom =2,
  zoomBubbleSize = 30,
  filter = "invert(75%)"
}) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const mouseX = e.nativeEvent.offsetX;
    const mouseY = e.nativeEvent.offsetY;

    setIsZoomed(true);
    setMousePosition({ x: mouseX, y: mouseY });

  };
  

  return (
    <div
      className="zoomable-image-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <img
        src={src}
        alt="Objet zoomable"
        width={width}
        height={height}
        style={{
          zIndex: 2
        }}
      />
      {isZoomed && (
        <div
          className="zoomable-image-magnifier"
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize : `${width * zoom}px ${height * zoom}px`,
            top: mousePosition.y - zoomBubbleSize / 2,
            left: mousePosition.x - zoomBubbleSize / 2,
            width: `${zoomBubbleSize}px`,
            height: `${zoomBubbleSize}px`,
            backgroundPosition: `-${mousePosition.x *zoom }px -${mousePosition.y *zoom}px`,
            filter: `${filter}`,
            
          }}
        />
      )}
    </div>
  );
};

export default ZoomableImage;
