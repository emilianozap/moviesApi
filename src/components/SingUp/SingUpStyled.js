import styled from "styled-components";


export const SingUpRoot = styled.div`
max-width: 350px;
width: 20rem;
margin-top: 40px;
height: 25rem;
background: rgba(0,0,0,0.65);
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
@media (max-width: 350px) {
max-width: 270px;

}



`
export const Form = styled.form`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 80%;
input{
    margin: 10px;
    border-radius: 5px;
}
button{
margin-top: 10px;

}
p{
    margin-top: 20px;
    text-align: center;
}
`

export const SingUpLink = styled.span `
text-align: center;
color: #FFA600;
cursor: pointer;
:hover{
    text-decoration: underline;
}

`
