
import { useQuery } from "@tanstack/react-query"
import  ScreenShot  from "../entity/ScreenShot"
import APIClient from "../service/api-client"


const useScreenShot =(gameId:number)=>{
    const apiClient= new APIClient<ScreenShot>(`/games/${gameId}/screenshots`)
    return useQuery({
        queryKey:['screenshot',gameId],
        queryFn:apiClient.getAll
    })
}
export default useScreenShot