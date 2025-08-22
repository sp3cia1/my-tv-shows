import { useEffect, useState } from "react";
import SearchBar from "../Components/SearchBar";
import ShowCard from "../Components/ShowCard";
import { Show } from "../models/Show";
import { searchShows } from "../apis";
import { QueryChangedAction, showLoadedAction } from "../store/actions/show";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { showQuerySelector, showsSelector } from "../store/selectors/shows";
import { RootState } from "../store";

type ShowListPageProps = {
  shows: Show[];
  query: string;
  queryChanged: (query: string) => void;
}

function ShowListPage({ shows, query, queryChanged }: ShowListPageProps) {

  return (
    <div className="mt-2 ">
      <SearchBar value={query} onChange={(e) => queryChanged(e.target.value)} />
      <div className="flex flex-wrap justify-center ">
        {shows.map((show) => <ShowCard key={show.id} show={show} />)}
      </div>
    </div>
  );
}

const mapStateToProps = (state: RootState) => ({
  shows: showsSelector(state),
  query: showQuerySelector(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  queryChanged: (query: string) => dispatch(QueryChangedAction(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowListPage);
