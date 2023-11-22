import styled from "styled-components";




export const RootHeader = styled.div`
position: sticky;
background-color: transparent;
z-index: 5000;
top: 0;
left: 0;
right: 0;
display: flex;
justify-content: space-between;
align-items: center;
height: 60px;
width: 100%;
`

export const Logo = styled.img`
cursor: pointer;
width: 100px;
position: sticky;
left: 20px;
margin-top: 20px;

`
export const Avatar = styled.img`
cursor: pointer;
width: 60px;
position: sticky;
right: 20px;
margin-top: 20px;
`
