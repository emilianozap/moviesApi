import styled from "styled-components";


export const RowRoot= styled.div`
color: #fff;
margin-left: 4px;
margin-top: 20px;
`

export const Posters = styled.div  `
display: flex;
margin-top: 10px;
overflow-y: hidden;

&::-webkit-scrollbar{
    background-color: transparent;
    height: 6px;
}

&::-webkit-scrollbar-thumb{
    background-color: #FFBB02;
    border-radius: 20px;
}


`
export const Poster = styled.img`
max-height: 15rem;
object-fit: contain;
margin-right: 10px;
cursor: pointer;
transition-duration: .5s;
&:hover{
    transform: scale(1.1);
}


`