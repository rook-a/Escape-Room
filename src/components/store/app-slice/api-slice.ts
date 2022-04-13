import { createSlice } from '@reduxjs/toolkit';
import { State } from '../../types/state';
import { NameSpace, Genre } from '../../utils/const';

interface InitialState {
  filterType: string;
}

const initialState: InitialState = {
  filterType: Genre.All,
};

export const appSlice = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    currentFilterType: (state, action) => {
      state.filterType = action.payload;
    },
  },
});

export const { currentFilterType } = appSlice.actions;

const selectAppState = (state: State) => state[NameSpace.App];

export const selectFilterType = (state: State) =>
  selectAppState(state).filterType;
