import axios from 'axios';
import constants from '@pages/Home/store/constants';
import {
  CarouselItem,
  GuessItem,
  ChannelItem,
  Pagination,
} from '@pages/Home/store/reducer';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '@store/reducer';

const CAROUSEL_URL = '/mock/11/Himalaya/carousel';
const GUESS_URL = '/mock/11/Himalaya/guess';
const CHANNEL_URL = '/mock/11/Himalaya/channel';

interface ActiveCarouselIndexAction {
  type: constants.CHANGE_ACTIVE_CAROUSEL_INDEX;
  payload: { index: number };
}

interface CarouselsAction {
  type: constants.GET_CAROUSELS;
  payload: { carousels: CarouselItem[] };
}

interface GuessesAction {
  type: constants.GET_GUESSES;
  payload: { guesses: GuessItem[] };
}

interface ChannelsAction {
  type: constants.GET_CHANNELS;
  payload: { channels: ChannelItem[]; pagination: Pagination };
}

interface LoadingAction {
  type: constants.CHANGE_CHANNELS_LOADING;
  payload: { loading: boolean };
}

interface ScrollAction {
  type: constants.CHANGE_LINEAR_GRADIENT_VISIBLE;
  payload: { linearGradientVisible: boolean };
}

export type HomeActionTypes =
  | CarouselsAction
  | ActiveCarouselIndexAction
  | GuessesAction
  | ChannelsAction
  | LoadingAction
  | ScrollAction;

const getCarouselsAction = (carousels: CarouselItem[]): CarouselsAction => ({
  type: constants.GET_CAROUSELS,
  payload: { carousels },
});

const getGuessesAction = (guesses: GuessItem[]): GuessesAction => ({
  type: constants.GET_GUESSES,
  payload: { guesses },
});

const getChannelsAction = (
  channels: ChannelItem[],
  pagination: Pagination,
): ChannelsAction => ({
  type: constants.GET_CHANNELS,
  payload: { channels, pagination },
});

const changeChannelsLoadingAction = (loading: boolean): LoadingAction => ({
  type: constants.CHANGE_CHANNELS_LOADING,
  payload: { loading },
});

const changeActiveCarouselIndexAction = (
  index: number,
): ActiveCarouselIndexAction => ({
  type: constants.CHANGE_ACTIVE_CAROUSEL_INDEX,
  payload: { index },
});

const changeLinearGradientVisibleAction = (
  linearGradientVisible: boolean,
): ScrollAction => ({
  type: constants.CHANGE_LINEAR_GRADIENT_VISIBLE,
  payload: { linearGradientVisible },
});

export const getCarousels = (): ThunkAction<
  void,
  RootState,
  null,
  Action<string>
> => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(CAROUSEL_URL);
      dispatch(getCarouselsAction(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const changeActiveCarouselIndex = ({
  index,
}: {
  index: number;
}): ThunkAction<void, RootState, null, Action<string>> => {
  return (dispatch) => {
    dispatch(changeActiveCarouselIndexAction(index));
  };
};

export const getGuesses = (): ThunkAction<
  void,
  RootState,
  null,
  Action<string>
> => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(GUESS_URL);
      dispatch(getGuessesAction(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getChannels = ({
  loadMore,
  callback,
}: {
  loadMore?: boolean;
  callback?: () => void;
}): ThunkAction<void, RootState, null, Action<string>> => {
  return async (dispatch, getState) => {
    try {
      dispatch(changeChannelsLoadingAction(true));
      const { channels, pagination } = getState().home;
      let { current } = pagination;
      if (loadMore) {
        current++;
      }
      const { data } = await axios.get(CHANNEL_URL, {
        params: {
          page: current,
        },
      });
      if (loadMore) {
        data.results = [...channels, ...data.results];
      }
      dispatch(
        getChannelsAction(data.results, {
          ...data.pagination,
          hasMore: data.results.length < data.pagination.total,
        }),
      );
      callback && callback();
      dispatch(changeChannelsLoadingAction(false));
    } catch (error) {
      console.log(error);
    }
  };
};

export const changeLinearGradientVisible = ({
  linearGradientVisible,
}: {
  linearGradientVisible: boolean;
}): ThunkAction<void, RootState, null, Action<string>> => {
  return (dispatch) => {
    dispatch(changeLinearGradientVisibleAction(linearGradientVisible));
  };
};
