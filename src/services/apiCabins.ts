import {supabase, supabaseUrl} from './supabase'

export const getCabins = async() => {
    const {data, error} = await supabase.from('cabins').select('*')

    if(error){
        console.log(error);
        throw new Error('Cabins could not be loaded');

    }


    return data;
}



export const createEditCabin = async(newCabin, id) => {

    //checks if the image is getting updated based on the url
    const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl)

    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
        "/",
        ""
    );
    const imagePath =hasImagePath?newCabin.image: `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`
    //1. Create Cabin

    let query = supabase.from('cabins')

    // 1. Create
    if(!id)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  query =  query.insert([{...newCabin, image:imagePath}]).select().single()


    // query = query.insert([{...newCabin, image:imagePath}])



    //2. Edit
   if(id) query =  query.update({...newCabin, image:imagePath}).eq('id', id)


    const { data, error } = await query.select().single();

    if(error){
        console.log(error);
        throw new Error('Cabins could not be deleted');

    }

    //2. Upload Images

    //check if image path exist
    if(hasImagePath) return data;

    //if there is an error in uploading cabin image the cabin data corresponding to the image is deleted
    const {error:storageError} = await supabase.storage.from('cabin-images').upload(imageName, newCabin.image);


    //Delete Cabin if there was an error uploading the image

    if(storageError){
        await supabase.from('cabins').delete().eq('id', data.id);
        console.error(storageError);

        throw new Error('Cabin image could not be uploaded and the cabin was not created')
    }
    return data

}



//async function to delete cabins
export const deleteCabins = async(id) => {

    const {data, error} = await supabase.from('cabins').delete().eq('id', id);
    if(error){
        console.log(error);
        throw new Error('Cabins could not be deleted');

    }

    return data

}
