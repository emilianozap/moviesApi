import React from 'react'
import { ButtonRed } from '../../styles/Ui/StyledComponents';
import { PlantsRoot } from './PlanStyled';

const Plans = ({cost, children, color="red", wide}) => {
  return (
    <PlantsRoot>
      <h5>
      {children}
      </h5>
      <ButtonRed color={color} wide={wide}>Subscribe</ButtonRed>
      </PlantsRoot>
  )
}


export default Plans