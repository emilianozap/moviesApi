import { Typography, makeStyles } from "@material-ui/core";
import { useState } from "react";
import { ButtonRed, Input } from "../styles/StyledComponents";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const SingUp = () => {
  const classes = useStyles();
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
    <div className={classes.root}>
      <Typography variant="h5" align="left">
        Sign In
      </Typography>
      <form className={classes.form}>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className={classes.email}
          placeholder="Email"
          type="email"
        />

        <Input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className={classes.password}
          placeholder="Password"
          type="password"
        />
        <ButtonRed onClick={signIn} type="submit" wide="medium" radius>
          Sing In
        </ButtonRed>
        <Typography variant="subtitle2">
          New to Netflix?{"  "}
          <span className={classes.signUpLink} onClick={register}>
            Sign Up now. {"  "}
          </span>
        </Typography>
      </form>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "350px",
    width: "20rem",
    height: "25rem",
    background: "rgba(0,0,0,0.65)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  form: {
    width: "80%",
  },
  email: {
    marginBottom: theme.spacing(2),
  },
  password: {
    marginBottom: theme.spacing(4),
  },
  signUpLink: {
    color: "#fff",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

export default SingUp;
