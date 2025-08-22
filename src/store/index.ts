import { applyMiddleware, combineReducers, createStore,  } from "redux"
import showReducer from "./reducers/show"
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "@redux-devtools/extension";
import { takeLatest } from "redux-saga/effects";
import { QUERY_CHANGED } from "./actions/show";
import { searchShows } from "../apis";
import { fetchShows } from "./sagas/shows";


const reducer = combineReducers({
  shows: showReducer
})

const rootSaga = function* () {
  yield takeLatest(QUERY_CHANGED, fetchShows)
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer, 
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof reducer>

export default store

