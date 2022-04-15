import React from 'react';
import LinkItems from './components/link-item/link-items';
import * as S from './nav.styled';

const Nav = () => (
  <S.Navigation>
    <S.Links>
      <LinkItems />
    </S.Links>
  </S.Navigation>
);

export default Nav;
