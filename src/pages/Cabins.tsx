import Heading from "../ui/Heading";
import Row from "../ui/Row";
import getCabins from "../services/apiCabins";
import {useEffect} from "react";

function Cabins() {

    const fetchCabins = async() => {
        getCabins
    }


    useEffect(() => {

       getCabins().then((data) => console.log(data))
    }, [])
  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
        </Row>

      <Row>
          <CabinTable/>
      </Row>
  );
}

export default Cabins;