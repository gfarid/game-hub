
import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";

export interface Game {
    name: string;
    id: number;
    background_image: string;
    parent_platforms: { platform: Platform}[];
    metacritic: number;
    rating_top: number;
  }
  
const useGame = (gameQuery: GameQuery)=> {
 return useData<Game>('/games' , { 
  params : { genres: gameQuery.genre?.id , platforms: gameQuery.platform?.id , ordring: gameQuery.sortOrder, search: gameQuery.searchText}
} , [gameQuery])
}

export default useGame;