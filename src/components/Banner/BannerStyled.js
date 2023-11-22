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
    @media (max-width: 400px) {
       margin-top:20px;

    }

  
    
`;

export const RootBanner1 = styled(RootBanner)`
    background-image: url(${banner});

    
`;

export const InfoContainer = styled.div`
    background-color: transparent;
    width: 350px;
    position: relative;
    top: 80px;
    left: 30px;
    z-index: 100;
    @media (max-width: 400px) {
        width: 98%;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 0;
        text-align: center;
        margin: 5px;


    }
    & h2{
        font-size: 60px;
        margin: 20px;
        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
        @media (max-width: 400px) {
        text-align: center;
        font-size: 50px;

    }
    }
    & h6{
        font-size: 25px;
        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
        @media (max-width: 400px) {
        text-align: center;
        font-size: 22px;
    }

}
`;

export const ButtonContainer = styled.div`
    position: absolute;
    top: 240px;
  

    
`;

export const Button = styled.button`
 cursor: pointer;
 color: #fff;
 text-align: center;
 border-radius: 5px;
 padding: 10px 25px 10px 25px;
 border-style: none;
 margin-right: 1rem;
 background-color: red;
 text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;

 width: 95px;
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

