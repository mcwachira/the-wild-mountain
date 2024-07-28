import {useQuery, useQueryClient} from "@tanstack/react-query";
import {getBookings} from "../../services/apiBookings.ts";
import {useSearchParams} from "react-router-dom";
import {PAGE_SIZE} from "../../utils/constants.ts";


export function useBookings(){

    const [searchParams] = useSearchParams()
    const queryClient = useQueryClient()

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


    //PAGINATION
    const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));


    //QUERY
    const {isLoading,

        //data won't exist initially
        data: { data: bookings, count }={} ,

        error} =  useQuery({
        //query key should be unique
        queryKey:['bookings', filter, sortBy, page],
        //function should return a promise
        queryFn:() => getBookings({filter, sortBy, page})
    })

    //PRE-FETCHING OR INFINITE QUERIES

    const pageCount = Math.ceil(count / PAGE_SIZE);
    if(page < pageCount)
    queryClient.prefetchQuery({
        queryKey:['bookings', filter, sortBy,page+1],
        //function should return a promise
        queryFn:() => getBookings({filter, sortBy, page:page + 1})
    })

    if(page > 1)
        queryClient.prefetchQuery({
            queryKey:['bookings', filter, sortBy,page-1],
            //function should return a promise
            queryFn:() => getBookings({filter, sortBy, page:page - 1})
        })
return {
        isLoading,
    bookings,
    count,
    error

}}