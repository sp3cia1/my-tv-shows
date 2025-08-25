import axios from "axios"
import { Show } from "./models/Show"

type searchResponse = {
  score: number
  show: Show
}

async function addCastToShow(showId:number, shows: Show[]) {
  const cast = await axios.get('https://api.tvmaze.com/shows/' + showId + '/cast')
  const people = cast.data.map((member: any) => member.person);
  console.log("id", showId)
  shows.find((show:Show) => show.id === showId)!.cast = people;

}

export async function searchShows(query: string): Promise<Show[]> {
  if(query){
    const response = await axios.get('https://api.tvmaze.com/search/shows?q=' + query)
    const shows = response.data.map((item: searchResponse) => item.show)
    console.log("API fetched shows for query:", query, shows);
    const showIds = shows.map((show:Show) => show.id)
    const promises = showIds.map((id:number) => addCastToShow(id, shows));
    await Promise.all(promises);
    console.log("show with cast", shows)
    return shows
  }
  return [];
}

export async function getShowDetails(id: number): Promise<Show> {
  const response = await axios.get('https://api.tvmaze.com/shows/' + id)
  return response.data;
}
