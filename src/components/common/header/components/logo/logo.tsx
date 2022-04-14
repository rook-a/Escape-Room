import React from 'react';
import logo from '../../../../../assets/img/logo.svg';
import * as S from '../../components/logo/logo.styled';

const Logo = () => (
  <S.LogoLink to="/">
    <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
  </S.LogoLink>
);

export default Logo;
