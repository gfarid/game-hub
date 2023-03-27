import useData from "./useData";

export interface Genre {
    name: string;
    id: number;
  }
  
const useGenres = ()=>{
    return useData<Genre>('/genres');
}

export default useGenres;