import Button from "../../ui/Button.tsx";
import Form from "../../ui/Form.tsx";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import {useForm} from "react-hook-form";
import {useSignup} from "./useSignup.ts";


// Email regex: /\S+@\S+\.\S+/

function SignupForm() {

    const {register, formState, getValues, handleSubmit, reset} = useForm()
    const {errors} = formState;

    const {isLoading , signup} = useSignup()
    const onSubmit = (data) => {
const {fullName, email, password} = data;

signup({email, password, fullName}, {
    onSettled:reset(),
})

    }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <Input type="text" id="fullName" {...register("fullName", {required:"This is required"})}
               disabled={isLoading}/>
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input type="email" id="email" {...register("email", {required:"This is required",
        pattern:{
            value:/\S+@\S+\.\S+/,
            message:"PLease provide a valid email address"
        }})}
               disabled={isLoading}/>
      </FormRow>

      <FormRow label="Password (min 8 characters)" error={errors?.password?.message}>
        <Input type="password" id="password" {...register("password", {required:"This is required",
        minLength:{
            value:8,
        message:"Password needs a minimum of  8 characters"}
        })}
               disabled={isLoading}/>
      </FormRow>

      <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
        <Input type="password" id="passwordConfirm" {...register("passwordConfirm",
            {required:"This is required",
            validate:(value) => value === getValues().password || 'Password need to match'})}
               disabled={isLoading}/>
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset"  disabled={isLoading} onClick={reset}>
          Cancel
        </Button>
        <Button  disabled={isLoading}>Create new user</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
