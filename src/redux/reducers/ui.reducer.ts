import produce from 'immer';
import { Reducer } from 'redux';
import { UIActionType } from 'redux/actions/actions.constants';
import { localStorageService } from 'services/LocalStorageService';

export interface UIState {
  darkMode: boolean;
}

const initialState: UIState = {
  darkMode: localStorageService.getLocalStorageValue('dark_mode') === 'true',
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
      default: {
        break;
      }
    }
  });
