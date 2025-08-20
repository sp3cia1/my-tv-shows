import { Link } from "react-router-dom";
import { Show } from "../models/Show";

const placeholder = "https://placehold.co/210x295"

interface ShowCardProps {
  show: Show;
}

function ShowCard({ show }: ShowCardProps) {
  return (
    <div className="max-w-xs rounded-md shadow-md p-2 m-1">
      <img
        src={show.image?.medium || placeholder}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{show.name}</h2>
          <p>
            {show.summary}
          </p>
        </div>
        <Link
          to={"/show/" + show.id}
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ShowCard;
