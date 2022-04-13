import React from 'react';

import { genres } from 'src/components/utils/const';

import * as S from './tabs.styled';

const Tabs = () => (
  <S.Tabs>
    {genres.map(({ id, title, icon }) => {
      const Icon = icon;

      return (
        <S.TabItem key={id}>
          <S.TabBtn isActive>
            <Icon />
            <S.TabTitle>{title}</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>
      );
    })}
  </S.Tabs>
);

export default Tabs;
