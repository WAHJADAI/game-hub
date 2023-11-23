import { useQuery } from "@tanstack/react-query";
import APIClient from "../service/api-client";
import  Trailer  from "../entity/Trailer";


const useTrailer =(gameId:number)=>
{
    const apiCilent =new APIClient<Trailer>(`/games/${gameId}/movies`)
    return useQuery({
        queryKey:['trailer',gameId],
        queryFn:apiCilent.getAll
    })
}

export default useTrailer