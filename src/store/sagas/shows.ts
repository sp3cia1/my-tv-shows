import {call, put} from "redux-saga/effects";
import { searchShows } from "../../apis";
import { Action } from "../actions";
import { showLoadedAction} from "../actions/show";

export function* fetchShows(action: Action): Generator{
  const shows = yield call(searchShows, action.payload);
  yield put(showLoadedAction(shows));
}