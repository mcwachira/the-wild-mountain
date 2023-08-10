import {useQuery} from "@tanstack/react-query";
import {getCabins} from "../../services/apiCabins.ts";


export function useCabins(){
    const {isLoading, data:cabins, error} =  useQuery({
        //query key should be unique
        queryKey:['cabin'],
        queryFn:getCabins
    })
return {
        isLoading,
    cabins,
    error

}}