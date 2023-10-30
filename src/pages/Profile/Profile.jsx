import { makeStyles } from "@material-ui/core";
import React from "react";
import Header from "../../components/Header/Header";
import avatar from "../../assets/image/avatar.jpg";
import Plans from "../../components/Plans/Plans";
import { ButtonRed } from "../../styles/Ui/StyledComponents";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const classes = useStyles();
  const navigate = useNavigate()


  const singOut = () =>{
    auth.signOut()
    navigate("/login")
  }
  return (
    <div className={classes.root}>
      <Header></Header>
      <h2>Edit Profile</h2>
        <div className={classes.info}>
          <img className={classes.avatar} src={avatar} alt="avatar" />
          <div className={classes.details}>
            <div className={classes.plans}>
              <h6>email usuario</h6>
              <h5>
                Plants
              </h5>
              <Plans cost={7.99}>Netflix Standard</Plans>
              <Plans cost={11.99}>Netflix Basic</Plans>
              <Plans wide= "medium" color="gray" cost={15.99}>Netflix Premium</Plans>
              <ButtonRed onClick={singOut} wide= "fullWidth">Sign Out</ButtonRed>
            </div>
          </div>
      </div>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    minHeight: "100vh",
    maxWidth: "800px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  info:{
    width: "80%",
    display: "flex",
  },
  avatar:{
    height: "100px",
    borderRadius: "3px",
    [theme.breakpoints.down("sm")]:{
      display: "none"
    }
  },
  details:{
    width: "100%",
    marginLeft:theme.spacing(3),
    "& h6":{
      backgroundColor: "#aaa",
      padding: theme.spacing(1),
      marginBottom: theme.spacing(1),
      fontSize: "18px"

    },
  },
  plans:{
    width: "100%",   
  },
  text:{
    borderBottom: "1px solid lightgray"
  }
}));

export default Profile;
