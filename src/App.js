import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Home from "./pages/Home/Home";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./redux/slice/userSlice";
import { RootStyled } from "./styles/StyledApp";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {

      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))

      } else {
        dispatch(logout)
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <RootStyled>
      <BrowserRouter>
        {
          !user ? (<Login></Login>)
            : (<Routes>


              <Route path="/profile" element={<Profile />} />


              <Route path="/" element={<Home />} />
            </Routes>)



        }
      </BrowserRouter>
    </RootStyled>
  );
}


export default App;