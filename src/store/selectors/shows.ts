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

export const showsLoadingSelector = createSelector(
  showStateSelector,
  (state) => state.loading
);

export const queryShowMapSelector = createSelector(
  showStateSelector,
  (state) => state.queryToShow
);

export const showsSelector = createSelector(
  showsMapSelector,
  showQuerySelector,
  queryShowMapSelector,
  (showsMap, query, queryShowMap) => {

    const showIds = queryShowMap[query] || [];
    const result = showIds ? showIds.map((id) => showsMap[id]) : [];


    return result;
  }
);