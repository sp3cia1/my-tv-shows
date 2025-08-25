import { createSelector } from "reselect";
import { RootState } from "..";

const showDetailsStateSelector = (state: RootState) => state.showDetails;

export const showDetailsSelector = createSelector(showDetailsStateSelector, (state) => state.show);