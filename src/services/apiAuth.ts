import {supabase} from "./supabase";

export const login = async ({email, password}) => {

 const {data, error} = await supabase.auth.signInWithPassword({
        email,
        password,
    })

    if(error)  throw  new Error(error.message)
    console.log(data)
    return data;
}

export const getCurrentUser = async () => {
    const {data:session} = await supabase.auth.getSession()
    if(!session.session) return null

    const {data, error} = await supabase.auth.getUser();

    if(error)  throw  new Error(error.message)
    console.log(data)
    return data?.user;
}

export const logOut = async() => {
    const {error} = await supabase.auth.signOut();
    if(error)  throw  new Error(error.message)
}