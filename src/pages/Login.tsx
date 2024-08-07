import styled from "styled-components";
import Heading from "../ui/Heading.tsx";
import LoginForm from "../features/authentication/LoginForm.tsx";
import Logo from "../ui/Logo.tsx";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

function Login() {
  return <LoginLayout>
    <Logo/>
    <Heading as="h4">Login to your Account</Heading>

    <LoginForm/>
  </LoginLayout>;
}

export default Login;
