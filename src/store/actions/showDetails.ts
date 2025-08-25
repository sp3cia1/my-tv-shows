import { ActionCreator } from ".";
import { Show } from "../../models/Show";

export const SHOW_DETAIL_LOADED = "SHOW_DETAIL_LOADED" as const;

export const LOAD_SHOW_DETAILS = "LOAD_SHOW_DETAILS" as const;

export const showDetailLoadedAction: ActionCreator<Show> = (payload) => ({
  type: SHOW_DETAIL_LOADED,
  payload
})

export const loadShowDetailsAction: ActionCreator<number> = (showId) => ({
  type: "LOAD_SHOW_DETAILS",
  payload: showId
});