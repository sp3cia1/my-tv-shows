import axios from "axios"
import { Show } from "./models/Show"

type searchResponse = {
  score: number
  show: Show
}

export async function searchShows(query:string): Promise<Show[]> {
  const response = await axios.get('https://api.tvmaze.com/search/shows?q='+query)
  const shows = response.data.map((item:searchResponse) => item.show)
  return shows
}

