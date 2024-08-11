import styled from "styled-components";
import Logout from "../features/authentication/Logout.tsx";
import HeaderMenu from "./HeaderMenu.tsx";
import UserAvatar from '../features/authentication/UserAvatar.tsx'

const StyledHeader = styled.header`
  background-color:var(--color-grey-0);
padding: 1.2rem 4.8rem;
border-bottom: 1px solid var(--color-grey-100);
    display: flex;
    gap: 2.4rem;
    align-items: center;
    justify-content: flex-end;
`

const Header = () => {
    return (
        <StyledHeader>
<UserAvatar/>
        <HeaderMenu/>
        </StyledHeader>
    )
}
export default Header
