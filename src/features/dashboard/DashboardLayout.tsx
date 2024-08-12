import styled from "styled-components";
import useRecentBookings from "./useRecentBookings.ts";
import Spinner from "../../ui/Spinner.tsx";
import useRecentStays from "./useRecentStays.ts";
import Stats from "./Stats.tsx";
import {useCabins} from "../cabins/useCabin.ts";
import SalesChart from "./SalesChart.tsx";
import DurationChart from "./DurationChart.tsx";
import TodayActivity from "../check-in-out/TodayActivity.tsx";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;


function DashboardLayout() {

    const {bookings , isLoading:isLoadingBookings} = useRecentBookings();
    const {isLoading:isLoadingStays, confirmedStays, numDays} = useRecentStays()

    const {cabins, isLoading:isCabinsLoadings} = useCabins()
    if(isLoadingBookings || isLoadingStays || isCabinsLoadings) return <Spinner/>

    // console.log(stays)
    // console.log(bookings)
    return (
  <StyledDashboardLayout>
      <Stats bookings={bookings} confirmedStays={confirmedStays} numDays={numDays} cabinCount={cabins.length}/>

    <TodayActivity/>
   <DurationChart confirmedStays={confirmedStays}/>


      <SalesChart bookings={bookings} numDays={numDays} />
  </StyledDashboardLayout>
    );
}

export default DashboardLayout;