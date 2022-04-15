import { createSlice } from '@reduxjs/toolkit';
import { State } from '../../types/state';
import { NameSpace, GenreType, MenuLinkName } from '../../utils/const';

interface InitialState {
  activePage: string;
  filterType: string;
  questPopupOpen: boolean;
}

const initialState: InitialState = {
  activePage: MenuLinkName.Quests,
  filterType: GenreType.All,
  questPopupOpen: false,
};

export const appSlice = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    currentPage: (state, action) => {
      state.activePage = action.payload;
    },
    currentFilterType: (state, action) => {
      state.filterType = action.payload;
    },
    changePopupСondition: (state, action) => {
      state.questPopupOpen = action.payload;
    },
  },
});

export const { currentPage, currentFilterType, changePopupСondition } =
  appSlice.actions;

const selectAppState = (state: State) => state[NameSpace.App];

export const selectFilterType = (state: State) =>
  selectAppState(state).filterType;
export const selectCurrentPage = (state: State) =>
  selectAppState(state).activePage;
export const selectChangePopupСondition = (state: State) =>
  selectAppState(state).questPopupOpen;
