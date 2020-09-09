import axios from 'axios';
import { Reducer } from 'redux';
import { Model, Effect } from 'dva-core-ts';

const CAROUSEL_URL = '/mock/11/Himalaya/carousel';
const GUESS_URL = '/mock/11/Himalaya/guess';

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

export interface HomeState {
  carousels: CarouselItem[];
  guesses: GuessItem[];
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
  };
}

const initialState: HomeState = {
  carousels: [],
  guesses: [],
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
      console.log('---轮播图---', data);
      yield put({
        type: 'setState',
        payload: {
          carousels: data,
        },
      });
    },
    *fetchGuesses(_, { call, put }) {
      const { data } = yield call(axios.get, GUESS_URL);
      console.log('---猜你喜欢---', data);
      yield put({
        type: 'setState',
        payload: {
          guesses: data,
        },
      });
    },
  },
};

export default homeModel;
