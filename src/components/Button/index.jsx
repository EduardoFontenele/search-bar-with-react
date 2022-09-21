import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyled } from './style';

export default function Button({ text, onClick }) {
  return (
    <ButtonStyled type="button" onClick={onClick}>
      {text}
    </ButtonStyled>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
