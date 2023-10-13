import { createSelector } from 'reselect';
import { uiSelector } from './app.selectors';

export const darkModeSelector = createSelector(
  [uiSelector],
  (uiState) => uiState.darkMode
);
