import styled from "styled-components";


export const SingUpRoot = styled.div`
max-width: 350px;
width: 20rem;
height: 25rem;
background: rgba(0,0,0,0.65);
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
`
export const Form = styled.form`
width: 80%;
input{
    margin: 10px;
    border-radius: 5px;
}
button{
margin-top: 10px;

}
`

export const SingUpLink = styled.span `
color: #FFF;
cursor: pointer;
:hover{
    text-decoration: underline;
}

`
