import React from 'react';
import styled from 'styled-components';
import ButtonIcon  from "./ButtonIcon.tsx";
import {useNavigate} from "react-router-dom";
import {HiOutlineUser} from "react-icons/hi2";
import Logout from "../features/authentication/Logout.tsx";

const StyledHeaderMenu = styled.ul`
display: flex;
    gap:0.4rem;
    

`
function HeaderMenu() {

    const navigate= useNavigate();
    return (
  <StyledHeaderMenu>
      <li>
          <ButtonIcon>
              <HiOutlineUser/>

          </ButtonIcon>
      </li>
      <li></li>
      <li onClick={() => navigate('/user')}>

          <Logout/>
      </li>

  </StyledHeaderMenu>
    );
}

export default HeaderMenu;