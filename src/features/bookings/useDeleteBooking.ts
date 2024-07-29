import {useMutation, useQueryClient} from "@tanstack/react-query";
import {deleteBooking as deleteBookingApi} from "../../services/apiBookings.ts";

import toast from "react-hot-toast";



export function useDeleteBooking(){


    const queryClient = useQueryClient()
    const {isLoading:isDeleting, mutate:deleteBooking, } =  useMutation({
        //delete booking

        mutationFn:(bookingId) => deleteBookingApi(bookingId),
        onSuccess: () => {

            toast.success('Booking successfully deleted');
            //This will cause data to be re-fetched after performing a mutation
            queryClient.invalidateQueries({
                queryKey: ['bookings'],
            })

        },
        onError: (err) => toast.error(err.message)
    })
    return {
        isDeleting,
        deleteBooking,


    }}

