import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes, Route, BrowserRouter } from '../common/common';
import DetailedQuest from '../detailed-quest/detailed-quest';
import Contacts from '../contacts/contacts';
import Home from '../home/home';
import { appTheme } from './common';
import * as S from './app.styled';

const App = () => (
  <ThemeProvider theme={appTheme}>
    <S.GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quest" element={<DetailedQuest />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<h1> not found </h1>} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
