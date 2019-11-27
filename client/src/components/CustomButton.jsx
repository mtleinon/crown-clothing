import React from 'react';
// import './CustomButton.scss';

import { CustomButtonContainer } from './CustomButton.styles';

const CustomButton = ({ children, ...props }) => {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
};

// export default CustomButton;
export default React.memo(CustomButton);
