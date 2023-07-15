import {supabase} from './supabase'

const getCabins = async() => {
    const {data, error} = supabase.from('cabins').select('*')

    if(error){
        console.log(error);
        throw new Error('Cabins could not be loaded');

    }


    return data;
}

export default getCabins