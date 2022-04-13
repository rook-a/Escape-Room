import React from 'react';

import { genres } from 'src/components/utils/conts';

import * as S from './tabs.styled';

const Tabs = () => (
  <S.Tabs>
    {genres.map(({ title, icon }) => {
      const Icon = icon;

      return (
        <S.TabItem>
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
