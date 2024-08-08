import {useMutation, useQueryClient} from "@tanstack/react-query";
import {useNavigate} from "react-router-dom";
import {logOut as logOutAPi} from "../../services/apiAuth.ts";


export const useLogout = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient()
    const {mutate:logout, isLoading} = useMutation({
        mutationFn:logOutApi,
        onSuccess:() => {
            //removes data n the cache
            queryClient.removeQueries()
            navigate('/login', {replace: true});
        },
    })

    return {logout, isLoading}
}