import { createSelector } from 'reselect';
import { uiSelector } from './app.selectors';

export const darkModeSelector = createSelector(
  [uiSelector],
  (uiState) => uiState.darkMode
);

export const prismicDataSelector = createSelector(
  [uiSelector],
  (uiState) => uiState.prismicData
);

export const prismicDataSettingsSelector = createSelector(
  [uiSelector],
  (uiState) => uiState.prismicData?.settings
);

export const prismicDataNoticesSelector = createSelector(
  [uiSelector],
  (uiState) => uiState.prismicData?.notices
);

export const prismicDataAboutUsSelector = createSelector(
  [uiSelector],
  (uiState) => uiState.prismicData?.aboutUs
);
