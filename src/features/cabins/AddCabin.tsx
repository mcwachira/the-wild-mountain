import Button from "../../ui/Button.tsx";
import CreateCabinForm from "./CreateCabinForm.tsx";
import {useState} from "react";
import Modal from "../../ui/Modal.tsx";


const AddCabin = () => {
    const  [openModal, setOpenModal] = useState<boolean>(false);

    return (
        <div>

            <Button onClick={() => setOpenModal((show) => !show)}>
                Add new cabin
            </Button>
            {openModal && <Modal onClose={ () => setOpenModal(false)}>

                <CreateCabinForm onCloseModal={ () => setOpenModal(false)} />

            </Modal>  }
        </div>
    )
}
export default AddCabin
