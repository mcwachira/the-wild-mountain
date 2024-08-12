import Button from "../../ui/Button.tsx";
import {useCheckout} from "./useCheckout.ts";

function CheckoutButton({ bookingId }) {

    const {checkout, isCheckOut} = useCheckout()
  return (
    <Button variation="primary" size="small" onClick={() => checkout(bookingId)} disabled={isCheckOut}>

      Check out
    </Button>
  );
}

export default CheckoutButton;
