import {useMutation, useQueryClient} from "@tanstack/react-query";
import toast from "react-hot-toast";
import {updateSetting as updateSettingApi} from "../../services/apiSettings.ts";




export function useUpdateSetting(){

    const queryClient = useQueryClient()
    const {mutate:updateSetting, isLoading:isUpdating} = useMutation({
        mutationFn:updateSettingApi,
        onSuccess:() => {
            toast.success('Settings successfully edited');
            //This will cause data to be refetched after performing a mutation
            queryClient.invalidateQueries({
                queryKey:['settings'],
            })


        },
        onError:(err) => toast.error(err.message)
    })

    return{
        isUpdating, updateSetting
    }
}
 