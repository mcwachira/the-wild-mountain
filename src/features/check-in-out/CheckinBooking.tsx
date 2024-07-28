import styled from "styled-components";
import BookingDataBox from "../bookings/BookingDataBox.tsx";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup.tsx";
import Button from "../../ui/Button.tsx";
import ButtonText from "../../ui/ButtonText.tsx";

import { useMoveBack } from "../../hooks/useMoveBack.ts";
import {useBooking} from "../bookings/useBooking.ts";
import Spinner from "../../ui/Spinner.tsx";
import {useEffect, useState} from "react";
import Checkbox from "../../ui/Checkbox.tsx";
import {formatCurrency} from "../../utils/helpers.ts";
import {useCheckin} from "./useCheckin.ts";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {

    const [confirmedPaid, setConfirmedPaid] = useState(false);

    const {booking, isLoading} = useBooking()

    const {checkin, isCheckingIn} = useCheckin()

    useEffect(() => setConfirmedPaid(booking?.isPaid ?? false ), [booking?.isPaid]);
    const moveBack = useMoveBack();

    if(isLoading) return <Spinner/>

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking;

  function handleCheckin() {
      checkin(bookingId)
  }

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />
        <Box>
            <Checkbox

                checked={confirmedPaid}
                onChange={() => setConfirmedPaid((confirm) => !confirm)}
                disabled={confirmedPaid || isCheckingIn}
            >
                I confirm  that the {guests?.fullName} has paid the total amount of {formatCurrency(totalPrice)}
            </Checkbox>
        </Box>
      <ButtonGroup>
        <Button onClick={handleCheckin}     disabled={!confirmedPaid || isCheckingIn}>Check in booking #{bookingId}</Button>


        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
