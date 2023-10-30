import  styled  from "styled-components";
import banner from "../../assets/image/banner.jpg";

export const RootBanner = styled.div`
    background-image: url(${banner});
    position: relative;
    height: 440px;
    object-fit: contain;
    background-size: cover;
    background-position: center;
    color: #fff;
`;

export const Button = styled.button`
 cursor: pointer;
 color: #fff;
 font-weight: 700;
 border-radius: 5px;
 padding: 1px 4px 1px 4px;
 margin-right: 1rem;
 background-color: rgba(51,51,51,0.5);
 :hover{
    color: #000;
    background-color: #e6e6e6;
 }


`;

export const FadeBottom = styled.div`
position: absolute;
top:  30vh;
bottom: 0;
left: 0;
right: 0;
z-index: 99;
background-image: linear-gradient(180deg, transparent, rgba(37,37,37,0.61), #111);
`;

