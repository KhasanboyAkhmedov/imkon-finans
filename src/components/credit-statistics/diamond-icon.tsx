// import React from 'react';
// import type { IconType } from 'react-icons';
// import './dynamic-icon.css';

// interface DiamondIconProps {
//   Icon: IconType;
//   size?: number;
//   color?: string;
// }

// const DiamondIcon: React.FC<DiamondIconProps> = ({ 
//   Icon, 
//   size = 28, 
//   color = '#FF3E41' 
// }) => {
//   return (
//     <div className="diamond-container">
//       {/* The background diamond shape */}
//       <div className="diamond-shape">
//         {/* The corner dots visible in your image */}
//         <span className="dot top" />
//         <span className="dot right" />
//         <span className="dot bottom" />
//         <span className="dot left" />
//       </div>
      
//       {/* The actual dynamic icon */}
//       <div className="diamond-icon-wrapper">
//         <Icon size={size} color={color} />
//       </div>
//     </div>
//   );
// };

// export default DiamondIcon;

import React from 'react';
import { DynamicIcon, type IconType } from '../../commons/dynamic-icon';
import './diamond-icon.css';

interface DiamondIconProps {
  lib: IconType['lib'];
  name: string;
}

const DiamondIcon: React.FC<DiamondIconProps> = ({ 
  lib, 
  name,
}) => {
  return (
    <div className="diamond-container">
      <div className="diamond-shape">
        <span className="dot top" />
        <span className="dot right" />
        <span className="dot bottom" />
        <span className="dot left" />
      </div>
      
      <div className="diamond-icon-wrapper">
        <DynamicIcon lib={lib} name={name} className="diamond-icon" />
      </div>
    </div>
  );
};

export default DiamondIcon;