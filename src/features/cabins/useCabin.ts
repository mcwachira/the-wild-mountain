import {useQuery} from "@tanstack/react-query";
import {getCabins} from "../../services/apiCabins.ts";


export function useCabins(){
    const {isLoading, data:cabins, error} =  useQuery({
        //query key should be unique
        queryKey:['cabin'],
        //function should return a promise
        queryFn:getCabins
    })
return {
        isLoading,
    cabins,
    error

}}