import styled from "styled-components";


export const ProfileRoot = styled.div`
color: #fff;
min-height: 80vh;
max-width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-items: center;
& h2{
  margin-top: 20px;
}
`

export const InfoProfile = styled.div`
margin-top: 50px;
width: 50%;
display: flex;
@media (max-width: 750px ) {
  width: 90%;
}

`

export const Avatar = styled.img`
height: 100px;
border-radius: 3px;
@media (max-width: 750px) {
  display: none;
}

`

export const Details = styled.div`
width: 100%;
margin-left: 3px;
h6{
    background-color: #aaa;
    padding: 15px;
    margin-bottom: 1px;
    font-size: 18px;
    color: #111111;
}
div{
    width: 100%;
}

`