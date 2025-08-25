import { FC, useEffect } from "react";
import CastCard from "../Components/CastCard";
import GenrePill from "../Components/GenrePill";
import withRouter, { WithRouterProps } from "../hocs/withRouter";
import { IoIosArrowBack } from "react-icons/io";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loadShowDetailsAction, showDetailLoadedAction } from "../store/actions/showDetails";
import { Show } from "../models/Show";
import { getShowDetails } from "../apis";
import { showDetailsSelector } from "../store/selectors/showDetails";
import { ConnectedProps } from "react-redux";
import LoadingSpinner from "../Components/LoadingSpinner";

type ShowDetailPageProps = WithRouterProps & PropsFromRedux;

const ShowDetailPage: FC<ShowDetailPageProps> = ({ params, loadShow, show }) => {

  useEffect(() => {
    loadShow(+params.showId);
  }, [params.showId])

  if (!show) {
    return <LoadingSpinner />;
  }

  return (
    <div className="mt-2">
      <Link to={"/"}>
        <IoIosArrowBack />
        Back
      </Link>
      <h2 className="text-4xl font-semibold tracking-wide">{show?.name}</h2>
      <div className="flex space-x-3 my-2 bg-gray-300 p-2 rounded-sm">
        {show?.genres.map(genre => (
          <GenrePill key={genre} name={genre} />
        ))}
      </div>
      <div className="mt-2 flex">
        <img
          src={show?.image?.original || "https://placehold.co/908x1212"}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72"
        />
        <div className="ml-2">
          <p dangerouslySetInnerHTML={{ __html: show?.summary || "" }}></p>
          <p className="mt-2 text-lg font-bold border border-gray-700 rounded-md px-2 py-1 max-w-max">
            Rating: <span className="text-gray-700">{show?.rating?.average}/10</span>
          </p>
        </div>
      </div>

      <div className="mt-2">
        <h4 className="text-2xl font-semibold tracking-wide">Cast</h4>
        <div className="flex flex-wrap">
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545468.jpg"
            name="Henry Cavill"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545472.jpg"
            name="Freya Allan"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545470.jpg"
            name="Anya Chalotra"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/232/581040.jpg"
            name="Mimi Ndiweni"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545468.jpg"
            name="Henry Cavill"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545472.jpg"
            name="Freya Allan"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545470.jpg"
            name="Anya Chalotra"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/232/581040.jpg"
            name="Mimi Ndiweni"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545468.jpg"
            name="Henry Cavill"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545472.jpg"
            name="Freya Allan"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545470.jpg"
            name="Anya Chalotra"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/232/581040.jpg"
            name="Mimi Ndiweni"
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any, ownProps:any) => ({
  show: showDetailsSelector(state)
});

const mapDispatchToProps = {
  loadShow: loadShowDetailsAction
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default withRouter(connector(ShowDetailPage));
