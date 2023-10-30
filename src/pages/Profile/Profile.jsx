import React from "react";
import Header from "../../components/Header/Header";
import avatar from "../../assets/image/avatar.jpg";
import Plans from "../../components/Plans/Plans";
import { ButtonRed } from "../../styles/Ui/StyledComponents";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { Avatar, InfoProfile, ProfileRoot, Details } from "./ProfileStyled";

const Profile = () => {
  const navigate = useNavigate()


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
              <h6>email usuario</h6>
              <h5>
                Plants
              </h5>
              <Plans cost={7.99}>Netflix Standard</Plans>
              <Plans cost={11.99}>Netflix Basic</Plans>
              <Plans wide= "medium" color="gray" cost={15.99}>Netflix Premium</Plans>
              <ButtonRed onClick={singOut} wide= "fullWidth">Sign Out</ButtonRed>
            </div>
          </Details>
      </InfoProfile>
    </ProfileRoot>
  );
};


export default Profile;
