import { useState } from "react";
import { ButtonRed, Input } from "../../styles/Ui/StyledComponents";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { Form, SingUpLink, SingUpRoot } from "./SingUpStyled";

const SingUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()


  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
    .then((authUser)=> navigate("/"))
    .catch((err)=>alert(err.message))
  };

  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
    .then((authUser)=> navigate("/"))
    .catch((err)=>alert(err.message))
  };


  return (
    <SingUpRoot>
      <h5>
        Sign In
      </h5>
      <Form>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
          type="email"
        />

        <Input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
          type="password"
        />
        <ButtonRed onClick={signIn} type="submit" wide="medium" radius>
          Sing In
        </ButtonRed>
        <p>
          New to Netflix?{"  "}
          <SingUpLink onClick={register}>
            Sign Up now. {"  "}
          </SingUpLink>
        </p>
      </Form>
    </SingUpRoot>
  );
};



export default SingUp;
