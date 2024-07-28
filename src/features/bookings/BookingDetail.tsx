import styled from "styled-components";

import BookingDataBox from "./BookingDataBox.tsx";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag.tsx";
import ButtonGroup from "../../ui/ButtonGroup.tsx";
import Button from "../../ui/Button.tsx";
import ButtonText from "../../ui/ButtonText.tsx";

import { useMoveBack } from "../../hooks/useMoveBack.ts";
import {useParams} from "react-router-dom";
import {useBooking} from "./useBooking.ts";
import Spinner from "../../ui/Spinner.tsx";
import Empty from "../../ui/Empty.tsx";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {

  const {        isLoading,
      booking,
      error} = useBooking()

    if(isLoading) return <Spinner/>
    if(!booking) return <Empty resourceName="bookings"/>


    const {status, id} = booking




  const moveBack = useMoveBack();

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{id}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
