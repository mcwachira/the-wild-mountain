
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import {useSettings} from "./useSettings.ts";
import Form from "../../ui/Form.tsx";
import Spinner from "../../ui/Spinner.tsx";
import {useUpdateSetting} from "./useUpdateSettings.ts";


function UpdateSettingsForm() {

    const {isLoading, settings:{minBookingLength, maxBookingLength, maxGuestPerBooking,breakFastPrice } = {} } = useSettings();



const {isUpdating, updateSetting} = useUpdateSetting()
    
    const handleUpdate = (e, field) => {
    
    const {value} =  e.target;
    
    if(!value) return ;
    updateSetting({[field]: value});
    }
    if(isLoading)  return <Spinner/>
  return (
    <Form>
      <FormRow label='Minimum nights/booking'>
        <Input type='number' defaultValue={minBookingLength} id='min-nights' 

               disabled={isUpdating}
        onBlur = {(e) => handleUpdate(e, 'minBookingLength')}/>
      </FormRow>
      <FormRow label='Maximum nights/booking'>
        <Input type='number' defaultValue={maxBookingLength}
               disabled={isUpdating}
               onBlur = {(e) => handleUpdate(e, 'maxBookingLength')}
               id='max-nights' />
      </FormRow>
      <FormRow label='Maximum guests/booking'>
        <Input type='number' defaultValue={maxGuestPerBooking}

               disabled={isUpdating}
               onBlur = {(e) => handleUpdate(e, 'maxGuestPerBooking')}

               id='max-guests' />
      </FormRow>
      <FormRow label='Breakfast price'>
        <Input type='number' defaultValue={breakFastPrice}
               disabled={isUpdating}
               onBlur = {(e) => handleUpdate(e, 'breakFastPrice')}

               id='breakfast-price' />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;




