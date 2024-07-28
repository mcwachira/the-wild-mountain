import {useQuery} from "@tanstack/react-query";
import {getBookings} from "../../services/apiBookings.ts";
import {useSearchParams} from "react-router-dom";


export function useBookings(){

    const [searchParams] = useSearchParams()

    //Filter
    const filterValue = searchParams.get('status');
    const filter = !filterValue || filterValue=== "all"
        ? null
        :      {field:"status" , value: filterValue};
        // {field:"totalPrice" , value: 5000, method:"gte"};
        //



    //SORT

    const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
    const [field, direction] = sortByRaw.split("-");
    const sortBy = {field, direction}


    const {isLoading, data:bookings, error} =  useQuery({
        //query key should be unique
        queryKey:['bookings', filter, sortBy],
        //function should return a promise
        queryFn:() => getBookings({filter, sortBy})
    })

return {
        isLoading,
    bookings,
    error

}}