import React from "react";
import Header from "../../components/Header/Header";
import avatar from "../../assets/image/avatar.jpg";
import Plans from "../../components/Plans/Plans";
import { ButtonRed } from "../../styles/Ui/StyledComponents";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { Avatar, InfoProfile, ProfileRoot, Details } from "./ProfileStyled";
import { useSelector } from "react-redux";

const Profile = () => {
  const navigate = useNavigate()
  const user = useSelector((state) => state.user.user);

  const singOut = () =>{
    auth.signOut()
    navigate("/login")
  }
  return (
    <ProfileRoot>
      <Header></Header>
      <h2>Edit Profile</h2>
        <InfoProfile>
          <Avatar src={avatar} alt="avatar" />
          <Details>
            <div>
              <h6>{user.email}</h6>
              <h5>
                Plants
              </h5>
              <Plans description= {"Movie Hd Standard"} price={7.99}>Netflix Standard</Plans>
              <Plans description="Movie Hd Basic" price={11.99}>Netflix Basic</Plans>
              <Plans description="Movie Hd Premium" price={15.99}>Netflix Premium</Plans>
              <ButtonRed onClick={singOut} wide= "fullWidth">Sign Out</ButtonRed>
            </div>
          </Details>
      </InfoProfile>
    </ProfileRoot>
  );
};


export default Profile;
