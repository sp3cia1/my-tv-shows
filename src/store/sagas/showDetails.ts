import { call, put } from "redux-saga/effects";
import { getShowDetails } from "../../apis";
import { showDetailLoadedAction } from "../actions/showDetails";
import { Action } from "../actions";

export function* fetchShowDetail(action: Action): Generator{
  const show = yield call(getShowDetails, action.payload);
  yield put(showDetailLoadedAction(show));
}