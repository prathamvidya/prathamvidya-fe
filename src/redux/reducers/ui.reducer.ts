import produce from 'immer';
import { HYDRATE } from 'next-redux-wrapper';
import { Reducer } from 'redux';
import { UIActionType } from 'redux/actions/actions.constants';
import { PrismicDataPayloadType } from 'redux/types/ui.types';
import { localStorageService } from 'services/LocalStorageService';

export interface UIState {
  darkMode: boolean;
  loading: boolean | null;
  loaded: boolean | null;
  error: string | null;
  prismicData: PrismicDataPayloadType | null;
}

const initialState: UIState = {
  darkMode: localStorageService.getLocalStorageValue('dark_mode') === 'true',
  loading: null,
  loaded: null,
  error: null,
  prismicData: null,
};

export const uiReducer: Reducer<UIState> = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state: UIState = initialState,
  action
) =>
  produce(state, (uiState: UIState) => {
    switch (action.type) {
      case UIActionType.SET_DARK_MODE: {
        uiState.darkMode = action.payload as boolean;
        break;
      }

      case HYDRATE: {
        uiState.prismicData = action.payload?.ui?.prismicData;
        break;
      }

      case UIActionType.FETCH_PRISMIC_DATA: {
        uiState.loading = true;
        uiState.loaded = false;
        uiState.prismicData = null;
        break;
      }
      case UIActionType.FETCH_PRISMIC_DATA_COMPLETED: {
        uiState.loaded = true;
        uiState.loading = false;
        uiState.error = null;
        uiState.prismicData = action.payload;
        break;
      }
      case UIActionType.FETCH_PRISMIC_DATA_ERROR: {
        uiState.loading = false;
        uiState.loaded = false;
        uiState.error = action.payload;
        break;
      }
      default: {
        break;
      }
    }
  });
