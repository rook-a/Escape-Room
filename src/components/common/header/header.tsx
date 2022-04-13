import React from 'react';
import Logo from './components/logo/logo';
import Nav from './components/nav/nav';
import * as S from './header.styled';

const Header = () => (
  <S.StyledHeader>
    <S.HeaderWrapper>
      <Logo />

      <Nav />

      <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
    </S.HeaderWrapper>
  </S.StyledHeader>
);

export default Header;
