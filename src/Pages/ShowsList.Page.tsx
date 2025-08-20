import { useEffect, useState } from "react";
import SearchBar from "../Components/SearchBar";
import ShowCard from "../Components/ShowCard";
import { Show } from "../models/Show";
import { searchShows } from "../apis";

function ShowListPage() {
  const [shows, setShows] = useState<Show[]>([])
  const [query, setQuery] = useState("")

  useEffect(() => {
    searchShows(query).then((shows) => setShows(shows))
  }, [query])

  return (
    <div className="mt-2">
      <SearchBar value={query} onChange={(e) => setQuery(e.target.value)} />
      <div className="flex flex-wrap justify-center">
        {shows.map((show) => <ShowCard key={show.id} show={show} />)}
      </div>
    </div>
  );
}

export default ShowListPage;
