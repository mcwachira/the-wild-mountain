import {useNavigate} from "react-router-dom";
import {useMutation} from "@tanstack/react-query";
import {login as loginApi} from '../../services/apiAuth'
import {toast} from 'react-hot-toast'
export const useLogin = () => {
    const navigate = useNavigate();
    const {mutate:login, isLoading} = useMutation({
        mutationFn:({email, password}) => loginApi({email, password}),
        onSuccess:(user) => {
            // console.log(user)
            navigate("/dashboard")
        },
        onError:(err) => {
            console.log("Error:", err);
            toast.error("Provided Email and Password are incorrect")



        }
    })

    return {login, isLoading}
}