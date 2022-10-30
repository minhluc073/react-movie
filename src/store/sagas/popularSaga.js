import { all, put, takeEvery } from "redux-saga/effects";
import { request } from "../../apis";
import {
    GET_POPULAR_FAILURE,
    GET_POPULAR_REQUEST,
    GET_POPULAR_SUCCESS
} from "../actions";

function* popularRequest(action) {
  try {
    let result = yield request.getPopularMovie(action.payload); // payload url
    if (result?.data) {
      yield put({
        type: GET_POPULAR_SUCCESS,
        payload: result.data, // { page: 1, results: [], total_pages: 1, total_results: 10}
      });
    } else {
      yield put({
        type: GET_POPULAR_FAILURE,
        payload: result.error,
      });
    }
  } catch (error) {
    yield put({
      type: GET_POPULAR_FAILURE,
      error,
    });
  }
}

function* watchPopularList() {
  yield takeEvery(GET_POPULAR_REQUEST, popularRequest);
}
/***************************************************** */

export default function* popularSaga() {
  yield all([watchPopularList()]);
}
