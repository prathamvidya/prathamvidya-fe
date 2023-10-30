// Auth
export enum AuthActionType {
  LOGIN = 'auth/login',
  LOGIN_COMPLETED = 'auth/login/completed',
  LOGIN_ERROR = 'auth/login/error',

  FETCH_ME = 'auth/fetch/me',
  FETCH_ME_COMPLETED = 'auth/fetch/me/completed',
  FETCH_ME_ERROR = 'auth/fetch/me/error',
}

export enum UIActionType {
  SET_DARK_MODE = 'ui/mode/dark',

  FETCH_PRISMIC_DATA = 'fetch/data/prismic',
  FETCH_PRISMIC_DATA_COMPLETED = 'fetch/data/prismic/completed',
  FETCH_PRISMIC_DATA_ERROR = 'fetch/data/prismic/error',
}
