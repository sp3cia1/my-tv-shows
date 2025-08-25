import { applyMiddleware, combineReducers, createStore,  } from "redux"
import showReducer from "./reducers/show"
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "@redux-devtools/extension";
import { debounce, takeEvery, takeLatest } from "redux-saga/effects";
import { QUERY_CHANGED } from "./actions/show";
import { searchShows } from "../apis";
import { fetchShows } from "./sagas/shows";
import showDetailsReducer from "./reducers/showDetails";
import { fetchShowDetail } from "./sagas/showDetails";


const reducer = combineReducers({
  shows: showReducer,
  showDetails: showDetailsReducer
})

const rootSaga = function* () {
  yield debounce(200, QUERY_CHANGED, fetchShows)
  yield takeEvery("LOAD_SHOW_DETAILS", fetchShowDetail);
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer, 
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof reducer>

export default store

