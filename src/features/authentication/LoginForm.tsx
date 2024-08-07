import { useState } from "react";
import Button from "../../ui/Button.tsx";
import Form from "../../ui/Form.tsx";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import {useLogin} from "./useLogin.ts";
import Spinner from "../../ui/Spinner.tsx";

function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");


  const {login, isLoading} = useLogin()
  function handleSubmit(e) {
e.preventDefault()
      if(!email || !password) return;
      login({email, password},
          {
              onSettled:() => {
                  setEmail("");
                  setPassword("");
              }
          })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large"   disabled={isLoading}>
            {!isLoading ? 'Log In': <Spinner/>}
            </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
