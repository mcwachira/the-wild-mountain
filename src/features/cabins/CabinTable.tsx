import styled from "styled-components";
import Spinner from "../../ui/Spinner.tsx";
import CabinRow from "./CabinRow.tsx";
import {useCabins} from "./useCabin.ts";
import Table from "../../ui/Table"
import Menus from "../../ui/Menus";
import {useSearchParams} from "react-router-dom";
import cabinRow from "./CabinRow.tsx";



interface UseCabins {
    isLoading:boolean;
    cabins?: any[];
}

const CabinTable = () => {



    const {isLoading, cabins}:UseCabins =useCabins()
    console.log(cabins)

    const [searchParams] = useSearchParams()



    if(isLoading) return <Spinner/>

    const filteredValue = searchParams.get("discount") || "all"

    let filteredCabins;

    if(filteredValue === "all") filteredCabins = cabins
    if(filteredValue === "no-discount") filteredCabins = cabins?.filter((cabin) => cabin.discount === 0)
    if(filteredValue === "with-discount") filteredCabins = cabins?.filter((cabin) => cabin.discount > 0)
    return (

        <Menus>
            <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
                <Table.Header>
                    <div></div>
                    <div>Cabin</div>
                    <div>Capacity</div>
                    <div>Price</div>
                    <div>Discount</div>
                    <div></div>
                </Table.Header>

                <Table.Body
                    data={filteredCabins}
                    render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
                />
            </Table>
        </Menus>

    )
}

export default CabinTable