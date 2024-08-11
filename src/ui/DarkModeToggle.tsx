import ButtonIcon from "./ButtonIcon.tsx";
import {HiOutlineMoon, HiOutlineSun} from "react-icons/hi2";
import {useContext} from "react";
import {DarkModeContext, useDarkMode} from "../context/DarkModeContext.tsx";

function DarkModeToggle() {
    const {isDarkMode, toggleDarkMode} = useDarkMode();


    return (
        <ButtonIcon onClick={toggleDarkMode}>

            {isDarkMode? <HiOutlineSun/>: <HiOutlineMoon/>}
        </ButtonIcon>
    )
}

export default DarkModeToggle;