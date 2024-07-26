
import TableOperations from "../../ui/TableOperations.tsx";
import Filter from "../../ui/Filter.tsx";

function CabinTableOperations() {
    return (


        <TableOperations>
            <Filter  filterField="discount"
                     options={
                [
                    {value:"all", label:"All"},
                    {value:"no-discount", label:"No Discount "},
                    {value:"with-discount", label:"with-discount"},

            ]
            }
            />

        </TableOperations>
    );
}

export default CabinTableOperations;