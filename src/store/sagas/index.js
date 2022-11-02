import { all } from "redux-saga/effects";
import playingSaga from "./playingSaga";
import popularSaga from "./popularSaga";
import ratedSaga from "./ratedSaga"

export default function* rootSaga() {
  yield all([
    popularSaga(),
    playingSaga(),
    ratedSaga()
  ]);
}
