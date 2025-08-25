import { AnyAction } from "redux"
import {Show} from "../../models/Show"
import { QUERY_CHANGED, SHOWS_LOADED } from "../actions/show"
import { produce } from "immer"
import { normalize, schema } from "normalizr"

export type State = {
  shows: {[showId: number]: Show}
  query: string
  loading: boolean
  queryToShow: {[query: string]: number[]}
}

export const initialState: State = {
  shows: {},
  query: "",
  loading: false,
  queryToShow: {}
}

const showReducer = (state = initialState, action: AnyAction): State => {
  switch (action.type) {
    case SHOWS_LOADED:
      return produce(state, (draft) => {
        const shows = action.payload as Show[];
        const showSchema = new schema.Entity("shows");
        const normalizedData = normalize(shows, [showSchema]);
        if(normalizedData.result.length !== 0){
        draft.queryToShow[draft.query] = normalizedData.result;
        }
        draft.shows =  {...draft.shows, ...normalizedData.entities.shows };
        draft.loading = false;
      })
    case QUERY_CHANGED:
      return produce(state, (draft) => {
        if(action.payload){
          draft.loading = true;
        }
        draft.query = action.payload;
      })
    default:
      return state
  }
}

export default showReducer