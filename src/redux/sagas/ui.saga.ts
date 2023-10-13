import { all, takeLatest } from 'redux-saga/effects';
import { UIActionType } from 'redux/actions/actions.constants';
import { localStorageService } from 'services/LocalStorageService';
import { SagaPayloadType } from 'types/SagaPayload.type';

function* setDarkModeSaga(data: SagaPayloadType): any {
  try {
    yield localStorageService.setLocalStorageValue(
      'dark_mode',
      data?.payload ? 'true' : 'false'
    );
  } catch (e: any) {
    console.error(e);
  }
}

function* uiSaga() {
  yield all([takeLatest(UIActionType.SET_DARK_MODE, setDarkModeSaga)]);
}

export default uiSaga;
