import { Typography, makeStyles } from "@material-ui/core";
import logo from "../assets/image/logo.png";
import hero from "../assets/image/login.jpg";
import { ButtonRed, Input } from "../styles/StyledComponents";
import { useState } from "react";
import SingUp from "./SingUp";

const Login = () => {
  const classes = useStyles();
  const[sigIn, setSigIn] = useState(false)




  return (
    <div className={classes.root}>
      <img src={logo} alt="logo" className={classes.logo} />
      <ButtonRed className={classes.session}>iniciar sesión</ButtonRed>
      <div className={classes.info}>
        {!sigIn ? (
        <SingUp/>
        ):( 
          <>
            <Typography variant="h4" gutterBottom>
            Películas y series ilimitadas y mucho más
          </Typography>
          <Typography variant="h5">
            Disfruta donde quieras. Cancela cuando quieras.
          </Typography>
          <Typography variant="h6" gutterBottom>
            ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o
            reiniciar tu membresía de Netflix.
          </Typography>
  
          <div className={classes.inputBlock}>
          <Input placeholder="Email"></Input>
          <ButtonRed>Comenzar </ButtonRed>
          </div>
          </>
           )
        }
       
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    height: "100vh",
    backgroundImage: `url(${hero})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    objectFit: "contain",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"

  },
  logo: {
    width: "150px",
    position: "fixed",
    top: 0,
    left: 20,
    cursor: "pointer",
  },
  session: {
    position: "fixed",
    top: 20,
    zIndex: 15,
    right: 20,
  },
  info:{
    color: "#fff",
    zIndex: 15,
    textAlign: "center",
    "& h4":{
      fontWeight: 800,
    },
    "& h5":{
      fontWeight: 400,

    }

  }
}));

export default Login;
