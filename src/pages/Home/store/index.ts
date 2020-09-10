import axios from 'axios';
import { Reducer } from 'redux';
import { Model, Effect } from 'dva-core-ts';
import { RootState } from '@store/models';

const CAROUSEL_URL = '/mock/11/Himalaya/carousel';
const GUESS_URL = '/mock/11/Himalaya/guess';
const CHANNEL_URL = '/mock/11/Himalaya/channel';

export interface CarouselItem {
  id: string;
  image: string;
  colors: [string, string];
}

export interface GuessItem {
  id: string;
  title: string;
  image: string;
}

export interface ChannelItem {
  id: string;
  title: string;
  image: string;
  remark: string;
  played: number;
  playing: number;
}

export interface HomeState {
  carousels: CarouselItem[];
  guesses: GuessItem[];
  channels: ChannelItem[];
}

interface HomeModel extends Model {
  namespace: 'homeModel';
  state: HomeState;
  reducers: {
    setState: Reducer<HomeState>;
  };
  effects: {
    fetchCarousels: Effect;
    fetchGuesses: Effect;
    fetchChannels: Effect;
  };
}

const initialState: HomeState = {
  carousels: [],
  guesses: [],
  channels: [],
};

const homeModel: HomeModel = {
  namespace: 'homeModel',
  state: initialState,
  reducers: {
    setState(state = initialState, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {
    *fetchCarousels(_, { call, put }) {
      const { data } = yield call(axios.get, CAROUSEL_URL);
      yield put({
        type: 'setState',
        payload: {
          carousels: data,
        },
      });
    },
    *fetchGuesses(_, { call, put }) {
      const { data } = yield call(axios.get, GUESS_URL);
      yield put({
        type: 'setState',
        payload: {
          guesses: data,
        },
      });
    },
    *fetchChannels(_, { call, put, select }) {
      const { channels } = yield select((state: RootState) => state.homeModel);
      const { callback, payload } = _;
      const { data } = yield call(axios.get, CHANNEL_URL);
      if (payload && payload.loadMore) {
        data.results = [...channels, ...data.results];
      }
      yield put({
        type: 'setState',
        payload: {
          channels: data.results,
        },
      });
      if (typeof callback === 'function') {
        callback();
      }
    },
  },
};

export default homeModel;
