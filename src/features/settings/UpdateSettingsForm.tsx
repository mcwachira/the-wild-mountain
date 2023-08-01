
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import {useSettings} from "./useSettings.ts";
import Form from "../../ui/Form.tsx";
import Spinner from "../../ui/Spinner.tsx";

function UpdateSettingsForm() {

    const {isLoading, settings:{minBookingLength, maxBookingLength, maxGuestPerBooking,breakfastPrice } = {} } = useSettings();



    if(isLoading)  return <Spinner/>
  return (
    <Form>
      <FormRow label='Minimum nights/booking'>
        <Input type='number' defaultValue={minBookingLength} id='min-nights' />
      </FormRow>
      <FormRow label='Maximum nights/booking'>
        <Input type='number' defaultValue={maxBookingLength} id='max-nights' />
      </FormRow>
      <FormRow label='Maximum guests/booking'>
        <Input type='number' defaultValue={maxGuestPerBooking} id='max-guests' />
      </FormRow>
      <FormRow label='Breakfast price'>
        <Input type='number' defaultValue={breakfastPrice} id='breakfast-price' />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;

