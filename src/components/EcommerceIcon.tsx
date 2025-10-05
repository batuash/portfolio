import React from 'react';

interface EcommerceIconProps {
  width?: string | number;
  height?: string | number;
  fill?: string;
  style?: React.CSSProperties;
}

const EcommerceIcon: React.FC<EcommerceIconProps> = ({ 
  width = 24, 
  height = 24, 
  fill = 'currentColor',
  style = {}
}) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 24 24" 
      fill={fill}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
    </svg>
  );
};

export default EcommerceIcon;
