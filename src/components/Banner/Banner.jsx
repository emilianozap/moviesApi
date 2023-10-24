import { Button, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import banner from "../../assets/image/banner.jpg";

const Banner = () => {
  const classes = useStyles();
  const truncate = (string, n) =>
    string?.length > n ? `${string.substr(0, n - 1)} ...` : string;

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Typography variant="h2" component="h1">
          movie title
        </Typography>
        <div className={classes.buttons}>
          <Button>play</Button>
          <Button>my list</Button>
        </div>
        <Typography style={{wordWrap: "break-word"}} variant="h6" className={classes.description}>
          {
            truncate("   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Indignissimos ab neque quis eum, sed sapiente illum! Illo at nostrum mollitia? Veniam quaerat obcaecati cumque aspernatur vitae, dolores facere ipsum.", 150)
          }
       
        </Typography>
        <div className={classes.fadeBottom}></div>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${banner})`,
    position: "relative",
    height: "440px",
    objectFit: "contain",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
  },
  buttons: {
    "& button": {
      cursor: "pointer",
      color: "#fff",
      fontWeight: "700",
      borderRadius: "5px",
      padding: theme.spacing(1, 4, 1, 4),
      marginRight: "1rem",
      backgroundColor: "rgba(51,51,51,0.5)",
    },
    "& button:hover": {
      color: "#000",
      backgroundColor: "#e6e6e6",
    },
  },
  fadeBottom:{
    position: "absolute",
    top: "30vh",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 99,
    backgroundImage:"linear-gradient(180deg, transparent, rgba(37,37,37,0.61), #111)"



  }
}));

export default Banner;
