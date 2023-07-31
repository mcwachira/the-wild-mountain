import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createEditCabin} from "../../services/apiCabins.ts";
import toast from "react-hot-toast";




export function useEditCabin(){

    const queryClient = useQueryClient()
    const {mutate:editCabin, isLoading:isEditing} = useMutation({
        mutationFn:({newCabinData, id}) => createEditCabin(newCabinData, id),
        onSuccess:() => {
            toast.success('New cabin succesfully created');
            //This will cause data to be refetched after performing a mutation
            queryClient.invalidateQueries({
                queryKey:['cabin'],
            })


        },
        onError:(err) => toast.error(err.message)
    })

    return{
        isEditing, editCabin
    }
}
