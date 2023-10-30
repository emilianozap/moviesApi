import styled from "styled-components";


export const ProfileRoot = styled.div`
color: #fff;
min-height: 100vh;
max-width: 800px;
display: flex;
flex-direction: column;
align-items: center;
`

export const InfoProfile = styled.div`

width: 80%;
display: flex;

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
}
div{
    width: 100%;
}

`