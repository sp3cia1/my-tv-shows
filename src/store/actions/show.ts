import { ActionCreator } from ".";
import { Show } from "../../models/Show";

export const SHOWS_LOADED = "SHOWS_LOADED" as const;
export const QUERY_CHANGED = "QUERY_CHANGED" as const;

export const showLoadedAction: ActionCreator<Show[]> = (payload) => ({
  type: SHOWS_LOADED,
  payload,
});

export const QueryChangedAction: ActionCreator<string> = (payload) => ({
  type: QUERY_CHANGED,
  payload,
});