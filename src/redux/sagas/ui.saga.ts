import { all, call, put, takeLatest } from 'redux-saga/effects';
import { UIActionType } from 'redux/actions/actions.constants';
import {
  fetchPrismicDataCompletedAction,
  fetchPrismicDataErrorAction,
} from 'redux/actions/ui.action';
import { localStorageService } from 'services/LocalStorageService';
import { SagaPayloadType } from 'types/SagaPayload.type';
import { prismicService } from '../../services/api-services/PrismicService';

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

function* fetchPrismicDataSaga(): any {
  try {
    const prismicData = yield call(prismicService.fetchPrismicData);
    yield put(fetchPrismicDataCompletedAction(prismicData));
  } catch (e: any) {
    yield put(fetchPrismicDataErrorAction(e.message));
  }
}

function* uiSaga() {
  yield all([
    takeLatest(UIActionType.SET_DARK_MODE, setDarkModeSaga),
    takeLatest(UIActionType.FETCH_PRISMIC_DATA, fetchPrismicDataSaga),
  ]);
}

export default uiSaga;
