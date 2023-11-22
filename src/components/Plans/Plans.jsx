import React, { useState } from "react";
import { ButtonRed } from "../../styles/Ui/StyledComponents";
import { PlantsRoot } from "./PlanStyled";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setPrice } from "../../redux/slice/priceSlice";
import { KEY_MP, URL_MP } from "../../Utils/constants";


  //mercado pago
  const Plans = ({ price, description, children, color = "red", wide }) => {
    useSelector((state) => state.user.user);
   const dispatch = useDispatch()
    const [preferenceId, setPreferenceId] = useState(null);
    initMercadoPago(KEY_MP);


    const handleBuy = async () => {
      dispatch(setPrice(price, description))
      const id = await createPreference();
      console.log(id);

      if (id) {
        setPreferenceId(id);

      }else{
        console.log("error");
      }
      console.log(handleBuy);
    };

    const createPreference = async ( ) => {
      try {
        const response = await axios.post(
          `${URL_MP}/create_preference`,
          {
            description: description,
            price: price,
            quantity:1,
            currency_id: "ARS"
          }
        );

        const { id } = response.data;
        console.log(id);
        return id;
      } catch (error) {
        console.log(error);
      }
    };

 


    return (
      <>
      <PlantsRoot>
        <h5>{children}</h5>
        <ButtonRed
          onClick={()=>handleBuy(price, description)}
          color={color}
          wide={wide}
          price={price}
          description={description}
        >
          Subscribe
        </ButtonRed>
       
      </PlantsRoot>
      <div>
      {preferenceId && <Wallet initialization={{ preferenceId }} />}
      </div>
      </>
    );
  };



export default Plans;
