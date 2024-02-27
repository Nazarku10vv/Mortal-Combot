import { Box, Typography, Button } from "@mui/material";
import React from "react";
import "./TheShop.css"


const TheShopSave = () => {
  return (
    <Box id="theShopSaveBac">
      <Box className="theShopSaveText">
        <Typography sx={{color:"#fff",fontWeight:"600",padding:"120px 0 5px 0"}} variant="h4">SIGN UP & SAVE</Typography>
        <Typography sx={{color:"#fff", padding:"0 0 7px 0"}}>
          Sign up for our newsletter and SAVE 15% on your next order.
        </Typography>
        <div class="input-container">
          <input required="" placeholder="Email Address" type="email" />
          <button class="invite-btn" type="button">
            save
          </button>
        </div>
        <Typography sx={{color:"#fff", padding:"10px 0 10px 0"}} >
        By entering your email address, you agree to receive updates, ads and <br /> offers from Warner Bros. and its affiliates.
        </Typography>
        <Typography sx={{color:"#fff",padding:"0 0 10px 0"}}>
        To withdraw your consent or learn more about your rights, see the <br /> Privacy Policy.
        </Typography>
        <Button className="SeveButton" sx={{width:"200px",height:"60px",border:"2px solid #fff",color:"#fff"}} >
        SUBSCRIBE
        </Button>
      </Box>
    </Box>
  );
};

export default TheShopSave;
