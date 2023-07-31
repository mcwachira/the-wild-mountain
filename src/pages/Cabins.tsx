import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable.tsx";
import {useState} from "react";
import Button from "../ui/Button.tsx";
import CreateCabinForm from "../features/cabins/CreateCabinForm.tsx";


function Cabins() {

    let showForm: boolean, setShowForm: (value: (((prevState: boolean) => boolean) | boolean)) => void;
    [showForm, setShowForm] = useState<boolean>(false);
  return (

      <>


          <Row type="horizontal">
              <Heading as="h1">All cabins</Heading>
              <p>Filter / Sort</p>
          </Row>

          <Row>
              <CabinTable/>
              
              <Button onClick={() =>setShowForm((show) => setShowForm(!show))}>
                  Add New Cabin
              </Button>

              {showForm && <CreateCabinForm/>}
          </Row>

      </>

  );
}

export default Cabins;
