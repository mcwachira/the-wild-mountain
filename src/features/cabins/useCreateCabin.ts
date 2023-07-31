import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createEditCabin} from "../../services/apiCabins.ts";
import toast from "react-hot-toast";



export function useCreateCabin() {

    const queryClient = useQueryClient()
    const {mutate: createCabin, isLoading: isCreating} = useMutation({
        mutationFn: createEditCabin,
        onSuccess: () => {
            toast.success('New cabin succesfully created');
            //This will cause data to be refetched after performing a mutation
            queryClient.invalidateQueries({
                queryKey: ['cabin'],
            })


        },
        onError: (err) => toast.error(err.message)
    })



    return{
        isCreating, createCabin
    }
}