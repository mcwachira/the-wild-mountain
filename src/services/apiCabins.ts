import {supabase, supabaseUrl} from './supabase'

export const getCabins = async() => {
    const {data, error} = await supabase.from('cabins').select('*')

    if(error){
        console.log(error);
        throw new Error('Cabins could not be loaded');

    }


    return data;
}



export const createCabin = async(newCabin) => {

    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
        "/",
        ""
    );
    const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`
    //1. Create Cabin
    const { data, error } = await supabase
        .from('cabins')
        .insert([{...newCabin, image:imagePath}])


    if(error){
        console.log(error);
        throw new Error('Cabins could not be deleted');

    }

    //2. Upload Images

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


export const deleteCabins = async(id) => {

    const {data, error} = await supabase.from('cabins').delete().eq('id', id);
    if(error){
        console.log(error);
        throw new Error('Cabins could not be deleted');

    }

    return data

}
