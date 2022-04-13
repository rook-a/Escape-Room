import React from 'react';
import * as S from './nav.styled';

const Nav = () => (
  <S.Navigation>
    <S.Links>
      <S.LinkItem>
        <S.Link $isActiveLink to="/">
          Квесты
        </S.Link>
      </S.LinkItem>

      <S.LinkItem>
        <S.Link to="#">Новичкам</S.Link>
      </S.LinkItem>

      <S.LinkItem>
        <S.Link to="#">Отзывы</S.Link>
      </S.LinkItem>

      <S.LinkItem>
        <S.Link to="#">Акции</S.Link>
      </S.LinkItem>

      <S.LinkItem>
        <S.Link to="/contacts">Контакты</S.Link>
      </S.LinkItem>
    </S.Links>
  </S.Navigation>
);

export default Nav;
