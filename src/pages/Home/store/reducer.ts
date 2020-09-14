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
  activeCarouselIndex: number;
  guesses: GuessItem[];
  channels: ChannelItem[];
  pagination: Pagination;
  channelsLoading: boolean;
  linearGradientVisible: boolean;
}

const initialState: HomeState = {
  carousels: [],
  activeCarouselIndex: 0,
  guesses: [],
  channels: [],
  pagination: {
    current: 1,
    total: 0,
    hasMore: true,
  },
  channelsLoading: false,
  linearGradientVisible: true,
};

export default produce(
  (draftState: HomeState = initialState, action: HomeActionTypes) => {
    switch (action.type) {
      case constants.GET_CAROUSELS: {
        const { carousels } = action.payload as { carousels: CarouselItem[] };
        draftState.carousels = carousels;
        return draftState;
      }

      case constants.CHANGE_ACTIVE_CAROUSEL_INDEX: {
        const { index } = action.payload as {
          index: number;
        };
        draftState.activeCarouselIndex = index;
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
      case constants.CHANGE_LINEAR_GRADIENT_VISIBLE: {
        const { linearGradientVisible } = action.payload as {
          linearGradientVisible: boolean;
        };
        draftState.linearGradientVisible = linearGradientVisible;
        return draftState;
      }

      default:
        return draftState;
    }
  },
);
