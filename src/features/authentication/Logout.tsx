
import ButtonIcon from "../../ui/ButtonIcon.tsx";
import {HiArrowRightOnRectangle} from "react-icons/hi2";

import {useLogout} from "./useLogout.ts";

function Logout() {
const {logout, isLoading} = useLogout()



    return (
<ButtonIcon onClick={() => logout()} disabled={isLoading}>
    <HiArrowRightOnRectangle/>
</ButtonIcon>
    );
}

export default Logout;