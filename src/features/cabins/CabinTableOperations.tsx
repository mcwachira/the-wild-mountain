
import TableOperations from "../../ui/TableOperations.tsx";
import Filter from "../../ui/Filter.tsx";
import SortBy from "../../ui/SortBy.tsx";

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

            <SortBy
                     options={
                         [
                             {value:"name-asc", label:"Sort by name (A-Z)"},
                             {value:"name-desc", label:"Sort By Name Desc (Z-A)"},
                             {value:"regularPrice-asc", label:"Sort By price (low first)"},
                             {value:"regularPrice-desc", label:"Sort By price (high first)"},
                             {value:"maxCapacity-asc", label:"Sort By capacity (low first)"},
                             {value:"maxCapacity-desc", label:"Sort By price (high first)"},

                         ]
                     }
            />

        </TableOperations>
    );
}

export default CabinTableOperations;