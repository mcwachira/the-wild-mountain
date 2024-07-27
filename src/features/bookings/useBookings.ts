import {useQuery} from "@tanstack/react-query";
import {getCabins} from "../../services/apiCabins.ts";
import {getBookings} from "../../services/apiBookings.ts";


export function useBookings(){
    const {isLoading, data:bookings, error} =  useQuery({
        //query key should be unique
        queryKey:['bookings'],
        //function should return a promise
        queryFn:getBookings
    })

return {
        isLoading,
    bookings,
    error

}}