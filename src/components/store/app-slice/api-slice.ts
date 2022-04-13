import { createSlice } from '@reduxjs/toolkit';
import { State } from '../../types/state';
import { NameSpace, GenreType } from '../../utils/const';

interface InitialState {
  filterType: string;
}

const initialState: InitialState = {
  filterType: GenreType.All,
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
