import React from 'react';
import Stat from "./Stat.tsx";
import {HiOutlineBriefcase} from "react-icons/hi";
import {HiOutlineBanknotes, HiOutlineCalendarDays, HiOutlineChartBar} from "react-icons/hi2";
import {formatCurrency} from "../../utils/helpers.ts";

function Stats({bookings, confirmedStays, numDays, cabinCount}) {

    // 1. Total Bookings
    const numBookings = bookings.length;

    // 2. Total Sales
    const sales = bookings.reduce((acc, cur) =>  acc + cur.totalPrice,0)

    // 3. Total Confirmed Stays
        const checkins = confirmedStays.length;

    // 4. Check occupancy rate
    const occupation = confirmedStays.reduce((acc, cur) =>  acc + cur.numNights,0) / (numDays * cabinCount)

    return (
        <>
        <Stat title='Bookings'  color="blue" icon={<HiOutlineBriefcase/>} value={numBookings} />
        <Stat title='Sales'  color="green" icon={<HiOutlineBanknotes/>} value={formatCurrency(sales)} />
        <Stat title='Check Ins'  color="indigo" icon={<HiOutlineCalendarDays/>} value={checkins} />
        <Stat title='Occupancy Rate'  color="blue" icon={<HiOutlineChartBar/>} value={Math.round(occupation * 100) + "%"} />
        </>
    );
}

export default Stats;