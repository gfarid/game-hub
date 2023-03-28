import useData from "./useData";

export interface Genre {
    name: string;
    id: number;
    image_background: string;
  }
  
const useGenres = ()=>{
    return useData<Genre>('/genres');
}

export default useGenres;