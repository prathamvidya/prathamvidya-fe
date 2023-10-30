import { PrismicDataPayloadType } from 'redux/types/ui.types';
import { UIActionType } from './actions.constants';

export const setDarkModeAction = (payload: boolean) => ({
  type: UIActionType.SET_DARK_MODE,
  payload,
});

export const fetchPrismicDataAction = () => ({
  type: UIActionType.FETCH_PRISMIC_DATA,
});

export const fetchPrismicDataCompletedAction = (
  payload: PrismicDataPayloadType
) => ({
  type: UIActionType.FETCH_PRISMIC_DATA_COMPLETED,
  payload,
});

export const fetchPrismicDataErrorAction = (message: string) => ({
  type: UIActionType.FETCH_PRISMIC_DATA_ERROR,
  payload: message,
});
