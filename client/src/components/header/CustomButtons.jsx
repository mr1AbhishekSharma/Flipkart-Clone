import { Box,Button, Typography,styled } from "@mui/material";
import {ShoppingCart} from '@mui/icons-material';
import { useState } from "react";


//components

import LoginDialog from "../../login/LoginDialog";

const Wrapper=styled(Box)`
    display: flex;
    margin: 0 3% 0 auto;
    & > button , & > p,&>div{
        margin-right: 40px;
        font-size: 14px;
        align-items: center;
    }`;

const Container=styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:100px;
    `;

    

const LoginButton=styled(Button)`
    background: #fff;
    color: #2874f0;
    text-transform: none;
    padding: 5px 40px;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 600;
    height: 32px;`;


const CustomButtons = () => {
  const [open, setOpen] = useState(false);

  const openDialog = () => {
    setOpen(true);
  }
  return (
    <Wrapper>
      <LoginButton variant="contained" onClick={()=>openDialog()}>Login</LoginButton>
      <Typography style={{marginTop:3,width:135}}>Become a seller</Typography>
      <Typography style={{marginTop:3}}>more</Typography>
      <Container>
        <ShoppingCart />
        <Typography>Cart</Typography>
        
      </Container>
      <LoginDialog open={open} setOpen={setOpen}/>
    </Wrapper>
  );
}
export default CustomButtons;