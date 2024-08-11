import {supabase} from "./supabase";
interface FormProps {
 email:string,
    password:string,
    fullName:string,
}


export const signup = async ({fullName,email, password}:FormProps) => {

    const {data, error} = await supabase.auth.signUp({
        email, password,
        //optional just to add some data needed by the user
        options:{
            data:{
                fullName,
                avatar:""
            }
        }
    })

    if(error) throw new Error(error.message);
    return data
}
export const login = async ({email, password}:FormProps) => {

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