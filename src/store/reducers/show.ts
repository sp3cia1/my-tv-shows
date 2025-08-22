import { AnyAction } from "redux"
import {Show} from "../../models/Show"
import { QUERY_CHANGED, SHOWS_LOADED } from "../actions/show"
import { produce } from "immer"
import { normalize, schema } from "normalizr"

export type State = {
  shows: {[showId: number]: Show}
  query: string
}

export const initialState: State = {
  shows: {},
  query: "",
}

const showReducer = (state = initialState, action: AnyAction): State => {
  switch (action.type) {
    case SHOWS_LOADED:
      return produce(state, (draft) => {
        const shows = action.payload as Show[];
        const showSchema = new schema.Entity("shows");
        const normalizedData = normalize(shows, [showSchema]);
        draft.shows =  { ...normalizedData.entities.shows };
      })
    case QUERY_CHANGED:
      return produce(state, (draft) => {
        draft.query = action.payload;
      })
    default:
      return state
  }
}

export default showReducer