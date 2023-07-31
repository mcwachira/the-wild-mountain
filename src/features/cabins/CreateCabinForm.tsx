import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form.tsx";
import Button from "../../ui/Button.tsx";
import FileInput from "../../ui/FileInput.tsx";
import Textarea from "../../ui/Textarea.tsx";
import {useForm} from "react-hook-form";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createEditCabin} from "../../services/apiCabins.ts";
import toast from "react-hot-toast";
import FormRow from "../../ui/FormRow.tsx";


function CreateCabinForm({cabinToEdit}) {



    const {id:editId, ...editValues} = cabinToEdit;

    const isEditSession = Boolean(editId)
    const queryClient = useQueryClient();


    const {register, handleSubmit, reset,getValues,formState} = useForm({
        defaultValues:isEditSession ? editValues :{}
    })


    const {errors} = formState;

    const {mutate:createCabin, isLoading:isCreating} = useMutation({
        mutationFn:createEditCabin,
        onSuccess:() => {
            toast.success('New cabin succesfully created');
            //This will cause data to be refetched after performing a mutation
            queryClient.invalidateQueries({
                queryKey:['cabin'],
            })

            reset()
        },
        onError:(err) => toast.error(err.message)
    })


    const {mutate:editCabin, isLoading:isEditting} = useMutation({
        mutationFn:({newCabinData, id}) => createEditCabin(newCabinData, id),
        onSuccess:() => {
            toast.success('New cabin succesfully created');
            //This will cause data to be refetched after performing a mutation
            queryClient.invalidateQueries({
                queryKey:['cabin'],
            })

            reset()
        },
        onError:(err) => toast.error(err.message)
    })

    const isWorking = isCreating || isEditting

    const onSubmit = (data) => {
        console.log(data)

        const image = typeof data.image === 'string' ? data.image : data.image[0];


        if(isEditSession) {
            editCabin({newCabinData: {...data, image}, id: editId})
        }else {
            createCabin({...data,image: image})
        }


    }

    const onError = (errors) => {

    }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label='Cabin name' error={errors?.name?.message }>

        <Input disabled={isWorking} type="text" id="name" {...register("name",{
            required:'This field is required'
        })} />


      </FormRow>

      <FormRow label='Maximum Capacity' error={errors?.maxCapacity?.message }>

        <Input disabled={isWorking} type="number" id="maxCapacity"  {...register("maxCapacity" ,{
            required:'This field is required',
            min:{
                value:1,
                message:'Capacity should be at least one',
            }
        })} />
      </FormRow>

      <FormRow label='Reqular Price' error={errors?.regularPrice?.message }>

        <Input disabled={isWorking} type="number" id="regularPrice"  {...register("regularPrice" ,{
            required:'This field is required',
            min:{
                value:1,
                message:'Capacity should be at least one',
            }
        } )} />
      </FormRow>

      <FormRow label='Discount' error={errors?.discount?.message }>

        <Input disabled={isWorking} type="number" id="discount" defaultValue={0} {...register("discount" ,{
            required:'This field is required',
            validate: (value) => value <=getValues().regularPrice || 'Discount Should be less than regular price'
        })} />
      </FormRow>

      <FormRow label='Description for website' error={errors?.description?.message }>

        <Textarea type="number" id="description" defaultValue="" {...register("description" ,{
            required:'This field is required'
        })} />
      </FormRow>

      <FormRow label='Cabin photo' error={errors?.image?.message }>

        <FileInput id="image" accept="image/*" {...register("image" ,{
            required: isEditSession ? false: 'This field is required'
        })}/>
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isWorking}>{isEditSession ? 'Edit Cabin' : 'Create a new cabin'}</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
