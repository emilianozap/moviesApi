import {
  AppBar,
  Avatar,
  IconButton,
  Toolbar,
  makeStyles,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import logo from "../../assets/image/logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const hideHeader = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", hideHeader);
    return () => window.removeEventListener("scroll", hideHeader);
  }, []);

  return (
    <AppBar
      elevation={0}
      className={`${classes.root} ${show && classes.transparent}`}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton onClick={() => navigate("/")}>
          <img src={logo} alt="logo" className={classes.logo} />
        </IconButton>

        <Avatar
          variant="square"
          className={classes.avatar}
          onClick={() => navigate("/profile")}
        />
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    position: "sticky",
    backgroundColor: "#111",
    top: 0,
    left: 0,
    right: 0,
  },
  transparent: {
    backgroundColor: "transparent",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    cursor: "pointer",
    width: "100px",
  },
  avatar: {
    cursor: "pointer",
  },
}));

export default Header;
