import { UIActionType } from './actions.constants';

export const setDarkModeAction = (payload: boolean) => ({
  type: UIActionType.SET_DARK_MODE,
  payload,
});
