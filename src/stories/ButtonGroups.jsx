import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';
import './button.css';

export const ButtonGroups = ({ onLeftButtonAction, onRightButtonAction }) => {
  return (
    <div className='button-groups'>
      <Button label="Left Button" size="large" onClick={onLeftButtonAction}></Button>
      <Button primary label="Right Button" size="small" onClick={onRightButtonAction}></Button>
    </div>
  );
};

ButtonGroups.propTypes = {
  onLeftButtonAction: PropTypes.func.isRequired,
  onRightButtonAction: PropTypes.func.isRequired,
};

ButtonGroups.defaultProps = {

};