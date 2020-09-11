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

export interface HomeState {
  carousels: CarouselItem[];
  guesses: GuessItem[];
  channels: ChannelItem[];
}

const initialState: HomeState = {
  carousels: [],
  guesses: [],
  channels: [],
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
        const { channels } = action.payload as { channels: ChannelItem[] };
        draftState.channels = channels;
        return draftState;
      }

      default:
        return draftState;
    }
  },
);
