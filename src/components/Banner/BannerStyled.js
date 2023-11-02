import  styled  from "styled-components";
import banner from "../../assets/image/unnamed.png";




export const RootBanner = styled.div`
    ${({bg}) => bg ? `background-image: url(${bg});` : `background-image: url(${banner});`}
    position: relative;
    height: 640px;
    background-size: cover;
    background-position: center;
    color: #fff;
    width: 100%;
    object-fit:cover;
   
  
    
`;

export const RootBanner1 = styled(RootBanner)`
    background-image: url(${banner});
    margin-top: 20px;

    
`;

export const InfoContainer = styled.div`
    background-color: transparent;
    width: 30%;
    position: relative;
   
    top: 80px;
    left: 30px;
    z-index: 100;
    & h2{
        font-size: 60px;
        margin: 20px;
        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    }
    & h6{
        font-size: 25px;
        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    }

    
`;

export const ButtonContainer = styled.div`
    position: absolute;
    top: 240px;

    
`;

export const Button = styled.button`
 cursor: pointer;
 color: #fff;
 font-weight: 700;
 border-radius: 5px;
 padding: 10px 50px 10px 40px;
 border-style: none;
 margin-right: 1rem;
 background-color: red;
 margin: 20px;
 &:hover{
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

