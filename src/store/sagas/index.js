import { all } from "redux-saga/effects";
import popularSaga from "./popularSaga";

export default function* rootSaga() {
  yield all([
    popularSaga(),
  ]);
}
