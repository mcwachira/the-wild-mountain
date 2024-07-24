import styled from "styled-components";
import Spinner from "../../ui/Spinner.tsx";
import CabinRow from "./CabinRow.tsx";
import {useCabins} from "./useCabin.ts";


const Table = styled.div`
  border: 1px solid var(--color-grey-500);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-700);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;


interface UseCabins {
    isLoading:boolean;
    cabins?: any[];
}

const CabinTable = () => {



    const {isLoading, cabins}:UseCabins =useCabins()
    console.log(cabins)


    if(isLoading) return <Spinner/>

    return (

        <Table role='table'>
            <TableHeader role='row'>
                <div></div>
                <div>Cabin</div>
                <div>Capacity</div>
                <div>Price</div>
                <div>Discount</div>
                <div></div>

            </TableHeader>


            {cabins?.map((cabin) => <CabinRow key={cabin.id} cabin={cabin} />)}
        </Table>
    )
}

export default CabinTable