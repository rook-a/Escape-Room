import MockAdapter from 'axios-mock-adapter';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action } from '@reduxjs/toolkit';
import thunk, { ThunkDispatch } from 'redux-thunk';

import {
  questsSlice,
  changeOrderStatus,
  fetchQuestsAction,
  fetchQuestAction,
  sendOrder,
} from './quests-slice';
import { createAPI } from 'src/services/api';

import { State } from 'src/types/state';
import { APIRoute, FetchStatus } from 'src/utils/const';
import { mockOrder, mockQuest } from 'src/utils/mock';

const mockQuests = Array.from({ length: 6 }, () => mockQuest);
const api = createAPI();
const mockAPI = new MockAdapter(api);
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<State, typeof api, Action>
>(middlewares);
const store = mockStore();

const state = {
  quests: [],
  questsStatus: FetchStatus.Idle,
  questsError: false,

  quest: null,
  questStatus: FetchStatus.Idle,
  questError: false,

  sendOrderStatus: FetchStatus.Idle,
};

describe('Quests slice', () => {
  it('without additional parameters should return initial state', () => {
    expect(questsSlice.reducer(void 0, { type: 'UNKNOWN_ACTION' })).toEqual(
      state,
    );
  });

  describe('quests async action', () => {
    it('should dispatch fetch quests when GET /quests', async () => {
      mockAPI.onGet(`${APIRoute.Quests}`).reply(200, mockQuests);

      await store.dispatch(fetchQuestsAction());

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toContain(fetchQuestsAction.pending.type);
      expect(actions).toContain(fetchQuestsAction.fulfilled.type);
      expect(actions).not.toContain(fetchQuestsAction.rejected.type);
    });

    it('should dispatch fetch quest when GET /quests/id', async () => {
      mockAPI.onGet(`${APIRoute.Quests}/${1}`).reply(200, mockQuest);

      await store.dispatch(fetchQuestAction(1));

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toContain(fetchQuestAction.pending.type);
      expect(actions).toContain(fetchQuestAction.fulfilled.type);
      expect(actions).not.toContain(fetchQuestAction.rejected.type);
    });

    it('should dispatch send order when POST /orders', async () => {
      mockAPI.onPost(`${APIRoute.Orders}`).reply(201);

      await store.dispatch(sendOrder(mockOrder));

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toContain(sendOrder.pending.type);
      expect(actions).toContain(sendOrder.fulfilled.type);
      expect(actions).not.toContain(sendOrder.rejected.type);
    });
  });

  describe('fetch quests', () => {
    it('should be update fetch quests state, status to pending', () => {
      const action = {
        type: fetchQuestsAction.pending.type,
      };

      expect(questsSlice.reducer(state, action)).toEqual({
        ...state,
        questsStatus: FetchStatus.Pending,
      });
    });

    it('should be update fetch quests state, status to fulfilled', () => {
      const action = {
        type: fetchQuestsAction.fulfilled.type,
        payload: {
          mockQuests,
        },
      };

      expect(questsSlice.reducer(state, action)).toEqual({
        ...state,
        quests: action.payload,
        questsStatus: FetchStatus.Success,
      });
    });

    it('should be update fetch quests state, status, error to rejected', () => {
      const action = {
        type: fetchQuestsAction.rejected.type,
      };

      expect(questsSlice.reducer(state, action)).toEqual({
        ...state,
        questsStatus: FetchStatus.Failed,
        questsError: true,
      });
    });
  });

  describe('fetch quest', () => {
    it('should be update quest state, status to pending', () => {
      const action = {
        type: fetchQuestAction.pending.type,
      };

      expect(questsSlice.reducer(state, action)).toEqual({
        ...state,
        questStatus: FetchStatus.Pending,
      });
    });

    it('should be update quest state, status to fulfilled', () => {
      const action = {
        type: fetchQuestAction.fulfilled.type,
        payload: {
          mockQuest,
        },
      };

      expect(questsSlice.reducer(state, action)).toEqual({
        ...state,
        quest: action.payload,
        questStatus: FetchStatus.Success,
      });
    });

    it('should be update quest state, status, error to rejected', () => {
      const action = {
        type: fetchQuestAction.rejected.type,
      };

      expect(questsSlice.reducer(state, action)).toEqual({
        ...state,
        questStatus: FetchStatus.Failed,
        questError: true,
      });
    });
  });

  describe('send order', () => {
    it('should be update change order status', () => {
      expect(
        questsSlice.reducer(state, changeOrderStatus(FetchStatus.Success)),
      ).toEqual({
        ...state,
        sendOrderStatus: FetchStatus.Success,
      });
    });

    it('should be update order status to pending', () => {
      const action = {
        type: sendOrder.pending.type,
      };

      expect(questsSlice.reducer(state, action)).toEqual({
        ...state,
        sendOrderStatus: FetchStatus.Pending,
      });
    });

    it('should be update order status to fulfilled', () => {
      const action = {
        type: sendOrder.fulfilled.type,
      };

      expect(questsSlice.reducer(state, action)).toEqual({
        ...state,
        sendOrderStatus: FetchStatus.Success,
      });
    });

    it('should be update order status to rejected', () => {
      const action = {
        type: sendOrder.rejected.type,
      };

      expect(questsSlice.reducer(state, action)).toEqual({
        ...state,
        sendOrderStatus: FetchStatus.Failed,
      });
    });
  });
});
