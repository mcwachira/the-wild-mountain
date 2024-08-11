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
          <ButtonIcon  onClick={() => navigate('/account')}>
              <HiOutlineUser/>

          </ButtonIcon>
      </li>
      <li></li>
      <li>

          <Logout/>
      </li>

  </StyledHeaderMenu>
    );
}

export default HeaderMenu;