import styled from "styled-components";
import { InputBase } from "@material-ui/core";

const handleWidth = wide => {
    switch (wide) {
        case "fullWidth": return "100%"
        case "medium": return "260px"
    
        default: return "160px"
    }
};



export const ButtonRed = styled.button`
background-color: ${(props)=> props.color === "gray" ? "lightgray": "red"};
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

`

export const Input = styled(InputBase)`
z-index: 30;
background-color: #fff;
padding: 25.5px;
height: 30px;
border-radius: 5px 0px 0px 5px;
border: none;




`