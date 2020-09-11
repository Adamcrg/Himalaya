import { produce } from 'immer';
import constants from '@pages/Home/store/constants';
import { HomeActionTypes } from '@pages/Home/store/actions';

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

export interface Pagination {
  current: number;
  total: number;
  hasMore: boolean;
}

export interface HomeState {
  carousels: CarouselItem[];
  guesses: GuessItem[];
  channels: ChannelItem[];
  pagination: Pagination;
  channelsLoading: boolean;
}

const initialState: HomeState = {
  carousels: [],
  guesses: [],
  channels: [],
  pagination: {
    current: 1,
    total: 0,
    hasMore: true,
  },
  channelsLoading: false,
};

export default produce(
  (draftState: HomeState = initialState, action: HomeActionTypes) => {
    switch (action.type) {
      case constants.GET_CAROUSELS: {
        const { carousels } = action.payload as { carousels: CarouselItem[] };
        draftState.carousels = carousels;
        return draftState;
      }

      case constants.GET_GUESSES: {
        const { guesses } = action.payload as { guesses: GuessItem[] };
        draftState.guesses = guesses;
        return draftState;
      }

      case constants.GET_CHANNELS: {
        const { channels, pagination } = action.payload as {
          channels: ChannelItem[];
          pagination: Pagination;
        };
        draftState.channels = channels;
        draftState.pagination = pagination;
        return draftState;
      }

      case constants.CHANGE_CHANNELS_LOADING: {
        const { loading } = action.payload as {
          loading: boolean;
        };
        draftState.channelsLoading = loading;
        return draftState;
      }

      default:
        return draftState;
    }
  },
);
