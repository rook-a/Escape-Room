import {
  appSlice,
  currentPage,
  currentFilterType,
  changePopupСondition,
} from './app-slice';
import { GenreFromTheServer, MenuLinkName } from '../../utils/const';

const state = {
  activePage: MenuLinkName.Quests,
  filterType: GenreFromTheServer.All,
  questPopupOpen: false,
};

describe('App slice', () => {
  it('without additional parameters should return initial state', () => {
    expect(appSlice.reducer(void 0, { type: 'UNKNOWN_ACTION' })).toEqual(state);
  });

  it('active page shoude be update correctly', () => {
    expect(appSlice.reducer(state, currentPage(MenuLinkName.Contacts))).toEqual(
      {
        ...state,
        activePage: MenuLinkName.Contacts,
      },
    );
  });

  it('the filter type shoude be update correctly', () => {
    expect(
      appSlice.reducer(state, currentFilterType(GenreFromTheServer.Detective)),
    ).toEqual({
      ...state,
      filterType: GenreFromTheServer.Detective,
    });
  });

  it('condition quest popup shoude be update correctly', () => {
    expect(appSlice.reducer(state, changePopupСondition(true))).toEqual({
      ...state,
      questPopupOpen: true,
    });
  });
});
