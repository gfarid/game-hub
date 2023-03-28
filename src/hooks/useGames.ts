
import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";



export interface Game {
    name: string;
    id: number;
    background_image: string;
    parent_platforms: { platform: Platform}[];
    metacritic: number;
  }
  
const useGame = ( selectedGenre: Genre | null , selectedPlatform : Platform | null )=> {
 return useData<Game>('/games' , { 
  params : { genres: selectedGenre?.id , platforms: selectedPlatform?.id}
} , [selectedGenre?.id , selectedPlatform?.id])
}

export default useGame;