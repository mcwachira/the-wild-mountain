import styled from "styled-components";
import {formatCurrency} from "../../utils/helpers.js";
import Button from "../../ui/Button.tsx";

import {useState} from "react";
import CreateCabinForm from "./CreateCabinForm.tsx";
import {useDeleteCabin} from "./useDeleteCabin.ts";
import {HiSquare2Stack} from "react-icons/hi2";
import {HiPencil, HiTrash} from "react-icons/hi";
import {useCreateCabin} from "./useCreateCabin.ts";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;




const CabinRow = ({cabin}) => {



    const [showForm,  setShowForm] = useState<boolean>(false)

    const {id:cabinId, name, maxCapacity, regularPrice, discount, image}= cabin

 const {isDeleting, deleteCabin} = useDeleteCabin()
    const {isCreating, createCabin} = useCreateCabin()



const handleDupicate = () => {
        createCabin({
            name:`Copy of ${name}`,
             maxCapacity, regularPrice, discount, image
        })
    }

    return(

        <>
            <TableRow role ='row'>
                <Img src={image}/>
                <Cabin>
                    {name}
                </Cabin>
                <div>
                    Fits up to {maxCapacity} guests
                </div>

                <Price>
                    {formatCurrency(regularPrice)}
                </Price>

                {discount ? <Discount>
                    {formatCurrency(discount)}
                </Discount>: <span> &mdash; </span>}

                <div>

                    <Button disabled={isCreating} onClick={() => handleDupicate()}>
                        <HiSquare2Stack/>
                    </Button>
                    <Button onClick={() => setShowForm(!showForm)}>
                        <HiPencil/>
                    </Button>
                    <Button   onClick={() => deleteCabin(cabinId)} disabled={isDeleting}>
                      <HiTrash/>
                    </Button>
                </div>

            </TableRow>




    {
        showForm && <CreateCabinForm  cabinToEdit={cabin}/>
    }

        </>
    )
}

export default CabinRow