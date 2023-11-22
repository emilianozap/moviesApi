import styled from "styled-components";
import hero from "../../assets/image/login.jpg";



export const LoginRoot = styled.div`
height: auto;
@media (max-width: 1330) {

}
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
margin-top: 40px;
padding: 10px;

text-align: center;
h4{
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    padding: 8px;
    font-size: large;

}
h5{
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    padding: 8px;
    font-size: medium;

}
h6{
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    padding: 8px;
font-size: medium;
}

`
