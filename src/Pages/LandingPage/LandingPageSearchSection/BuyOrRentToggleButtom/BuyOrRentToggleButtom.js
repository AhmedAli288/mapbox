import React,{useState} from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { defaultBuyOrRent } from '../../../../Constants/ConstantValues';
import { Typography } from '@mui/material';

function BuyOrRentToggleButtom() {
    const [buyOrRent, setBuyOrRent] = useState(defaultBuyOrRent);

  const handleBuyOrRentValue = (event, buyOrRent) => {
    if (buyOrRent !== null) {
      setBuyOrRent(buyOrRent);
    }
  };


  return (
    <ToggleButtonGroup
      value={buyOrRent}
      exclusive
      onChange={handleBuyOrRentValue}
      aria-label="text alignment large"
      className='buyRent'
    
    >
      <ToggleButton value="buy" aria-label="Buy" >
        <Typography variant='DubaiRegular16'>Buy</Typography>
      </ToggleButton>
      <ToggleButton value="rent" aria-label="Rent" >
      <Typography variant='DubaiRegular16'>Rent</Typography>
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

export default BuyOrRentToggleButtom