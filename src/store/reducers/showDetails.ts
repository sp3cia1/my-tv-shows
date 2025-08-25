import { AnyAction } from "redux-saga";
import { Show } from "../../models/Show"
import { SHOW_DETAIL_LOADED } from "../actions/showDetails";
import { produce } from "immer";

export type State = {
  show: Show
}

export const initialState : State = {
  show: {
    id: 0,
    url: "",
    name: "",
    summary: "",
    image: undefined,
    genres: [],
    rating: { average: 0 },
  }
};

const showDetailsReducer = (state = initialState, action:AnyAction): State => {
  switch(action.type){
    case SHOW_DETAIL_LOADED:
      return produce(state, (draft) => {
        const showDetail = action.payload as Show;
        draft.show = showDetail;
      })
    default:
      return state
  }
}

export default showDetailsReducer;