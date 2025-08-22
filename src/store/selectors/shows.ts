import { createSelector } from "reselect";
import { RootState } from "..";

const showStateSelector = (state: RootState) => state.shows;

export const showQuerySelector = createSelector(
  showStateSelector,
  (state) => state.query
);

const showsMapSelector = createSelector(
  showStateSelector,
  (shows) => shows.shows
);

export const showsSelector = createSelector(
  showsMapSelector,
  (showsMap) => Object.keys(showsMap).map((id) => showsMap[+id])
);