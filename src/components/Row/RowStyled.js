import styled from "styled-components";


export const RowRoot= styled.div`
color: #fff;
margin-left: 4px;
`

export const Posters = styled.div  `
display: flex;
overflow-y: hidden;
overflow-x: scroll;
:-webkit-scrollbar{
    display: none;
}


`
export const Poster = styled.div`
max-height: 12rem;
object-fit: contain;
margin-right: 1px;
:hover{
    transform: scale(1.1);


}
transform: scale(1.1);

`