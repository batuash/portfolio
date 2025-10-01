import React from 'react';
import heavenHRLogo from '../assets/heaven_hr2_logo.png';

interface HeavenHRLogoIconProps {
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
}

const HeavenHRLogoIcon: React.FC<HeavenHRLogoIconProps> = ({ 
  width = "100%", 
  height = "100%", 
  style = {}
}) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 24 24" 
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <image 
        href={heavenHRLogo} 
        width={width} 
        height={height} 
        preserveAspectRatio="xMidYMid meet"
      />
    </svg>
  );
};

export default HeavenHRLogoIcon;
