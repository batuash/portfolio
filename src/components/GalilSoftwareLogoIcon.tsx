import React from 'react';
import galilSoftwareLogo from '../assets/galilsoftwareLogo.png';

interface GalilSoftwareLogoIconProps {
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
}

const GalilSoftwareLogoIcon: React.FC<GalilSoftwareLogoIconProps> = ({ 
  width = "100%", 
  height = "100%", 
  style = {}
}) => {
  return (
    <div style={{ backgroundColor: 'lightgray', borderRadius: '100%', overflow: 'hidden' }}>
      <svg 
        width={width} 
        height={height} 
        viewBox="0 0 24 24" 
        style={style}
        xmlns="http://www.w3.org/2000/svg"
      >
        <image 
          href={galilSoftwareLogo} 
          width="100%" 
          height="100%" 
          preserveAspectRatio="xMidYMid meet"
        />
      </svg>
    </div>
  );
};

export default GalilSoftwareLogoIcon;
