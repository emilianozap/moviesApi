import styled from "styled-components";

const handleWidth = wide => {
    switch (wide) {
        case "fullWidth": return "100%"
        case "medium": return "240px"
    
        default: return "160px"
    }
};



export const ButtonRed = styled.button`
background-color: ${(props)=> props.color === "gray" ? "lightgray": "#FFA600"};
z-index: 15;
color: #fff;
border-radius: ${(props)=> props.radius ? "5px" : null};
text-transform: inherit;
padding: 15px;
font-size: 1.1rem;
border: none;
outline: none;
cursor: pointer;
width:${({wide})=> handleWidth(wide)} ;
@media (max-width: 350px) {
max-width: 240px;

}

`

export const Input = styled.input`
display: flex;
justify-content: center;
align-items: center;
background-color: #fff;
padding: 25.5px;
height: 10px;
border-radius: 5px 0px 0px 5px;
border: none;




`