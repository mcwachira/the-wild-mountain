import Input from "../../ui/Input";
import Form from "../../ui/Form.tsx";
import Button from "../../ui/Button.tsx";
import FileInput from "../../ui/FileInput.tsx";
import Textarea from "../../ui/Textarea.tsx";
import {useForm} from "react-hook-form";
import FormRow from "../../ui/FormRow.tsx";
import {useEditCabin} from "./useEditCabin.ts";
import {useCreateCabin} from "./useCreateCabin.ts";


interface CreateCabinFormProps {
   onCloseModal:() => void
}

function CreateCabinForm({cabinToEdit ={}, onCloseModal}:CreateCabinFormProps) {


    const {        isCreating, createCabin} = useCreateCabin()

    const {       isEditing, editCabin} = useEditCabin()

    const {id:editId, ...editValues} = cabinToEdit;

    const isEditSession = Boolean(editId)
    // const queryClient = useQueryClient();


    const {register, handleSubmit, reset,getValues,formState} = useForm({
        defaultValues:isEditSession ? editValues :{}
    })

    console.log(getValues().discount)

    const {errors} = formState;



    const isWorking = isCreating || isEditing

    const onSubmit = (data) => {
        console.log(data)

        const image = typeof data.image === 'string' ? data.image : data.image[0];


        if(isEditSession) {
            editCabin({newCabinData: {...data, image}, id: editId},  {
                onSuccess:(data) => {
                    reset()
                }
            })
        }else {
            createCabin({...data,image: image}, {
                onSuccess:(data) => {
                    reset()
                    onCloseModal?.()
                }
            })

        }


    }

    const onError = (errors) => {

    }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)} type={onCloseModal ? 'modal': 'regular'}>
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


        <FormRow label="Regular price" error={errors?.regularPrice?.message}>
            <Input
                type="number"
                id="regularPrice"
                disabled={isWorking}
                {...register("regularPrice", {
                    required: "This field is required",
                    min: {
                        value: 1,
                        message: "Capacity should be at least 1",
                    },
                })}
            />
        </FormRow>

        <FormRow label="Discount" error={errors?.discount?.message}>
            <Input
                type="number"
                id="discount"
                disabled={isWorking}
                defaultValue={0}
                {...register("discount", {
                    required: "This field is required",
                    validate: (value) =>
                        value <= getValues().regularPrice ||
                        "Discount should be less than regular price",
                })}
            />
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
        <Button variation="secondary" type="reset" onClick={() => onCloseModal?.()}>
          Cancel
        </Button>
        <Button disabled={isWorking}>{isEditSession ? 'Edit Cabin' : 'Create a new cabin'}</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
