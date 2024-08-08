import {useNavigate} from "react-router-dom";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {login as loginApi} from '../../services/apiAuth'
import {toast} from 'react-hot-toast'
export const useLogin = () => {
    const queryClient  = useQueryClient()
    const navigate = useNavigate();
    const {mutate:login, isLoading} = useMutation({
        mutationFn:({email, password}) => loginApi({email, password}),
        onSuccess:(user) => {

            //store user data in cache
            queryClient.setQueryData(['user'], user.user);
                   navigate('/dashboard', { replace: true });
        },
        onError:(err) => {
            console.log("Error:", err);
            toast.error("Provided Email and Password are incorrect")



        }
    })

    return {login, isLoading}
}