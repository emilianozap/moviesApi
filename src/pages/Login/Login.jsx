import logo from "../../assets/image/logo.png";
import { ButtonRed, Input } from "../../styles/Ui/StyledComponents";
import { useState } from "react";
import SingUp from "../../components/SingUp/SingUp";
import { HeaderLogin, Info, LoginRoot, Logo } from "./LoginStyled";

const Login = () => {
  const [sigIn, setSigIn] = useState(false);

  return (
    <LoginRoot>
      <HeaderLogin>
      <Logo src={logo} alt="logo" />
        <ButtonRed>iniciar sesión</ButtonRed>
        
      </HeaderLogin>
      <SingUp />
      <Info>
     
       
          <div>
            <h4>Películas y series ilimitadas y mucho más</h4>
            <h5>Disfruta donde quieras. Cancela cuando quieras.</h5>
            <h6>
              ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o
              reiniciar tu membresía de Netflix.
            </h6>
          </div>
      
      </Info>
    </LoginRoot>
  );
};

export default Login;
