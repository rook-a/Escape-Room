import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { selectFilterType } from '../app-slice/api-slice';
import { handleError } from 'src/components/services/handle-error';

import { Quest } from 'src/components/types/quest';
import { Order } from 'src/components/types/order';
import { State, AppDispatch } from '../../types/state';
import { NameSpace, FetchStatus, APIRoute } from '../../utils/const';

interface InitialState {
  quests: Quest[];
  questsStatus: FetchStatus;
  questsError: boolean;

  quest: Quest | null;
  questStatus: FetchStatus;
  questError: boolean;
}

const initialState: InitialState = {
  quests: [],
  questsStatus: FetchStatus.Idle,
  questsError: false,

  quest: null,
  questStatus: FetchStatus.Idle,
  questError: false,
};

export const fetchQuestsAction = createAsyncThunk<
  Quest[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchQuests', async (_arg, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<Quest[]>(APIRoute.Quests);
    return data;
  } catch (err) {
    handleError(err);
    throw err;
  }
});

export const fetchQuestAction = createAsyncThunk<
  Quest,
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchQuest', async (id: number, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<Quest>(`${APIRoute.Quests}/${id}`);
    return data;
  } catch (err) {
    handleError(err);
    throw err;
  }
});

export const sendOrder = createAsyncThunk<
  Order,
  Order,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'data/sendOrder',
  async (
    { name, peopleCount, phone, isLegal }: Order,
    { dispatch, extra: api },
  ) => {
    try {
      const { data } = await api.post<Order>(APIRoute.Orders, {
        name,
        peopleCount,
        phone,
        isLegal,
      });
      return data;
    } catch (err) {
      handleError(err);
      throw err;
    }
  },
);

export const questsSlice = createSlice({
  name: NameSpace.Quests,
  initialState,
  reducers: {},
  extraReducers: (buider) => {
    buider
      .addCase(fetchQuestsAction.pending, (state) => {
        state.questsStatus = FetchStatus.Pending;
      })
      .addCase(fetchQuestsAction.fulfilled, (state, action) => {
        state.questsStatus = FetchStatus.Success;
        state.quests = action.payload;
      })
      .addCase(fetchQuestsAction.rejected, (state) => {
        state.questsStatus = FetchStatus.Failed;
        state.questsError = true;
      })
      .addCase(fetchQuestAction.pending, (state) => {
        state.questStatus = FetchStatus.Pending;
      })
      .addCase(fetchQuestAction.fulfilled, (state, action) => {
        state.questStatus = FetchStatus.Success;
        state.quest = action.payload;
      })
      .addCase(fetchQuestAction.rejected, (state) => {
        state.questStatus = FetchStatus.Failed;
        state.questError = true;
      });
  },
});

const selectQuestsState = (state: State) => state[NameSpace.Quests];

export const selectQuests = (state: State) => selectQuestsState(state).quests;
export const selectQuest = (state: State) => selectQuestsState(state).quest;

export const selectCurrentQuests = createSelector(
  selectQuests,
  selectFilterType,
  (quests, filterType) => quests.filter(({ type }) => type === filterType),
);
