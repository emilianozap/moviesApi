import styled from "styled-components";
import hero from "../../assets/image/login.jpg";



export const LoginRoot = styled.div`
height: 100vh;
background-image: url(${hero});
background-repeat: no-repeat;
background-position: center;
background-size: cover;
object-fit: contain;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: #fff;

`

export const HeaderLogin = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
background-color: transparent;
height: 80px;
width: 90%;

`



export const Logo = styled.img`
width: 100px;
cursor: pointer;

`

export const Info = styled.div`
color: #fff;
margin-top: 80px;

text-align: center;
h4{
    font-weight: 800;
}
h5{
    font-weight: 400;
}

`
