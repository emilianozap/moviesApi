import { makeStyles } from "@material-ui/core";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Paypal from "./pages/Paypal";
import Home from "./pages/Home";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./redux/slice/userSlice";

function App() {
  const user = useSelector (selectUser);
  console.log(selectUser);
  const classes = useStyles();
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {

      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))

      }else{
        dispatch(logout)
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <Router>
    
          <Routes>
          <Route path="/login" element={<Login />} />


            <Route path="/profile" element={<Profile />} />

            <Route path="/checkout " element={<Paypal />} />

            <Route path="/" element={<Home />} />
          </Routes>
        
      </Router>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#111",
    minHeight: "100vh",
  },
}));

export default App;
