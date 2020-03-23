import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const {
    name, color, wide, bottomLeftRadius, bottomRightRadius, onClick,
  } = props;

  const styles = {
    flexBasis: wide ? '50%' : '25%',
    backgroundColor: color,
    borderBottomRightRadius: bottomRightRadius ? 12 : 0,
    borderBottomLeftRadius: bottomLeftRadius ? 12 : 0,
  };


  const handleClick = () => {
    onClick(name);
  };

  return (
    <div className="btn" style={styles} onClick={handleClick}>
      {name}
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  bottomLeftRadius: PropTypes.bool,
  bottomRightRadius: PropTypes.bool,
};

Button.defaultProps = {
  color: '#FB8B24',
  wide: false,
  bottomLeftRadius: false,
  bottomRightRadius: false,
};

export default Button;
