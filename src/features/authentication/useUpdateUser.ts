import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createEditCabin} from "../../services/apiCabins.ts";
import toast from "react-hot-toast";
import {updateCurrentUser} from "../../services/apiAuth.ts";




export function useUpdateUser(){

    const queryClient = useQueryClient()
    const {mutate:updateUser, isLoading:isUpdating} = useMutation({
        mutationFn:updateCurrentUser,
        onSuccess:({user}) => {
            toast.success('User  Data Successfully updated');
            // queryClient.setQueryData('user', user)
            //This will cause data to be re-fetched after performing a mutation
            queryClient.invalidateQueries({
                queryKey:['user'],
            })


        },
        onError:(err) => toast.error(err.message)
    })

    return{
        isUpdating, updateUser
    }
}
