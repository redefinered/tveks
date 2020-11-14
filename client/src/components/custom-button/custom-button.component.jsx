import React from 'react';
import PropTypes from 'prop-types';

import './custom-buttom.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
  <button
    className={`${inverted ? 'inverted' : ''} ${
      isGoogleSignIn ? 'google-sign-in' : ''
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

CustomButton.propTypes = {
  children: PropTypes.any,
  isGoogleSignIn: PropTypes.bool,
  inverted: PropTypes.bool
};

export default CustomButton;
