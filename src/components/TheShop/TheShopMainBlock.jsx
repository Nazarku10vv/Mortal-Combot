import { Box, Typography } from "@mui/material";
import React from "react";
import "./TheShop.css";

const TheShopMainBlock = () => {
  return (
    <Box>
      <Box className="mortalBlock">
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "800",
            padding:"10px 0",
          }}
        >
          SIGN UP FOR OUR NEWSLETTER AND SAVE 15%
        </Typography>
        <Box>
          <Typography
            variant="h4"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "800",
              color: "rgb(15, 15, 139)",
              margin:"10px 0 7px 0"
            }}
          >
            MORTAL KOMBAT
          </Typography>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "black",
            }}
          >
            Get over here! The official Mortal Kombat 1 collection is here! Are
            you ready?
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TheShopMainBlock;
