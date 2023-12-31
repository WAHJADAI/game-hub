import  Genres  from "./Genres";
import  Platform  from "./Platform";
import  publishers  from "./Publisher";

export default interface Game {
  id: number;
  name: string;
  slug: string;
  genres:Genres[];
  publishers:publishers[];
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform; }[];
  metacritic: number;
  rating_top: number;
}
