import SearchBar from "../Components/SearchBar";
import ShowCard from "../Components/ShowCard";
import { QueryChangedAction, showLoadedAction } from "../store/actions/show";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";
import {  showQuerySelector, showsLoadingSelector, showsSelector } from "../store/selectors/shows";
import { RootState } from "../store";
import LoadingSpinner from "../Components/LoadingSpinner";

type ShowListPageProps = {} & PropsFromRedux;

function ShowListPage({ shows, query, queryChanged, loading }: ShowListPageProps) {

  return (
    <div className="mt-2 ">
      <div>
        <SearchBar value={query} onChange={(e) => queryChanged(e.target.value)} />
        {loading && <LoadingSpinner />}
      </div>

      <div className="flex flex-wrap justify-center ">
        {shows.map((show) => <ShowCard key={show.id} show={show} />)}
      </div>
    </div>
  );
}

const mapStateToProps = (state: RootState) => ({
  shows: showsSelector(state),
  query: showQuerySelector(state),
  loading: showsLoadingSelector(state)
});

// const mapDispatchToProps = (dispatch: Dispatch) => ({
//   queryChanged: (query: string) => dispatch(QueryChangedAction(query))
// });

const mapDispatchToProps = {
  queryChanged : QueryChangedAction
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(ShowListPage);
