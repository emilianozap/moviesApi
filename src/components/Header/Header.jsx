
import React, { useEffect, useState } from "react";
import logo from "../../assets/image/logo.png";
import avatar1 from "../../assets/image/avatar1.jpg";
import { useNavigate } from "react-router-dom";
import { Logo, RootHeader, Avatar } from "./HeaderStyled";

const Header = () => {
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
    <RootHeader>
        <Logo src={logo} onClick={() => navigate("/")}>
                  </Logo>

        <Avatar src={avatar1}
          
          onClick={() => navigate("/profile")}
        />
    </RootHeader>
  );
};



export default Header;
