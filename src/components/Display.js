import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { result } = props;
  return (
    <div>
      {result}
    </div>
  );
};

Display.propTypes = { result: PropTypes.number.isRequired };

export default Display;
