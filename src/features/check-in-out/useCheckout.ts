import {useMutation, useQueryClient} from "@tanstack/react-query";
import {updateBooking} from "../../services/apiBookings.ts";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

export const useCheckout = () => {

    const queryClient = useQueryClient();

    const navigate = useNavigate();

    const {mutate:checkout, isLoading:isCheckingOut} = useMutation({
        mutationFn: ( bookingId) => updateBooking(bookingId, {
                status:'checked-out',

            }),

        onSuccess:(data) => {toast.success(`Booking ${data.id} successfully checked Out`);
            //why invalidate queries  ??
            queryClient.invalidateQueries({active:true})
            // navigate("/")
            },
        onError:() => toast.error("There was an error while checking out ")

        }
    )

    return {checkout, isCheckingOut}
}