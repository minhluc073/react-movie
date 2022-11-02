import { all, put, takeEvery } from "redux-saga/effects";
import { request } from "../../apis";
import * as Actions from "../actions";

function* ratedRequest(action) {
  try {
    let result = yield request.getTopRatedMovie(action.payload); // payload url
    if (result?.data) {
      yield put({
        type: Actions.GET_RATED_SUCCESS,
        payload: result.data, // { page: 1, results: [], total_pages: 1, total_results: 10}
      });
    } else {
      yield put({
        type: Actions.GET_RATED_FAILURE,
        payload: result.error,
      });
    }
  } catch (error) {
    yield put({
      type: Actions.GET_RATED_FAILURE,
      error,
    });
  }
}

function* watchRated() {
  yield takeEvery(Actions.GET_RATED_REQUEST, ratedRequest);
}
/***************************************************** */

export default function* ratedSaga() {
  yield all([watchRated()]);
}
