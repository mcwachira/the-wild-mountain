import styled from "styled-components";
import useRecentBookings from "./useRecentBookings.ts";
import Spinner from "../../ui/Spinner.tsx";
import useRecentStays from "./useRecentStays.ts";
import Stats from "./Stats.tsx";
import {useCabins} from "../cabins/useCabin.ts";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;


function DashboardLayout() {

    const {bookings , isLoading:isLoadingBookings} = useRecentBookings();
    const {stays, isLoading:isLoadingStays, confirmedStays, numDays} = useRecentStays()

    const {cabins, isLoading:isCabinsLoadings} = useCabins()
    if(isLoadingBookings || isLoadingStays || isCabinsLoadings) return <Spinner/>

    // console.log(stays)
    // console.log(bookings)
    return (
  <StyledDashboardLayout>
      <Stats bookings={bookings} confirmedStays={confirmedStays} numDays={numDays} cabinCount={cabins.length}/>
      <div>Statistics</div>
      <div>
          Today's Activities
      </div>
      <div>
          Chart Stay Duration
      </div>

      <div>
          Chart Sales
      </div>
  </StyledDashboardLayout>
    );
}

export default DashboardLayout;