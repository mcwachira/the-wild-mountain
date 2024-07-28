import {useQuery} from "@tanstack/react-query";
import {getBooking} from "../../services/apiBookings.ts";
import {useParams} from "react-router-dom";


export function useBooking(){
    const {bookingId}=useParams()
    console.log(bookingId)


    const {isLoading, data:booking, error} =  useQuery({
        //query key should be unique
        queryKey:['booking', bookingId],
        //function should return a promise
        queryFn:() => getBooking(bookingId),
        retry:false
    })
return {
        isLoading,
    booking,
    error

}}

