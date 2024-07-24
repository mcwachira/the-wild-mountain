import Button from "../../ui/Button.tsx";
import CreateCabinForm from "./CreateCabinForm.tsx";
import Modal from "../../ui/Modal.tsx";
// import CabinTable from "./CabinTable.tsx";


// const AddCabin = () => {
//     const  [openModal, setOpenModal] = useState<boolean>(false);
//
//     return (
//         <div>
//
//             <Button onClick={() => setOpenModal((show) => !show)}>
//                 Add new cabin
//             </Button>
//             {openModal && <Modal onClose={ () => setOpenModal(false)}>
//
//                 <CreateCabinForm onCloseModal={ () => setOpenModal(false)} />
//
//             </Modal>  }
//         </div>
//     )
// }
// export default AddCabin



const AddCabin = () => {
    return (

        <div>
            <Modal>

                <Modal.Open opens="cabin-form">

                    <Button>
                        Add a new Cabin
                    </Button>

                </Modal.Open>


                {/*//where we place the content of the modal*/}
                <Modal.Window name='cabin-form'>
                    <CreateCabinForm />
                </Modal.Window>




            </Modal>
        </div>

    )
}
export default AddCabin
