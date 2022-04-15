import React from 'react';

import DetailedQuest from '../../pages/detailed-quest/detailed-quest';
import Contacts from '../../pages/contacts/contacts';
import Home from '../../pages/home/home';
import NotFound from '../../pages/not-found/not-found';

import { Routes, Route } from '../common/common';
import { appTheme } from './common';
import { AppRoute } from '../../utils/const';

import { ThemeProvider } from 'styled-components';
import * as S from './app.styled';

const App = () => (
  <ThemeProvider theme={appTheme}>
    <S.GlobalStyle />
    <Routes>
      <Route index element={<Home />} />
      <Route path={`${AppRoute.Quest}/:id`} element={<DetailedQuest />} />
      <Route path={AppRoute.Contacts} element={<Contacts />} />
      <Route path={AppRoute.NotFound} element={<NotFound />} />
    </Routes>
  </ThemeProvider>
);

export default App;
