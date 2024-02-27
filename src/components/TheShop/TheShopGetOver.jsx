import { Avatar, Box, Typography, backdropClasses } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import "./TheShop.css";

const TheShopGetOver = () => {
  return (
    <Box id="mkGetOver">
      <Box className="container1">
        <Box className="GetBlock">
          <Typography
            variant="h4"
            sx={{
              color: "#fff",
              textAlign: "center",
              fontWeight: "900",
              padding: "50px 0 30px 0",
            }}
          >
            GET OVER HERE!
          </Typography>
          <Typography sx={{ color: "#fff", textAlign: "center" }}>
            Celebrate the legacy of Mortal Kombat with the new era created by
            Fire God Liu Kang in Mortal Kombat 1 and 30 Years of Kombat with the
            30th Anniversary Collection.
          </Typography>
          <Box className="mkGet">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <img
                style={{ width: "700px", height: "400px", margin: "20px 0" }}
                src="https://wbshop.com/cdn/shop/files/MK1_updated-min_2048x.png?v=1686346035"
                alt="mk"
              />
              <Button variant="h1" className="TheShopGetGet"
                sx={{
                  border: "2px solid #fff",
                  color: "white",
                  width: "300px",
                  height: "60px",
                  fontWeight:"900"
                }}
              >
                MORTAL KOMBAT 1 KOLLECTION
              </Button>
            </Box>
            <Box 
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <img
                style={{ width: "700px", height: "400px", margin: "20px 0" }}
                src="https://wbshop.com/cdn/shop/files/Anniversary_Collection-min_2048x.png?v=1684424169"
                alt="mk"
              />
              <Button variant="h1" className="TheShopGetGet"
                sx={{
                  border: "2px solid #fff",
                  color: "white",
                  width: "300px",
                  height: "60px",
                  fontWeight:"900"
                }}
              >
                30TH ANNIVERSARY KOLLECTION
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TheShopGetOver;
