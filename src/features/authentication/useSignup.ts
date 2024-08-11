import {useMutation} from "@tanstack/react-query";
import {signup as signupApi} from "../../services/apiAuth.ts";
import toast from "react-hot-toast";

export const useSignup = () => {

    const {mutate:signup, isLoading} = useMutation({
        mutationFn:signupApi,
        onSuccess:(user) => {

            toast.success("Account created successfully, PLease verify the new account from the user's Email Address");
        }
    })

    return{isLoading, signup}
}