import React from 'react';
import PropTypes from 'prop-types';

const ErrorComp = (errorData:any) => (
  <div className="error-comp">
    <p>ERROR PLACEHOLDER</p>
  </div>
);

ErrorComp.propTypes = {
    errorData: PropTypes.element.isRequired
}

export default ErrorComp;