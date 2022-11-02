import { all, put, takeEvery } from "redux-saga/effects";
import { request } from "../../apis";

import * as Actions from "../actions";

function* playingRequest(action) {
  try {
    let result = yield request.getPlayingMovie(action.payload); // payload url
    if (result?.data) {
      yield put({
        type: Actions.GET_PLAYING_SUCCESS,
        payload: result.data, // { page: 1, results: [], total_pages: 1, total_results: 10}
      });
    } else {
      yield put({
        type: Actions.GET_PLAYING_FAILURE,
        payload: result.error,
      });
    }
  } catch (error) {
    yield put({
      type: Actions.GET_PLAYING_FAILURE,
      error,
    });
  }
}

function* watchPlaying() {
  yield takeEvery(Actions.GET_PLAYING_REQUEST, playingRequest);
}
/***************************************************** */

export default function* playingSaga() {
  yield all([watchPlaying()]);
}
