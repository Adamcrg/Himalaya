import axios from 'axios';
import constants from '@pages/Home/store/constants';
import {
  CarouselItem,
  GuessItem,
  ChannelItem,
  Pagination,
} from '@pages/Home/store/reducer';

const CAROUSEL_URL = '/mock/11/Himalaya/carousel';
const GUESS_URL = '/mock/11/Himalaya/guess';
const CHANNEL_URL = '/mock/11/Himalaya/channel';

interface ActiveCarouselIndexAction {
  type: constants;
  payload: { index: number };
}

interface CarouselsAction {
  type: constants;
  payload: { carousels: CarouselItem[] };
}

interface GuessesAction {
  type: constants;
  payload: { guesses: GuessItem[] };
}

interface ChannelsAction {
  type: constants;
  payload: { channels: ChannelItem[]; pagination: Pagination };
}

interface LoadingAction {
  type: constants;
  payload: { loading: boolean };
}

interface ScrollAction {
  type: constants;
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

export const getCarousels = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(CAROUSEL_URL);
      dispatch(getCarouselsAction(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const changeActiveCarouselIndex = ({ index }: { index: number }) => {
  return (dispatch) => {
    dispatch(changeActiveCarouselIndexAction(index));
  };
};

export const getGuesses = () => {
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
}) => {
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
}) => {
  return (dispatch) => {
    dispatch(changeLinearGradientVisibleAction(linearGradientVisible));
  };
};
