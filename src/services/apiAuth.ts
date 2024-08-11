import {supabase, supabaseUrl} from "./supabase";
interface FormProps {
 email:string,
    password:string,
    fullName:string,
    avatar:string,
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


export const updateCurrentUser = async ({password, fullName, avatar}:FormProps) => {
    //1. Update the Email or FullName individually
    let updateData;
    if(password) updateData = {password};
    if (fullName) updateData = {data:{fullName}};

    const {data, error} = await supabase.auth.updateUser(updateData)
    if(error)  throw  new Error(error.message)
    if(!avatar) return data
    //2. Upload the avatar Image

    const fileName = `avatar-${data.user.id}-${Math.random()}`;
    const {error:storageError} =await supabase.storage.from('avatars').upload(fileName, avatar)
    if(storageError)  throw  new Error(storageError.message)


    //3. Update avatar in the user
    const {data:updateUser, error:updateImageErorr} = await supabase.auth.updateUser({
        data:{
            avatar:`${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`
        }
    })
    if(updateImageErorr)  throw  new Error(updateImageErorr.message)


    return updateUser
}