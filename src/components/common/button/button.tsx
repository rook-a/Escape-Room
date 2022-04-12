import React from 'react';
import * as S from './button.styled';

interface IButton {
  type?: 'button' | 'submit' | 'reset' | undefined;
  children: string;
  onClick?: () => void;
}

const Button = ({ children, ...props }: IButton) => (
  <S.Button {...props}>{children}</S.Button>
);

export default Button;
