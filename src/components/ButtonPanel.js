import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = props => {
  const { clickHandler } = props;

  return (
    <div className="btn-panel">
      <div className="btn-group">
        <Button name="AC" onClick={clickHandler} />
        <Button name="+/-" onClick={clickHandler} />
        <Button name="%" onClick={clickHandler} />
        <Button name="÷" onClick={clickHandler} />
      </div>
      <div className="btn-group">
        <Button name="7" onClick={clickHandler} />
        <Button name="8" onClick={clickHandler} />
        <Button name="9" onClick={clickHandler} />
        <Button name="x" onClick={clickHandler} />
      </div>
      <div className="btn-group">
        <Button name="4" onClick={clickHandler} />
        <Button name="5" onClick={clickHandler} />
        <Button name="6" onClick={clickHandler} />
        <Button name="-" onClick={clickHandler} />
      </div>
      <div className="btn-group">
        <Button name="1" onClick={clickHandler} />
        <Button name="2" onClick={clickHandler} />
        <Button name="3" onClick={clickHandler} />
        <Button name="+" onClick={clickHandler} />
      </div>
      <div className="btn-group">
        <Button name="0" wide bottomLeftRadius onClick={clickHandler} />
        <Button name="." onClick={clickHandler} />
        <Button name="=" bottomRightRadius onClick={clickHandler} />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = { clickHandler: PropTypes.func.isRequired };

export default ButtonPanel;
